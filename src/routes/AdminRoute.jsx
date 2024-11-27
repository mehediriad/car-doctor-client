import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import notFound from "../assets/notfound.png"


const AdminRoute = ({children}) => {
    const { user,loading } = useContext(AuthContext)
    const location = useLocation()
   
    

    if(loading){
        return <div className="flex justify-center items-center h-screen">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    if(!user){
        return <Navigate to="/login" state={location?.pathname} />
    }

    if (user && user.email === import.meta.env.VITE_ADMIN) {
        return (
            <div>
                {children}
            </div>
        );
    }else{
        return(
            <>
            <div className="max-w-7xl mx-auto">
                
                <div className="flex justify-center items-center h-screen">
                    <img src={notFound} alt="Not Found" />
                </div>

            </div>
            
        </>
        )
    }
};

export default AdminRoute;