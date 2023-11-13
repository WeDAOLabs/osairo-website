import Image from "next/image";
import MediaIcon from "../media-icon/media-icon";
import mainStyle from "@/styles/main.module.css";
import panelStyle from "./page.module.css";
import { LINK_DISCORD, LINK_X } from "@/const/game";
import PageFitter from "../page-fitter/page-fitter";

export default function HomePage0() {
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
      <PageFitter>
        <div
          className={mainStyle.containerFullPage}
          style={{
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            className={`${panelStyle.panelContainer} ${mainStyle.flexCenter}`}
          >
            <Image
              src="/homepage-bg.png"
              width={1440}
              height={900}
              alt="osairo world"
            />
            <Image
              src="/hp-0-map.png"
              width={1115}
              height={900}
              alt="osairo map"
              style={{
                position: "absolute",
                left: 429,
                top: 0,
              }}
            />
            <Image
              src="/homepage-txt.png"
              width={849}
              height={391}
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
      </PageFitter>
    </>
  );
}
