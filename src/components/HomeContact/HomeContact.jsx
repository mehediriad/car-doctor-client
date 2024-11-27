import { RiCalendarScheduleFill } from "react-icons/ri";
import { MdPermPhoneMsg } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";

const HomeContact = () => {
    return (
        <div className="flex flex-col md:flex-row justify-around bg-[#151515] rounded px-10 py-20 mb-20 gap-6">
            <div className="flex text-white justify-center items-center gap-4">
                <div>
                    <RiCalendarScheduleFill className="text-4xl"/>
                </div>
                <div className="space-y-2">
                    <small className="text-md">We are open monday-friday</small>
                    <h3 className="text-4xl font-bold">7:00 am - 9:00 pm</h3>
                </div>
            </div>
            <div className="flex text-white justify-center items-center gap-4">
                <div>
                    <MdPermPhoneMsg className="text-4xl"/>
                </div>
                <div  className="space-y-2">
                    <small  className="text-md">Have a question?</small>
                    <h3  className="text-4xl font-bold">+2546 251 2658</h3>
                </div>
            </div>
            <div  className="flex text-white justify-center items-center gap-4">
                <div>
                    <ImLocation2  className="text-4xl"/>
                </div>
                <div className="space-y-2">
                    <small  className="text-md">Need a repair? our address</small>
                    <h3  className="text-4xl font-bold">Liza Street, New York</h3>
                </div>
            </div>
        </div>
    );
};

export default HomeContact;