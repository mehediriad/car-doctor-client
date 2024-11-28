import { useState,useEffect } from "react";
import ServiceAreaCard from "../ServiceAreaCard/ServiceAreaCard";


const ServiceArea = () => {

    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services',)
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="mb-20">
            <div className="md:w-1/2 mx-auto text-center space-y-3">
                <h3 className="text-lg font-bold text-[#FF3811]">Service</h3>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p className="py-6">
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
            </div>

            <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceAreaCard
                    key={service._id}
                    service ={service}
                    ></ServiceAreaCard>)
                }
            </div>
            <div className="text-center mt-10">
            <button className="btn btn-outline border-[#FF3811] text-black ">More Service</button>
            </div>
        </div>
    );
};

export default ServiceArea;