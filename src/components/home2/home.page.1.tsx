import mainStyle from "@/styles/main.module.css";
import TxtMenuItem from "../txt-menu/txt-menu-item";
import "swiper/css";
import "swiper/react";
import "swiper/css/navigation";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, EffectCoverflow, Pagination} from "swiper/modules";
import Image from "next/image";
import PageFitter from "../page-fitter/page-fitter";
import {toast} from "react-toastify";
import pageStyle from "@/components/home2/page.module.css";
import FigmaImage from "@/components/figma-image/figma-image";

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
                <div className={`${pageStyle.outerContainer}`}>
                    <div className={`${pageStyle.innerContainer}`}>
                        <FigmaImage figmaX={6220} figmaY={306} figmaW={1440} figmaH={900} homepageNumber={1}
                                    name={"background-color"}/>
                        <FigmaImage figmaX={6220} figmaY={306} figmaW={1440} figmaH={900} homepageNumber={1}
                                    name={"background"}/>
                        <FigmaImage figmaX={6404} figmaY={880} figmaW={154} figmaH={164} homepageNumber={1}
                                    name={"decorate-conch"}/>
                        <FigmaImage figmaX={7268} figmaY={443} figmaW={179} figmaH={169} homepageNumber={1}
                                    name={"decorate-starfish"}/>
                        <FigmaImage figmaX={6872} figmaY={332} figmaW={137} figmaH={156} homepageNumber={1}
                                    name={"decorate-tree"}/>
                        <Image
                            src="/assets/homepage1-txt.png"
                            width={374.5}
                            height={35}
                            alt="osairo world txt"
                            style={{
                                position: "absolute",
                                left: 522,
                                top: 125.5,
                            }}
                        />
                        <Image
                            src="/assets/homepage1-txt2.png"
                            width={1051.5}
                            height={177.5}
                            alt="osairo world txt2"
                            style={{
                                position: "absolute",
                                left: 190,
                                top: 647,
                            }}
                        />
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
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            //TODO pagination不生效
                            // 貌似是因为渲染顺序的原因 加载Swiper时认为SwiperSlide的数量=0 所以不显示pagination
                            pagination={true}
                            modules={[Navigation, EffectCoverflow, Pagination]}
                            // loop
                            style={{
                                position: "absolute",
                                left: 294,
                                top: 192,
                                width: 853,
                                height: 507,
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
                        <Image
                            className="swiper-button-next"
                            src="/assets/homepage1-button-next.png"
                            width={58.5}
                            height={61}
                            alt="osairo world swiper button next"
                        />
                        <Image
                            className="swiper-button-prev"
                            src="/assets/homepage1-button-prev.png"
                            width={58.5}
                            height={61}
                            alt="osairo world swiper button next"
                        />
                        <div
                            className={`right-bottom ${mainStyle.flexCenter}`}
                            style={{
                                flex: "20%",
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    left: 607,
                                    top: 781,
                                }}>
                                <TxtMenuItem
                                    txt="NFT MINT"
                                    fontFamily="Pilat Extended Bold"
                                    fontSize={16}
                                    bgColor={'linear-gradient(45deg, #5995FB, #40C5DD)'}
                                    onClick={() => {
                                        toast.info("coming soon!");
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </PageFitter>
        </>
    );
}
