import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import notFound from "../../assets/notfound.png"

const ErrorPage = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto">
                <Header />
                <div className="flex justify-center items-center h-screen">
                    <img src={notFound} alt="Not Found" />
                </div>

            </div>
            <Footer />
        </>
    );
};

export default ErrorPage;