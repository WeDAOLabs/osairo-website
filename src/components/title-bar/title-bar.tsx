"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { EventBus } from "@/plugins/event.bus";
import { EventPageSlide } from "@/events/event.page.slide";
import TitleMenuItem, { ITitleMenuItem } from "../title-menu/title-menu-item";
import titleBarModule from "./title-bar.module.css";
import titleMenuItemStyle from "../title-menu/title-menu.module.css";
import { LINK_WHITEPAPER } from "@/const/game";
import { EventPushSwiperSlide } from "@/events/event.push.swiper.slide";
import PageFitter from "../page-fitter/page-fitter";

const TITLE_ITEM_COMMUNITY = "COMMUNITY";
const TITLE_ITEM_ECONOMY = "ECONOMY";
const TITLE_ITEM_ROADMAP = "ROADMAP";
const TITLE_ITEM_EARN = "EARN";
const TITLE_ITEM_WHITEPAPER = "WHITEPAPER";

export default function TitleBar() {
  const onMenuItemClicked = (item: ITitleMenuItem) => {
    changeMenuItemState(item);

    switch (item.txt) {
      case TITLE_ITEM_COMMUNITY:
        break;
      case TITLE_ITEM_ECONOMY:
        break;
      case TITLE_ITEM_ROADMAP:
        EventBus.instance.emit(EventPushSwiperSlide.event, 4);
        break;
      case TITLE_ITEM_EARN:
        break;
      case TITLE_ITEM_WHITEPAPER:
        window.open(LINK_WHITEPAPER, "_blank");
        break;
    }
  };

  const TitleMenuItems: ITitleMenuItem[] = [
    {
      index: 0,
      txt: TITLE_ITEM_EARN,
      selected: true,
      onClick: onMenuItemClicked,
    },
    {
      index: 1,
      txt: TITLE_ITEM_ECONOMY,
      selected: false,
      onClick: onMenuItemClicked,
    },
    {
      index: 2,
      txt: TITLE_ITEM_ROADMAP,
      selected: false,
      onClick: onMenuItemClicked,
    },
    {
      index: 3,
      txt: TITLE_ITEM_COMMUNITY,
      selected: false,
      onClick: onMenuItemClicked,
    },
    {
      index: 4,
      txt: TITLE_ITEM_WHITEPAPER,
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

  const onTitleImageClicked = () => {
    EventBus.instance.emit(EventPushSwiperSlide.event, 0);
    changeMenuItemState(TitleMenuItems[0]);
  };

  const changeMenuItemState = (item: ITitleMenuItem) => {
    const newItems = menuItems.map((it) => {
      it.selected = it.index === item.index;
      return it;
    });
    setMenuItems(newItems);
  };

  return (
    <>
      <PageFitter>
        <div className={titleBarModule.titleBar}>
          <div
            style={{
              width: 923,
              height: 70,
              background: "#FFF8CB",
              borderRadius: 50,
              marginTop: 30,
              position: "relative",
            }}
          >
            {/*<Image*/}
            {/*  alt="osairo logo"*/}
            {/*  src="/title-logo.png"*/}
            {/*  width={142}*/}
            {/*  height={51}*/}
            {/*  style={{*/}
            {/*    position: "absolute",*/}
            {/*    top: 6,*/}
            {/*    left: 26,*/}
            {/*    cursor: "pointer",*/}
            {/*  }}*/}
            {/*  onClick={onTitleImageClicked}*/}
            {/*/>*/}
            {menuItems.map((item: ITitleMenuItem, key: number) => {
              const posX = 20 + key * 180;
              return (
                <div
                  key={item.index}
                  className={titleMenuItemStyle.titleMenuItemStyle}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: posX,
                  }}
                >
                  <TitleMenuItem
                    index={item.index}
                    txt={item.txt}
                    onClick={item.onClick}
                    selected={item.selected}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </PageFitter>
    </>
  );
}
