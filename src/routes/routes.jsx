import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import AddNewService from "../Pages/AddNewService/AddNewService";
import CartDetails from "../Pages/CartDetails/CartDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CheckOut from "../Pages/CheckOut/CheckOut";
import ManageAllOrders from "../Pages/ManageAllOrders/ManageAllOrders";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Services from "../Pages/Services/Services";
import Blogs from "../Pages/Blogs/Blogs";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Appoinment from "../Pages/Appoinment/Appoinment";
import AdminRoute from "./AdminRoute";
import MakePayment from "../Pages/MakePayment/MakePayment";
import PaymentSuccess from "../Pages/PaymentSuccess/PaymentSuccess";
import PaymentFail from "../Pages/PaymentFail/PaymentFail";
import PaymentCancel from "../Pages/PaymentCancel/PaymentCancel";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement:<ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/blogs",
                element: <Blogs />,
            },
            {
                path: "/services",
                element: <Services />,
            },
            {
                path: "/add-new-service",
                element: <AddNewService />,
            },
            {
                path: "/manage-all-orders",
                element: <AdminRoute><ManageAllOrders /></AdminRoute>,
            },
            {
                path: "/service-details/:id",
                element: <ServiceDetails />,
                loader:({params})=> fetch(`https://car-doctor-server-brown-zeta.vercel.app/${params.id}`,{credentials:'include'})
            },
            {
                path: "/cart-details",
                element: <PrivateRoute><CartDetails /></PrivateRoute>,
            },
            {
                path: "/checkout",
                element: <CheckOut />,
            },
            {
                path: "/dashboard",
                element: <PrivateRoute><Dashboard /></PrivateRoute> ,
            },
            {
                path: "/appoinment",
                element: <PrivateRoute><Appoinment /></PrivateRoute> ,
            },
            
            {
                path: "/checkout/:id",
                element: <PrivateRoute><CheckOut /></PrivateRoute> ,
                loader: ({params}) => fetch(`https://car-doctor-server-brown-zeta.vercel.app/services/${params.id}`)
            },
            {
                path: "/make-payment/:uid",
                element: <PrivateRoute><MakePayment /></PrivateRoute> ,
                loader: ({params}) => fetch(`https://car-doctor-server-brown-zeta.vercel.app/booking/${params.uid}`, {credentials:"include"})
            },
            {
                path: "/payment-success",
                element: <PrivateRoute><PaymentSuccess /></PrivateRoute> ,    
            },
            {
                path: "/payment-fail",
                element: <PrivateRoute><PaymentFail /></PrivateRoute> ,    
            },
            {
                path: "/payment-cancel",
                element: <PrivateRoute><PaymentCancel /></PrivateRoute> ,    
            },
            
        ]
    },
]);

export default router;