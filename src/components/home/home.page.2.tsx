import mainStyle from "@/styles/main.module.css";
import panelStyle from "./page.module.css";
import PageFitter from "../page-fitter/page-fitter";

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
                background: "#d1dcfe",
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
              ></div>
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
                    background: "#474b57",
                    borderRadius: 30,
                    position: "relative",
                  }}
                >
                  <label
                    style={{
                      position: "absolute",
                      width: 383,
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
                    Economic foundation
                  </label>
                  <text
                    style={{
                      position: "absolute",
                      width: 384,
                      height: 224,

                      fontFamily: "Arial Hebrew",
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: 30,

                      color: "white",

                      left: 45,
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
