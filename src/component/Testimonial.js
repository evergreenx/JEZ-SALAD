import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

const Testimonial = () => {
  return (
    <div className=" bg-testimonial-bg pt-28">
      <div className="mt-28 flex lg:flex-row flex-col lg:mx-16 mx-5">
        <div className="why-choose-us mr-20">
          <h1
            className="text lg:text-5xl text-4xl font-semibold w-96 tracking-tighter
           "
          >
            What Are People Saying
            <span className="text-primary"> About Us</span>
          </h1>

          <p className="text-xl  text-black-text w-96 mt-8">
            We are very happy if you are satisfied with our service and
            products, let's read pure reviews from customers who bought our
            products.
          </p>
        </div>

        <div className="slider flex justify-around">
          
  
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
   
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
