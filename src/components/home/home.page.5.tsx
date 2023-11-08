import mainStyle from "@/styles/main.module.css";
import panelStyle from "./page.module.css";
import PageFitter from "../page-fitter/page-fitter";
import TxtMenuItem from "../txt-menu/txt-menu-item";
import { LINK_DISCORD } from "@/const/game";

export default function HomePage5() {
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
                background: "#c4e4ce",
                display: "flex",
              }}
            >
              <div
                className="hp5-page-left"
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
                    background: "#3e4b41",
                    borderRadius: 30,
                    position: "relative",
                  }}
                >
                  <label
                    style={{
                      position: "absolute",
                      width: 415,
                      height: 170,
                      fontFamily: "Arial Black",
                      fontStyle: "normal",
                      fontWeight: 900,
                      fontSize: 60,
                      color: "white",
                      left: 45,
                      top: 25,
                    }}
                  >
                    You’re early
                  </label>
                  <text
                    style={{
                      position: "absolute",
                      width: 377.68,
                      height: 294,

                      fontFamily: "Arial Hebrew",
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: 30,

                      color: "white",

                      left: 39,
                      top: 204,
                    }}
                  >
                    Join the Osairo social community today. Be one of the
                    earliest contributors, together creating automated world.
                  </text>
                  <div
                    style={{
                      position: "absolute",
                      left: 55.3,
                      top: 540,
                    }}
                  >
                    <TxtMenuItem
                      txt="JOIN OSAIRO"
                      txtColor="#3e4b41"
                      bgColor="white"
                      onClick={() => {
                        window.open(LINK_DISCORD, "_blank");
                      }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="hp5-page-right"
                style={{
                  // display: "flex",
                  // justifyContent: "center",
                  // alignItems: "center",
                  flex: "56%",
                  maxWidth: "56%",
                  position: "relative",
                }}
              >
                <text
                  style={{
                    position: "absolute",
                    width: 542.36,
                    height: 170,
                    fontFamily: "Arial Black",
                    fontStyle: "normal",
                    fontWeight: 900,
                    fontSize: 60,
                    color: "white",

                    top: 65,
                    left: 40,
                  }}
                >
                  Welcome to our community
                </text>
              </div>
            </div>
          </div>
        </div>
      </PageFitter>
    </>
  );
}
