"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { EventBus } from "@/plugins/event.bus";
import { EventPageSlide } from "@/events/event.page.slide";
import TitleMenuItem, { ITitleMenuItem } from "../title-menu/title-menu-item";
import titleBarModule from "./title-bar.module.css";
import titleMenuItemStyle from "../title-menu/title-menu.module.css";

export default function TitleBar() {
  const onMenuItemClicked = (item: ITitleMenuItem) => {
    console.log("idx", item);
  };

  const TitleMenuItems: ITitleMenuItem[] = [
    {
      key: 0,
      txt: "COMMUNITY",
      selected: true,
      onClick: onMenuItemClicked,
    },
    {
      key: 1,
      txt: "ECONOMY",
      selected: false,
      onClick: onMenuItemClicked,
    },
    {
      key: 2,
      txt: "ROADMAP",
      selected: false,
      onClick: onMenuItemClicked,
    },
    {
      key: 3,
      txt: "EARN",
      selected: false,
      onClick: onMenuItemClicked,
    },
    {
      key: 4,
      txt: "WHITEPAPER",
      selected: false,
      onClick: onMenuItemClicked,
    },
  ];

  const [menuItems, setMenuItems] = useState(TitleMenuItems);

  useEffect(() => {
    EventBus.instance.on(EventPageSlide.event, onSlideChange);

    return () => {
      EventBus.instance.off(EventPageSlide.event, onSlideChange);
    };
  }, []);

  const onSlideChange = (idx: number) => {
    console.log("slide is changed to", idx);
  };

  const onTitleImageClicked = () => {};

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
            position: "relative",
          }}
        >
          <Image
            alt="osairo logo"
            src="/title-logo.png"
            width={142}
            height={51}
            style={{
              position: "absolute",
              top: 6,
              left: 26,
            }}
            onClick={onTitleImageClicked}
          />
          {menuItems.map((item: ITitleMenuItem, key: number) => {
            const posX = 170 + key * 144;
            return (
              <div
                key={item.key}
                className={titleMenuItemStyle.titleMenuItemStyle}
                style={{
                  position: "absolute",
                  top: 0,
                  left: posX,
                }}
              >
                <TitleMenuItem
                  key={`${item.key}_${item.txt}`}
                  txt={item.txt}
                  onClick={item.onClick}
                  selected={item.selected}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
