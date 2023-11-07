import mainStyle from "@/styles/main.module.css";
import panelStyle from "./page.module.css";

export default function HomePage5() {
  return (
    <>
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
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
