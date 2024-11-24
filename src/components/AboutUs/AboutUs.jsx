import person from "../../assets/images/about_us/person.jpg"
import parts from "../../assets/images/about_us/parts.jpg"

const AboutUs = () => {
    return (
        <div>
            <div className="hero my-20">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2 relative">
                        <div className="w-3/4">
                            <img
                                src={person}
                                className="w-full rounded-lg shadow-2xl" />
                        </div>
                        <div className="w-1/2 absolute top-1/2 right-8 border-8 border-white rounded-2xl">
                            <img
                                src={parts}
                                className="w-full rounded-lg" />
                        </div>

                    </div>
                    <div className="w-1/2 space-y-6">
                        <h3 className="text-lg font-bold text-[#FF3811]">About Us</h3>
                        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-6">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>
                        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className="btn bg-[#FF3811] text-white">Get More Info</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;