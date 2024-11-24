import img1 from "../../assets/images/banner/1.jpg"
import img2 from "../../assets/images/banner/2.jpg"
import img3 from "../../assets/images/banner/3.jpg"
import img4 from "../../assets/images/banner/4.jpg"
import img5 from "../../assets/images/banner/5.jpg"
import img6 from "../../assets/images/banner/6.jpg"

const Banner = () => {
    
    return (
        <div className="mb-8">
            <div className="carousel w-full md:h-[600px] rounded-lg">


                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={img1}
                        className="w-full" />
                        <div className="absolute w-full h-full bg-[rgba(21, 21, 21)] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21,0)]">
                        <div className="space-y-6 flex flex-col justify-center h-full ml-6 md:ml-20">
                            <div>
                                <h2 className="lg:text-6xl md:text-4xl font-bold text-white">Affordable <br /> Price For Car <br /> Servicing</h2>
                            </div>
                            <div>
                                <p className="text-white">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            </div>
                            <div className="space-x-6">
                                <button className="btn btn-error">Discover More</button>
                                <button className="btn btn-outline">Leatest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute w-full h-full bg-[rgba(21, 21, 21)] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21,0)]">
                        <div className="space-y-6 flex flex-col justify-center h-full ml-6 md:ml-20">
                            <div>
                                <h2 className="text-6xl font-bold text-white">Affordable <br /> Price For Car <br /> Servicing</h2>
                            </div>
                            <div>
                                <p className="text-white">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            </div>
                            <div className="space-x-6">
                                <button className="btn btn-error">Discover More</button>
                                <button className="btn btn-outline">Leatest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-5 flex gap-2 -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>



                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={img2}
                        className="w-full" />
                        <div className="absolute w-full h-full bg-[rgba(21, 21, 21)] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21,0)]">
                        <div className="space-y-6 flex flex-col justify-center h-full ml-6 md:ml-20">
                            <div>
                                <h2 className="text-6xl font-bold text-white">Affordable <br /> Price For Car <br /> Servicing</h2>
                            </div>
                            <div>
                                <p className="text-white">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            </div>
                            <div className="space-x-6">
                                <button className="btn btn-error">Discover More</button>
                                <button className="btn btn-outline">Leatest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-5  flex gap-2 -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>




                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={img3}
                        className="w-full" />
                        <div className="absolute w-full h-full bg-[rgba(21, 21, 21)] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21,0)]">
                        <div className="space-y-6 flex flex-col justify-center h-full ml-6 md:ml-20">
                            <div>
                                <h2 className="text-6xl font-bold text-white">Affordable <br /> Price For Car <br /> Servicing</h2>
                            </div>
                            <div>
                                <p className="text-white">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            </div>
                            <div className="space-x-6">
                                <button className="btn btn-error">Discover More</button>
                                <button className="btn btn-outline">Leatest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute  bottom-0 right-5  flex gap-2 -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>



                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src={img4}
                        className="w-full" />
                        <div className="absolute w-full h-full bg-[rgba(21, 21, 21)] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21,0)]">
                        <div className="space-y-6 flex flex-col justify-center h-full ml-6 md:ml-20">
                            <div>
                                <h2 className="text-6xl font-bold text-white">Affordable <br /> Price For Car <br /> Servicing</h2>
                            </div>
                            <div>
                                <p className="text-white">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            </div>
                            <div className="space-x-6">
                                <button className="btn btn-error">Discover More</button>
                                <button className="btn btn-outline">Leatest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-5 flex gap-2 -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>



                <div id="slide5" className="carousel-item relative w-full">
                    <img
                        src={img5}
                        className="w-full" />
                        <div className="absolute w-full h-full bg-[rgba(21, 21, 21)] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21,0)]">
                        <div className="space-y-6 flex flex-col justify-center h-full ml-6 md:ml-20">
                            <div>
                                <h2 className="text-6xl font-bold text-white">Affordable <br /> Price For Car <br /> Servicing</h2>
                            </div>
                            <div>
                                <p className="text-white">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            </div>
                            <div className="space-x-6">
                                <button className="btn btn-error">Discover More</button>
                                <button className="btn btn-outline">Leatest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-5 flex gap-2 -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>



                <div id="slide6" className="carousel-item relative w-full">
                    <img
                        src={img6}
                        className="w-full" />
                        <div className="absolute w-full h-full bg-[rgba(21, 21, 21)] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21,0)]">
                        <div className="space-y-6 flex flex-col justify-center h-full ml-6 md:ml-20">
                            <div>
                                <h2 className="text-6xl font-bold text-white">Affordable <br /> Price For Car <br /> Servicing</h2>
                            </div>
                            <div>
                                <p className="text-white">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            </div>
                            <div className="space-x-6">
                                <button className="btn btn-error">Discover More</button>
                                <button className="btn btn-outline">Leatest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute  bottom-0 right-5 flex gap-2 -translate-y-1/2 transform justify-between">
                        <a href="#slide6" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>




            </div>
        </div>
    );
};

export default Banner;