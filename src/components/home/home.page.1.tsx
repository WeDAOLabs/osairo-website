import mainStyle from "@/styles/main.module.css";
import panelStyle from "./page.module.css";

export default function HomePage1() {
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
              background: "#dbeecd",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
