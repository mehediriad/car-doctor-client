import { FaArrowRight } from "react-icons/fa";


const ServiceAreaCard = ({service}) => {
    const {img,title,price} = service
    return (
        
            <div className="flex flex-col us w-96 shadow-xl p-6">
                <figure className="rounded-lg">
                    <img
                        src={img}
                        alt="Service"
                        className="rounded-lg" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    
                    
                </div>
                <div className="justify-end flex justify-between items-center">
                    <h3 className="text-lg font-bold text-[#FF3811]">Price: ${price}</h3>
                        <button className="text-[#FF3811]"><FaArrowRight/></button>
                </div>
            </div>
        
    );
};

export default ServiceAreaCard;