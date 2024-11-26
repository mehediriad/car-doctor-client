import { useEffect, useState } from "react";
import PageBanner from "../../components/PageBanner/PageBanner";
import OrderRow from "../../components/OrderRow/OrderRow";


const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])

    const handleUpdate = (e,id) =>{
        e.preventDefault()
        const status = e.target.status.value;
        console.log(status,id);
        
    }
    useEffect(() => {
        fetch(`http://localhost:5000/booking`)
            .then(res => res.json())
            .then(data => setOrders(data))
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
                              
                                    orders.map(order => <OrderRow key={order._id} handleUpdate={handleUpdate} order={order} ></OrderRow>)
                                
                            }
                            
                           
                           
                           
                        </tbody>
                        
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageAllOrders;