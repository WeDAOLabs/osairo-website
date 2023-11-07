"use client";

import Image from "next/image";
import MediaIcon from "../media-icon/media-icon";
import mainStyle from "@/styles/main.module.css";
import panelStyle from "./page.module.css";
import { LINK_DISCORD, LINK_X } from "@/const/game";
import { useEffect, useState } from "react";

export default function HomePage0() {
  const [screenHeight, setScreenHeight] = useState(900);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight >= 900 ? 900 : window.innerHeight);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    // 在组件卸载时移除事件监听器
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const MediaIcons = [
    {
      txt: "x",
      onClick: () => {
        window.open(LINK_X, "_blank");
      },
      size: [43.5, 35],
    },
    {
      txt: "discord",
      onClick: () => {
        window.open(LINK_DISCORD, "_blank");
      },
      size: [44, 33],
    },
  ];

  return (
    <>
      <div
        className={mainStyle.containerFullPage}
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className={panelStyle.panelContainer}>
          <Image
            src="/homepage-bg.png"
            width={1440 * (screenHeight / 900)}
            height={screenHeight}
            alt="osairo world"
          />
          <Image
            src="/homepage-txt.png"
            width={849 * (screenHeight / 900)}
            height={391 * (screenHeight / 900)}
            alt="osairo world"
            style={{
              position: "absolute",
              left: 97,
              top: 254.5,
            }}
          />
          <div
            className="media-panel"
            style={{
              position: "absolute",
              left: 97,
              top: 754,
            }}
          >
            <div
              style={{
                position: "relative",
                width: 800,
                height: 70,
              }}
            >
              {MediaIcons.map((icon: any, k: number) => (
                <div
                  key={icon.txt}
                  style={{
                    position: "absolute",
                    height: 70,
                    width: 100,
                    top: 0,
                    left: k === 0 ? 0 : k * 100,
                  }}
                >
                  <MediaIcon
                    txt={icon.txt}
                    size={icon.size}
                    onClick={icon.onClick}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
