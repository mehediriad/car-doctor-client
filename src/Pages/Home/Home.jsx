import AboutUs from "../../components/AboutUs/AboutUs";
import Banner from "../../components/Banner/Banner";
import HomeContact from "../../components/HomeContact/HomeContact";
import ServiceArea from "../../components/ServiceArea/ServiceArea";



const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutUs/>
            <ServiceArea/>
            <HomeContact/>
        </div>
    );
};

export default Home;