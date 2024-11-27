import { IoIosCloseCircle } from "react-icons/io";

const BookingRow = ({book,handleBookingDelete}) => {

    const {_id,img,title,price,date,status} = book;
    return (
        <tr>
            <th>
                <button onClick={()=>handleBookingDelete(_id)} className="text-4xl"><IoIosCloseCircle /></button>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="rounded h-24 w-24">
                            <img
                                src={img}
                                alt="img" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>
                        <div className="text-sm opacity-50">Quick Service</div>
                    </div>
                </div>
            </td>
            <td>
                ${price}
            </td>
            <td>{date}</td>
            <th>
                <span className={`${status == "pending" && "bg-[#FF3811]"} ${status == "approved" && "bg-green-700"} ${status == "cancel" && "bg-red-900"} px-8 py-2 rounded-lg text-white capitalize`}>{status}</span>
            </th>
        </tr>
    );
};

export default BookingRow;