import Swal from "sweetalert2";


const PaymentFail = () => {
    Swal.fire({
        title: "Faield!",
        text: "Your payment Fail!",
        icon: "error"
      });
    return (
        <div className="h-screen flex justify-center items-center">
            <h2 className="text 2xl font-bold my-8">Payment Faild</h2>
        </div>
    );
};

export default PaymentFail;