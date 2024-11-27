import { IoIosCloseCircle } from "react-icons/io";

const OrderRow = ({ order, handleUpdate,handleBookingDelete }) => {
    const { _id, img, title, price, date, email, status } = order;
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
            <td>{email}</td>
            <td>{date}</td>
            <th>
                <div>
                    <form className="flex" onSubmit={(e) => handleUpdate(e, _id)}>

                        {
                            status == "pending" &&
                            <select name="status" className="select select-sm rounded-r-none select-warning max-w-xs bg-white border-[#FF3811]">
                                <option disabled >select</option>
                                <option value="pending" selected>Pending</option>
                                <option value="approved">Approved</option>
                                <option value="cancel">Cancel</option>

                            </select>
                        }
                        {
                            status == "approved" &&
                            <select name="status" className="select select-sm rounded-r-none select-warning max-w-xs bg-white border-[#FF3811]">
                                <option disabled>select</option>
                                <option value="pending" >Pending</option>
                                <option value="approved" selected>Approved</option>
                                <option value="cancel">Cancel</option>

                            </select>
                        }
                        {
                            status == "cancel" &&
                            <select name="status" className="select select-sm rounded-r-none select-warning max-w-xs bg-white border-[#FF3811]">
                                <option disabled >select</option>
                                <option value="pending" >Pending</option>
                                <option value="approved" selected>Approved</option>
                                <option value="cancel" selected>Cancel</option>

                            </select>
                        }



                        <button type="submit" className="btn btn-sm bg-[#FF3811] text-white rounded-l-none">Update</button>
                    </form>
                </div>
            </th>
        </tr>
    );
};

export default OrderRow;