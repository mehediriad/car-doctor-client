import Swal from "sweetalert2";


const PaymentCancel = () => {
    Swal.fire({
        title: "Cancel!",
        text: "Your are the cancel of the payment!",
        icon: "error"
      });
    return (
        <div className="h-screen flex justify-center items-center">
        <h2 className="text 2xl font-bold my-8">Payment Cancel</h2>
    </div>
    );
};

export default PaymentCancel;