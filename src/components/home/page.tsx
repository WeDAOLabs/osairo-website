"use client";
import React from "react";
import "swiper/css";
import "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

import HomePage0 from "./home.page.0";
import HomePage1 from "./home.page.1";
import HomePage2 from "./home.page.2";
import HomePage3 from "./home.page.3";
import HomePage4 from "./home.page.4";
import HomePage5 from "./home.page.5";
import HomePage6 from "./home.page.6";

export default function Home() {
  return (
    <Swiper
      direction={"vertical"}
      spaceBetween={10}
      mousewheel={true}
      modules={[Mousewheel]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={false}
      autoHeight={true}
      speed={500}
      style={{
        height: "100vh",
      }}
    >
      <SwiperSlide>
        <HomePage0 />
      </SwiperSlide>
      <SwiperSlide>
        <HomePage1 />
      </SwiperSlide>
      <SwiperSlide>
        <HomePage2 />
      </SwiperSlide>
      <SwiperSlide>
        <HomePage3 />
      </SwiperSlide>
      <SwiperSlide>
        <HomePage4 />
      </SwiperSlide>
      <SwiperSlide>
        <HomePage5 />
      </SwiperSlide>
      <SwiperSlide>
        <HomePage6 />
      </SwiperSlide>
    </Swiper>
  );
}
