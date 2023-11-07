import Image from "next/image";
import MediaIcon from "../media-icon/media-icon";
import mainStyle from "@/styles/main.module.css";
import panelStyle from "./page.module.css";

export default function HomePage0() {
  const MediaIcons = [
    {
      txt: "x",
      onClick: () => {},
      size: [43.5, 35],
    },
    {
      txt: "discord",
      onClick: () => {},
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
          background: "#282e28",
        }}
      >
        <div
          className={panelStyle.panelContainer}
          // style={{
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          // }}
        >
          <Image
            src="/homepage-bg.png"
            width={1440}
            height={900}
            alt="osairo world"
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
    </>
  );
}
