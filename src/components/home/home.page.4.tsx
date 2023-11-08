import mainStyle from "@/styles/main.module.css";
import panelStyle from "./page.module.css";
import PageFitter from "../page-fitter/page-fitter";

export default function HomePage4() {
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
                background: "#fbeedd",
                position: "relative",
              }}
            >
              <label
                style={{
                  position: "absolute",
                  width: 327,
                  height: 85,

                  fontFamily: "Arial Black",
                  fontStyle: "normal",
                  fontWeight: 900,
                  fontSize: 60,
                  color: "white",

                  left: 87,
                  top: 62,
                }}
              >
                Roadmap
              </label>
            </div>
          </div>
        </div>
      </PageFitter>
    </>
  );
}
