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
                path: "/add-new-service",
                element: <AddNewService />,
            },
            {
                path: "/manage-all-orders",
                element: <ManageAllOrders />,
            },
            {
                path: "/service-details",
                element: <ServiceDetails />,
            },
            {
                path: "/cart-details",
                element: <CartDetails />,
            },
            {
                path: "/checkout",
                element: <CheckOut />,
            },
        ]
    },
]);

export default router;