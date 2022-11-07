import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import Hoc from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
// import 'swiper/css'

function Portfolio() {
  return (
    <div className="Portfolio">
      {/* Heading */}
      <span>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper>
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hoc} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Portfolio;
