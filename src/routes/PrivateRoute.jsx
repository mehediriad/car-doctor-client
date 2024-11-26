import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {

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

    if (user) {
        return (
            <div>
                {children}
            </div>
        );
    }
};

export default PrivateRoute;