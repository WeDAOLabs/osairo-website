"use client";

// import mainStyle from "@/styles/main.module.css";
import panelStyle from "./page.module.css";
import PageFitter from "../page-fitter/page-fitter";
import Image from "next/image";
import {
  LINK_DISCORD,
  LINK_GITHUB,
  LINK_WHITEPAPER,
  LINK_X,
} from "@/const/game";
import { useState } from "react";
import { getMinScreenScale } from "@/plugins/screen.fitter";

export default function HomePage6() {
  const [topPos, setTopPos] = useState(560 * Math.min(1, getMinScreenScale()));
  const [scale, setScale] = useState(getMinScreenScale());

  return (
    <>
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
          height: topPos,
          position: "absolute",
          top: topPos,
          left: 0,
          width: "100vw",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PageFitter>
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
                top: 46 * scale,
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
                top: 329 * scale - 50,
                left: 1178,
              }}
            />
            <div
              className="learn-more"
              style={{
                position: "absolute",
                width: 215,
                height: 122,
                left: 97,
                top: 328 * scale - 50,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label
                style={{
                  width: 78,
                  height: 10,

                  fontFamily: "Arial Hebrew",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 14,

                  color: "#AFB2B0",
                }}
              >
                Learn More
              </label>
              <label
                className={panelStyle.labelWithLink}
                style={{
                  width: 215,
                  height: 30,

                  fontFamily: "Arial Hebrew",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 26,
                  color: "white",

                  marginTop: 15,
                  marginLeft: -4,
                }}
                onClick={() => window.open(LINK_GITHUB, "_blank")}
              >
                GitHub
              </label>
              <label
                className={panelStyle.labelWithLink}
                style={{
                  width: 215,
                  height: 30,

                  fontFamily: "Arial Hebrew",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 26,
                  color: "white",
                  marginTop: 6,
                  marginLeft: -4,
                }}
                onClick={() => window.open(LINK_WHITEPAPER, "_blank")}
              >
                Whitepaper
              </label>
            </div>
            <div
              className="follow-us"
              style={{
                position: "absolute",
                width: 93,
                height: 79,
                left: 312,
                top: 328 * scale - 50,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label
                style={{
                  width: 78,
                  height: 10,

                  fontFamily: "Arial Hebrew",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 14,

                  color: "#AFB2B0",
                }}
              >
                Follow Us
              </label>
              <label
                className={panelStyle.labelWithLink}
                style={{
                  width: 215,
                  height: 30,

                  fontFamily: "Arial Hebrew",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 26,
                  color: "white",

                  marginTop: 15,
                  marginLeft: -4,
                }}
                onClick={() => window.open(LINK_DISCORD, "_blank")}
              >
                Discord
              </label>
              <label
                className={panelStyle.labelWithLink}
                style={{
                  width: 215,
                  height: 30,

                  fontFamily: "Arial Hebrew",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 26,
                  color: "white",
                  marginTop: 6,
                  marginLeft: -4,
                }}
                onClick={() => window.open(LINK_X, "_blank")}
              >
                Twitter
              </label>
            </div>
          </div>
        </PageFitter>
      </div>
    </>
  );
}
