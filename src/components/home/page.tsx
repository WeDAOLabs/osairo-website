"use client";
import React, { useEffect, useState } from "react";
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
import TitleBar from "@/components/title-bar/title-bar";
import { EventBus } from "@/plugins/event.bus";
import { EventPageSlide } from "@/events/event.page.slide";
import { EventPushSwiperSlide } from "@/events/event.push.swiper.slide";

export default function Home() {
  let swiperObj: any = null;

  const onSwiper = (swiper: any) => {
    swiperObj = swiper;
  };

  const onSlideChange = (swiper: any) => {
    EventBus.instance.emit(EventPageSlide.event, swiper.realIndex);
  };

  const onPushSwiperSlide = (idx: any) => {
    if (!swiperObj) {
      return;
    }
    swiperObj.slideTo(idx, 0);
  };

  useEffect(() => {
    EventBus.instance.on(EventPushSwiperSlide.event, onPushSwiperSlide);

    return () => {
      EventBus.instance.off(EventPushSwiperSlide.event, onPushSwiperSlide);
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Swiper
        direction={"vertical"}
        spaceBetween={10}
        mousewheel={true}
        modules={[Mousewheel]}
        onSlideChange={onSlideChange}
        onSwiper={onSwiper}
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
      <TitleBar />
    </div>
  );
}
