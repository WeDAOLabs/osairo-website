// import mainStyle from "@/styles/main.module.css";
import panelStyle from "./page.module.css";
import PageFitter from "../page-fitter/page-fitter";
import Image from "next/image";

export default function HomePage6() {
  return (
    <>
      <PageFitter>
        {/* <div
          className={mainStyle.containerFullPage}
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className={panelStyle.panelContainer}
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className={panelStyle.panelCircleContainer}
              style={{
                background: "#383e3a",
              }}
            ></div>
          </div>
        </div> */}
        <div
          style={{
            display: "flex",
            height: 560,
            position: "absolute",
            top: 560,
            left: 0,
            width: "100vw",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 1420,
              height: 560,
              position: "relative",
            }}
          >
            <text
              style={{
                position: "absolute",
                width: 550,
                height: 170,

                fontFamily: "Arial Black",
                fontStyle: "normal",
                fontWeight: 900,
                fontSize: 60,

                color: "#FFEBBB",

                left: 97,
                top: 46,
              }}
            >
              Osairo Adventure game
            </text>
            <Image
              src="/logo-big.png"
              width={226.5}
              height={111}
              alt="osairo"
              style={{
                position: "absolute",
                top: 329,
                left: 1178,
              }}
            />
          </div>
        </div>
      </PageFitter>
    </>
  );
}
