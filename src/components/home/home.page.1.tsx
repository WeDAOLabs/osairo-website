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
              display: "grid",
              gridTemplateColumns: "44% 56%",
            }}
          >
            <div
              className="left"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: 460,
                  height: 642,
                  background: "#555c50",
                  borderRadius: 30,
                  position: "relative",
                }}
              >
                <label
                  style={{
                    position: "absolute",
                    width: 415,
                    height: 77,
                    fontFamily: "Arial Black",
                    fontStyle: "normal",
                    fontWeight: 900,
                    fontSize: 60,
                    color: "white",
                    left: 45,
                    top: 25,
                  }}
                >
                  LAND NFT
                </label>
                <text
                  style={{
                    position: "absolute",
                    width: 395,
                    height: 239,

                    fontFamily: "Arial Hebrew",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: 30,

                    color: "white",

                    left: 39,
                    top: 295,
                  }}
                >
                  NFTs with 6 distinct terrains will yield various resource
                  types, with resources of levels 1 to 4 distributed in
                  different proportions.
                </text>
              </div>
            </div>
            <div className="right"></div>
          </div>
        </div>
      </div>
    </>
  );
}
