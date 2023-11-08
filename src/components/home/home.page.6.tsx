import mainStyle from "@/styles/main.module.css";
import panelStyle from "./page.module.css";
import PageFitter from "../page-fitter/page-fitter";

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
          }}
        ></div>
      </PageFitter>
    </>
  );
}
