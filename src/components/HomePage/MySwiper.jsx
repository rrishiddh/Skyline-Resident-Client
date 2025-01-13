import img1 from "../../assets/01.jpg";
import img2 from "../../assets/02.jpg";
import img3 from "../../assets/03.jpg";

import { EffectCards,Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cards";
import "swiper/css";
import "swiper/css/bundle";

const MySwiper = () => {
  return (
    <div className="mx-auto p">
      <Swiper
        modules={[EffectCards,Autoplay]}
        slidesPerView={1}
        effect="cards"
        spaceBetween={20}
        cardsEffect={{
          rotate: 20,
        }}
        grabCursor={true}

        autoplay={{
            delay: 3000, 
            disableOnInteraction: false, 
          }}
      >
        <SwiperSlide className="rounded-2xl w-[50%] mx-auto my-auto object-cover">
          <img src={img1} className="object-cover"/>
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl w-[50%] mx-auto my-auto object-cover">
          <img src={img2}  className="object-cover" />
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl w-[50%] mx-auto my-auto object-cover">
          <img src={img3}  className="object-cover" />
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl w-[80%] mx-auto my-auto object-cover">
          <img src='https://img.freepik.com/free-photo/3d-rendering-scandinavian-vintage-modern-kitchen-with-dining-area_105762-2192.jpg?t=st=1736790946~exp=1736794546~hmac=2e59ca2da29f3f6225635eabbdd73fadaf5cddaa42480ab18e2ceaefb8a7f6d7&w=826'  className="object-cover" />
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl w-[80%] mx-auto my-auto object-cover">
          <img src='https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-design-chandelier_105762-2230.jpg?t=st=1736790942~exp=1736794542~hmac=8ee152cbbeb914d9cbdf1c4de43c2cb41f8c91fb31b4fb7b7871cfbf4015aaa2&w=826'  className="object-cover"/>
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl w-[80%] mx-auto my-auto object-cover">
          <img src='https://img.freepik.com/free-photo/3d-rendering-loft-scandinavian-living-room-with-working-table-bookshelf_105762-2096.jpg?t=st=1736790908~exp=1736794508~hmac=5675e66adeaa6ccc4b441d2ab2378b6c4ff5db9e16db56c8675da323f1bbc1ec&w=826'  className="object-cover" />
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl w-[80%] mx-auto my-auto object-cover">
          <img src='https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1736790855~exp=1736794455~hmac=62bdecf83d282dc616eb53cb843055292a0d1709800d76e1dde018c74d434fbd&w=826'  className="object-cover" />
        </SwiperSlide>
        
        <SwiperSlide className="rounded-2xl w-[80%] mx-auto my-auto object-cover">
          <img src='https://img.freepik.com/free-photo/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-tv-shelf_105762-2077.jpg?t=st=1736791103~exp=1736794703~hmac=9104a760735c131f27ce120ddf6a74ed96b23a3ff11d65697f571301334a5b32&w=826' className="object-cover" />
        </SwiperSlide>
        
        
      </Swiper>
    </div>
  );
};

export default MySwiper;
