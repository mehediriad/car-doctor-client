
import { Link, NavLink, useLoaderData } from "react-router-dom";
import PageBanner from "../../components/PageBanner/PageBanner";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaFileContract } from "react-icons/fa6";


const ServiceDetails = () => {
    const service = useLoaderData()
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch("https://car-doctor-server-brown-zeta.vercel.app/services/")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const { _id, img, description, title, facility, price } = service
    return (
        <div>
            <PageBanner title="Service Details" breadcrumb={`Home/service-details/${service.title}`}></PageBanner>
            <div className="grid grid-cols-3 my-20 gap-6">
                <div className="col-span-2 space-y-4">
                    <div className="rounded-lg">
                        <img className="w-full rounded-lg" src={img} alt="img" />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">{title}</h2>
                        <p>{description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 py-6 gap-8">
                        {facility.map((singleFacility, idx) => <div key={idx}
                            className="bg-[#F3F3F3] rounded-lg border-t-2 border-[#FF3811] p-10"
                        >
                            <h3 className="text-lg font-bold">{singleFacility.name}</h3>
                            <small>{singleFacility.details}</small>
                        </div>)}
                    </div>
                </div>




                <div className=" space-y-6">

                    <div className="bg-[#F3F3F3] rounded-lg p-6">
                        <h3 className="text-lg font-bold">Services</h3>
                        <div>
                            {
                                services.map(service => {
                                    return <ul key={service._id} className="menu menu-vertical px-1">
                                        <li><NavLink to={`/service-details/${service._id}`} className="flex justify-between items-center">{service.title} <button className="text-[#FF3811]"><FaArrowRight /></button></NavLink></li>
                                    </ul>

                                })
                            }

                        </div>
                    </div>
                    <div className="bg-[#151515] rounded-lg p-6 space-y-6 text-white">
                        <h3 className="text-lg font-bold">Download</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-2 items-center">
                                    <div>
                                        <FaFileContract className="text-3xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-md font-bold">Our Brochure</h3>
                                        <small>Download</small>
                                    </div>
                                </div>
                                <div className="bg-[#FF3811] p-4 rounded-lg">
                                    <button className="text-white"><FaArrowRight /></button>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-2 items-center">
                                    <div>
                                        <FaFileContract className="text-3xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-md font-bold">Company Details</h3>
                                        <small>Download</small>
                                    </div>
                                </div>
                                <div className="bg-[#FF3811] p-4 rounded-lg">
                                    <button className="text-white"><FaArrowRight /></button>
                                </div>
                            </div>



                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold">Price ${price}</h2>
                    </div>

                    <div className=" p-4 rounded-lg">
                        <Link to={`/checkout/${_id}`}><button className="text-white btn bg-[#FF3811] w-full">Proceed CheckOut</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;