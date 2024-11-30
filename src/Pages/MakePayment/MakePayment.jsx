import { useLoaderData } from "react-router-dom";
import PageBanner from "../../components/PageBanner/PageBanner";
import { useContext} from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";


const MakePayment = () => {
    const bookingData = useLoaderData();
    const {_id, userName,email,phone,title,img,date,price,message} = bookingData
    const {user} = useContext(AuthContext)
   

    const handleMakePayment = (e) =>{
       e.preventDefault()
        const booking ={userName,email,phone,title,img,date,price,message,serviceId:bookingData._id}

        axios.post(`https://car-doctor-server-brown-zeta.vercel.app/create-payment/${_id}`,booking)
        .then(res => {
            window.location.replace(res.data?.redirectURL)
        })

        
    }
    
    return (
        <div>
            <PageBanner title="Make Payment" breadcrumb="Home/make-payment" />
            <div className="my-24">
                <div className="card w-full shrink-0 shadow-2xl">
                    <div className="px-20 py-10">
                        
                        <form onSubmit={handleMakePayment} className="card-body">


                            <div className="flex gap-6">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-black">Name</span>
                                    </label>
                                    <input name="name" defaultValue={userName} readOnly type="text" placeholder="name" className="input input-bordered bg-white" required />
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-black">Service Date</span>
                                    </label>
                                    <input name="serviceDate" defaultValue={date} readOnly type="date" placeholder="Service Date" className="input input-bordered bg-white" required />
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-black">Your Phone</span>
                                    </label>
                                    <input name="phone" defaultValue={phone} readOnly type="text" placeholder="phone" className="input input-bordered bg-white" required />
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-black">Email</span>
                                    </label>
                                    <input name="email" readOnly defaultValue={email} type="email" placeholder="email" className="input input-bordered bg-white" required />
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-black">Service Name</span>
                                    </label>
                                    <input name="serviceName" readOnly defaultValue={title} type="text" placeholder="service" className="input input-bordered bg-white" required />
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-black">Price</span>
                                    </label>
                                    <input name="price" readOnly defaultValue={"$"+price} type="text" placeholder="price" className="input input-bordered bg-white" required />
                                </div>
                            </div>



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Message</span>
                                </label>
                                <textarea defaultValue={message} readOnly className="input input-bordered bg-white" placeholder="Message" rows="10" name="" id=""></textarea>
                                
                                
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-green-700 text-white">Make a Payment</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MakePayment; 

