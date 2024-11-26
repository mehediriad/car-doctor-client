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
                element: <PrivateRoute><ManageAllOrders /></PrivateRoute>,
            },
            {
                path: "/service-details",
                element: <ServiceDetails />,
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
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            
        ]
    },
]);

export default router;