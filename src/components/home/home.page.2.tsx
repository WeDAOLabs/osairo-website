import mainStyle from "@/styles/main.module.css";
import panelStyle from "./page.module.css";
import PageFitter from "../page-fitter/page-fitter";
import Image from "next/image";

export default function HomePage2() {
  return (
    <>
      <PageFitter>
        <div
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
                // background:
                //   "linear-gradient(111.36deg, #374B64 0.75%, #C6CEE1 100%, #C6CEE1 100%)",
                background: "#c6cee1",
                display: "flex",
              }}
            >
              <div
                className="page-left"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: "56%",
                  maxWidth: "56%",
                }}
              >
                <Image
                  src="/hp-2-treasure.png"
                  width={612}
                  height={739}
                  alt="osairo treasure"
                />
              </div>
              <div
                className="page-right"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: "44%",
                  maxWidth: "44%",
                }}
              >
                <div
                  style={{
                    width: 460,
                    height: 642,
                    background: "#8190b4",
                    borderRadius: 30,
                    position: "relative",
                  }}
                >
                  <label
                    style={{
                      position: "absolute",
                      width: 434.43,
                      height: 177.51,
                      fontFamily: "Pilat Extended",
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: 60,
                      color: "white",
                      left: 30,
                      top: 25,
                    }}
                  >
                    Economic foundation
                  </label>
                  <text
                    style={{
                      position: "absolute",
                      width: 434,
                      height: 267,

                      fontFamily: "Pilat Extended",
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: 30,

                      color: "white",

                      left: 30,
                      top: 361,
                    }}
                  >
                    Osario Island Resource Token
                    <br />
                    <br />
                    $OIT
                    <br />
                    <br />
                    Total supply: 100 billion pieces
                  </text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageFitter>
    </>
  );
}
