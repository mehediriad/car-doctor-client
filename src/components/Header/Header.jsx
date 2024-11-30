import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {

    const { user,logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const [booking,setBooking] = useState([])
    const [total,setTotal] = useState(0);

    useEffect(() => {
        fetch(`https://car-doctor-server-brown-zeta.vercel.app/booking?email=${user?.email}`,{credentials:"include"})
            .then(res => res.json())
            .then(data => {
                setBooking(data)
                const totalPrice = booking.reduce((accumulator, currentProduct) => {
                    return accumulator + parseInt(currentProduct.price) ;
                  }, 0);

                  setTotal(totalPrice)
            })
    }, [booking])


    const handleAppoinment = (e) =>{
        e.preventDefault()
        navigate("/appoinment")
    }

    const handleCart = (e) =>{
        e.preventDefault()
        navigate("/cart-details")
    }
    

    const handleLogOut = (e) =>{
        e.preventDefault()
        logOut()
        .then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    const links = <>
        <li><NavLink to={`/`}>Home</NavLink></li>
        <li><NavLink to={`/about`}>About</NavLink></li>
        <li><NavLink to={`/services`}>Service</NavLink></li>
        <li><NavLink to={`/blogs`}>Blog</NavLink></li>
        <li><NavLink to={`/contact`}>Contact</NavLink></li>
        {!user && <li><NavLink to={`/login`}>Login</NavLink></li>}
        {user && <li><NavLink to={`/dashboard`}>Dashboard</NavLink></li>}
        {user?.email === import.meta.env.VITE_ADMIN && <li><NavLink to={`/manage-all-orders`}>Manage Order</NavLink></li>}

    </>
    return (
        <div className="md:py-6 py-4">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost text-xl"><img className="h-16" src={logo} alt="logo" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">


                    {
                        user &&


                        <div className="flex-none">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                    <div className="indicator">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        <span className="badge badge-sm indicator-item">{booking.length}</span>
                                    </div>
                                </div>
                                <div
                                    tabIndex={0}
                                    className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                                    <div className="card-body">
                                        <span className="text-lg font-bold text-white">{booking.length} Items</span>
                                        <span className="text-info">Subtotal: ${total}</span>
                                        <div className="card-actions">
                                            <button onClick={handleCart} className="btn btn-primary btn-block">View cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    <button className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>

                    <button onClick={handleAppoinment} className="btn btn-outline btn-warning">Appointment</button>

                    {
                        user && <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={user && user.photoURL} />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="bg-white menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">{user && user.displayName}</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><button onClick={handleLogOut}>Logout</button></li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;