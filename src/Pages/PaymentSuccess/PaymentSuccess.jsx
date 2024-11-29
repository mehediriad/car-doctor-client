import Swal from "sweetalert2";


const PaymentSuccess = () => {
    Swal.fire({
        title: "Good job!",
        text: "Your Payment has been successful!",
        icon: "success"
      });
    return (
        <div className="h-screen flex justify-center items-center">
            <h2 className="text 2xl font-bold my-8">Payment Success</h2>
        </div>
    );
};

export default PaymentSuccess;