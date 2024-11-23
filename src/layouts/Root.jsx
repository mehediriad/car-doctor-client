import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


const Root = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
            <Header/>
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;