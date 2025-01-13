import img1 from "../../assets/01.jpg";
import img2 from "../../assets/02.jpg";
import img3 from "../../assets/03.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BannerText from "./BannerText";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <BannerText
            image={img1}
            text="Welcome to Skyline Resident. Experience elevated living in a community that values comfort, convenience, and connection. Our residents enjoy a range of amenities and exceptional service. Discover your haven in the sky!"
          ></BannerText>
        </SwiperSlide>
        <SwiperSlide>
          <BannerText
            image={img2}
            text="Skyline Resident: Where urban living meets tranquility. Enjoy breathtaking views, world-class amenities, and a vibrant community. Elevate your lifestyle today.."
          ></BannerText>
        </SwiperSlide>
        <SwiperSlide>
          <BannerText
            image={img3}
            text="Discover the difference at Skyline Resident. Experience unparalleled comfort, exceptional service, and a vibrant community. Your home awaits."
          ></BannerText>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
