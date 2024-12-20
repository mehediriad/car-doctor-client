import { useLoaderData, useNavigate } from "react-router-dom";
import PageBanner from "../../components/PageBanner/PageBanner";
import { useContext, useRef } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";



const CheckOut = () => {
    const service = useLoaderData();
    const {user} = useContext(AuthContext)
    const messageRef = useRef();
    const navigate = useNavigate()

    const handleCheckOut = (e) =>{
        e.preventDefault()
        const userName = e.target.name.value;
        const email = user?.email;
        const phone = e.target.phone.value;
        const title = service.title;
        const img = service.img;
        const date = e.target.serviceDate.value;
        const price = service.price;
        const message = messageRef.current.value || "";
        

        const booking ={userName,email,phone,title,img,date,price,message,serviceId:service._id}

       
        
        fetch("https://car-doctor-server-brown-zeta.vercel.app/booking",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                navigate(`/make-payment/${data.insertedId}`)
                
            }
        })

        
    }
    
    return (
        <div>
            <PageBanner title="CheckOut" breadcrumb="Home/CheckOut" />
            <div className="my-24">
                <div className="card w-full shrink-0 shadow-2xl">
                    <div className="px-20 py-10">
                        
                        <form onSubmit={handleCheckOut} className="card-body">


                            <div className="flex gap-6">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-black">Name</span>
                                    </label>
                                    <input name="name" defaultValue={user?.displayName} type="text" placeholder="name" className="input input-bordered bg-white" required />
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-black">Service Date</span>
                                    </label>
                                    <input name="serviceDate" type="date" placeholder="Service Date" className="input input-bordered bg-white" required />
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-black">Your Phone</span>
                                    </label>
                                    <input name="phone" type="text" placeholder="phone" className="input input-bordered bg-white" required />
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-black">Email</span>
                                    </label>
                                    <input name="email" readOnly defaultValue={user?.email} type="email" placeholder="email" className="input input-bordered bg-white" required />
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-black">Service Name</span>
                                    </label>
                                    <input name="serviceName" readOnly defaultValue={service.title} type="text" placeholder="service" className="input input-bordered bg-white" required />
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-black">Price</span>
                                    </label>
                                    <input name="price" readOnly defaultValue={"$"+ service.price} type="text" placeholder="price" className="input input-bordered bg-white" required />
                                </div>
                            </div>



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Message</span>
                                </label>
                                <textarea ref={messageRef} className="input input-bordered bg-white" placeholder="Message" rows="10" name="" id=""></textarea>
                                
                                
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-[#FF3811] text-white">Order Confirm</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CheckOut; 