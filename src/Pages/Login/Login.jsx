import { FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import login from "../../assets/images/login/login.svg"
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src={login} alt="Login" />

                    </div>
                    <div className="card w-full max-w-sm shrink-0 shadow-2xl p-4 ">
                        <div className="card-body">
                            <h1 className="text-2xl font-bold">Login</h1>
                            <form>

                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text text-black">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered bg-transparent" required />
                                </div>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text text-black">Password</span>
                                    </label>
                                    <div className="form-control relative">
                                        <input type={show ? "text" : "password"} placeholder="password" className="input input-bordered bg-transparent" required />
                                        <button className="absolute top-4 right-3 text-[#A2A2A2]" onClick={() => setShow(!show)}>{show ? <FaEye />:<FaEyeSlash /> }</button>
                                    </div>
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#FF3811] text-white">Sign In</button>
                                </div>
                            </form>
                            <div className="text-center mt-3 space-y-3">
                                <small>Or Sign In With</small>
                                <div className="space-x-4">
                                    <button className="text-[#3B5998] bg-[#F5F5F8] p-3 rounded-full hover:bg-slate-200"><FaFacebookF /></button>
                                    <button className="text-[#3C79E6] bg-[#F5F5F8] p-3 rounded-full hover:bg-slate-200"><FaLinkedinIn /></button>
                                    <button className="bg-[#F5F5F8] p-3 rounded-full hover:bg-slate-200"><FcGoogle /></button>
                                </div>
                                <small>Have an account?<Link to={`/register`} className="btn btn-link text-[#FF3811]">Sign In</Link></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;