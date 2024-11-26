import { useContext, useEffect, useState } from "react";
import PageBanner from "../../components/PageBanner/PageBanner";
import { AuthContext } from "../../provider/AuthProvider";
import BookingRow from "../../components/BookingRow/BookingRow";
import Swal from "sweetalert2";


const CartDetails = () => {

    const { user } = useContext(AuthContext)
    const [booking, setBooking] = useState([])

    const handleBookingDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/booking/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const restBooking = booking.filter(book => book._id !== id)
                            
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            setBooking(restBooking)
                        }
                    })

            }
        });

    }


    useEffect(() => {
        fetch(`http://localhost:5000/booking?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])
    return (
        <div>
            <PageBanner title="Cart Details" breadcrumb="Home/cart-details"></PageBanner>

            <div className="my-20 lg:px-20">

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Service</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                booking.map(book => <BookingRow key={book._id} book={book} handleBookingDelete={handleBookingDelete}></BookingRow>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default CartDetails;