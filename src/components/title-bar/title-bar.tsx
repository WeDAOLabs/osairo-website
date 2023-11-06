"use client";

import { useEffect } from "react";
import { EventBus } from "@/plugins/event.bus";
import { EventPageSlide } from "@/events/event.page.slide";
import titleBarModule from "./title-bar.module.css";

export default function TitleBar() {
  useEffect(() => {
    EventBus.instance.on(EventPageSlide.event, onSlideChange);

    return () => {
      EventBus.instance.off(EventPageSlide.event, onSlideChange);
    };
  }, []);

  const onSlideChange = (idx: number) => {
    console.log("slide is changed to", idx);
  };

  return (
    <>
      <div className={titleBarModule.titleBar}>
        <div
          style={{
            width: 923,
            height: 70,
            background: "#ffebbb",
            borderRadius: 50,
            marginTop: 30,
          }}
        ></div>
      </div>
    </>
  );
}
