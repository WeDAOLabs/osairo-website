import mainStyle from "@/styles/main.module.css";
import panelStyle from "./page.module.css";
import TxtMenuItem from "../txt-menu/txt-menu-item";
import "swiper/css";
import "swiper/react";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import PageFitter from "../page-fitter/page-fitter";
import { toast } from "react-toastify";

export default function HomePage1() {
  const TileImages = [
    {
      src: "/tile_0.png",
      size: [726 / 2, 818 / 2],
      onClick: () => toast.info("coming soon!"),
    },
    {
      src: "/tile_1.png",
      size: [726 / 2, 818 / 2],
      onClick: () => toast.info("coming soon!"),
    },
    {
      src: "/tile_2.png",
      size: [726 / 2, 818 / 2],
      onClick: () => toast.info("coming soon!"),
    },
  ];

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
                background: "#dbeecd",
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
                    background: "#8f9f84",
                    borderRadius: 30,
                    position: "relative",
                  }}
                >
                  <label
                    style={{
                      position: "absolute",
                      width: 462.4,
                      height: 77,
                      fontFamily: "Pilat Extended",
                      fontStyle: "normal",
                      fontWeight: 900,
                      fontSize: 60,
                      color: "white",
                      left: 12.34,
                      top: 47,
                    }}
                  >
                    LAND NFT
                  </label>
                  <text
                    style={{
                      position: "absolute",
                      width: 473.58,
                      height: 278,

                      fontFamily: "Pilat Extended",
                      fontStyle: "normal",
                      // fontWeight: 600,
                      fontSize: 30,

                      color: "white",

                      left: 12.34,
                      top: 367,
                    }}
                  >
                    NFTs with 6 distinct terrains will yield various resource
                    types, with resources of levels 1 to <br />4<br />{" "}
                    distributed in different proportions.
                  </text>
                </div>
              </div>
              <div
                className="right"
                style={{
                  flex: "56%",
                  maxWidth: "56%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  className={`right-top ${mainStyle.flexCenter}`}
                  style={{
                    flex: "30%",
                  }}
                >
                  <text
                    style={{
                      width: 640,
                      height: 83.52,

                      fontFamily: "Pilat Extended",
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: 30,

                      color: "#8F9E84",

                      left: 39,
                      top: 295,
                    }}
                  >
                    Osairo is not just a game but also a microcosm of the
                    economy.
                  </text>
                </div>
                <div
                  className={`right-middle ${mainStyle.flexCenter}`}
                  style={{
                    flex: "50%",
                  }}
                >
                  <Swiper
                    effect={`coverflow`}
                    slidesPerView={3}
                    centeredSlides={true}
                    grabCursor={true}
                    coverflowEffect={{
                      rotate: 50,
                      stretch: 0,
                      depth: 400,
                      modifier: 1,
                      slideShadows: true,
                    }}
                    navigation={true}
                    modules={[Navigation, EffectCoverflow]}
                    // loop
                    style={{
                      width: 754,
                    }}
                  >
                    {TileImages.map((tile: any, k: number) => (
                      <SwiperSlide key={k}>
                        <Image
                          src={tile.src}
                          alt="land nft"
                          width={tile.size[0]}
                          height={tile.size[1]}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div
                  className={`right-bottom ${mainStyle.flexCenter}`}
                  style={{
                    flex: "20%",
                  }}
                >
                  <div
                    style={{
                      width: 446,
                      height: 58,
                      display: "flex",
                    }}
                  >
                    <div
                      className="left-btn"
                      style={{
                        flex: "50%",
                        maxWidth: "50%",
                        position: "relative",
                      }}
                    >
                      <TxtMenuItem
                        txt="OIT MINT"
                        fontFamily="Pilat Extended"
                        fontSize={16}
                        onClick={() => {
                          toast.info("coming soon!");
                        }}
                      />
                    </div>
                    <div
                      className="right-btn"
                      style={{
                        flex: "50%",
                        maxWidth: "50%",
                        position: "relative",
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <TxtMenuItem
                        txt="ETH MINT"
                        fontSize={16}
                        fontFamily="Pilat Extended"
                        onClick={() => {
                          toast.info("coming soon!");
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageFitter>
    </>
  );
}
