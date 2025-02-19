import AboutBuilding from "./AboutBuilding";
import Banner from "./Banner";
import Coupon from "./Coupon";
import DiscoverOurLocation from "./DiscoverOurLocation";
import Faqn from "./Faqn";
import NewsLetter from "./Newsletter";
import ResidentTestimonials from "./ResidentTestimonials";
import WhyUs from "./WhyUs";

const Home = () => {
    return (
        <div> 
            <Banner></Banner>
            <AboutBuilding></AboutBuilding>
            <WhyUs></WhyUs>
            <Coupon></Coupon>
            <ResidentTestimonials></ResidentTestimonials>
            <DiscoverOurLocation></DiscoverOurLocation>
            <Faqn></Faqn>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;