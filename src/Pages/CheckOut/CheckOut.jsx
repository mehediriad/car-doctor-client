import { useLoaderData } from "react-router-dom";
import PageBanner from "../../components/PageBanner/PageBanner";


const CheckOut = () => {
    const service = useLoaderData()
    return (
        <div>
            <PageBanner title="CheckOut" breadcrumb="Home/CheckOut" />
            <div className="my-24">
                <div className="card w-full shrink-0 shadow-2xl">
                    <div className="px-20 py-10">
                        <form className="card-body">


                            <div className="flex gap-6">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-black">First Name</span>
                                    </label>
                                    <input type="text" placeholder="first name" className="input input-bordered bg-white" required />
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-black">Last Name</span>
                                    </label>
                                    <input type="text" placeholder="last name" className="input input-bordered bg-white" required />
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-black">Your Phone</span>
                                    </label>
                                    <input type="text" placeholder="phone" className="input input-bordered bg-white" required />
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-black">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered bg-white" required />
                                </div>
                            </div>



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Message</span>
                                </label>
                                <textarea className="input input-bordered bg-white" placeholder="Message" rows="10" name="" id=""></textarea>
                                
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#FF3811] text-white">Order Confirm</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CheckOut; 