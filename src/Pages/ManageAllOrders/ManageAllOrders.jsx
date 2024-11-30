import { useEffect, useState } from "react";
import PageBanner from "../../components/PageBanner/PageBanner";
import OrderRow from "../../components/OrderRow/OrderRow";
import Swal from "sweetalert2";


const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])

    const handleUpdate = (e,id) =>{
        e.preventDefault()
        const status = e.target.status.value;
        console.log(status);
        

        fetch(`https://car-doctor-server-brown-zeta.vercel.app/booking/${id}`, {
            method: "PATCH",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({status})
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                
                
                Swal.fire({
                    title: "Updated!",
                    text: "Status has been updated.",
                    icon: "success"
                });

                
            }
        })
        
        
    }


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

                fetch(`https://car-doctor-server-brown-zeta.vercel.app/booking/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const restOrders = orders.filter(book => book._id !== id)
                            
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            setOrders(restOrders)
                        }
                    })

            }
        });

    }
    useEffect(() => {
        fetch(`https://car-doctor-server-brown-zeta.vercel.app/booking`,{credentials:"include"})
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [])
    return (
        <div>
            <PageBanner title="Manage All Orders" breadcrumb="Home/manage-all-orders"></PageBanner>
            <div className="my-20 lg:px-20">

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Service</th>
                                <th>Price</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                              
                                    orders.map(order => <OrderRow key={order._id} handleUpdate={handleUpdate} handleBookingDelete={handleBookingDelete} order={order} ></OrderRow>)
                                
                            }
                            
                           
                           
                           
                        </tbody>
                        
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageAllOrders;