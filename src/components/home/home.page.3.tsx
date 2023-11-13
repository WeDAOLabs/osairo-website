import mainStyle from "@/styles/main.module.css";
import panelStyle from "./page.module.css";
import PageFitter from "../page-fitter/page-fitter";
import Image from "next/image";

export default function HomePage3() {
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
                background: "#dbcdf2",
                display: "flex",
              }}
            >
              <div
                className="left"
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
                    // background: "#474b57",
                    background: "transparent",
                    borderRadius: 30,
                    position: "relative",
                  }}
                >
                  <label
                    style={{
                      position: "absolute",
                      width: 486,
                      height: 154,
                      fontFamily: "Pilat Extended",
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: 60,
                      color: "#5f4a82",
                      left: 49,
                      top: 108,
                    }}
                  >
                    27 precious resources
                  </label>
                  <text
                    style={{
                      position: "absolute",
                      width: 486,
                      height: 195,

                      fontFamily: "Pilat Extended",
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: 30,

                      color: "#5f4a82",

                      left: 49,
                      top: 337,
                    }}
                  >
                    Resources are the core output of mining and the economic
                    driver, following the ERC1155 standard to ensure
                    interactivity.
                  </text>
                </div>
              </div>
              <div
                className="right"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: "56%",
                  maxWidth: "56%",
                }}
              >
                <Image
                  src="/hp-resources.png"
                  width={710}
                  height={478}
                  alt="resource"
                />
              </div>
            </div>
          </div>
        </div>
      </PageFitter>
    </>
  );
}
