import PageFitter from "../page-fitter/page-fitter";
import pageStyle from "@/components/home2/page.module.css";
import FigmaImage from "@/components/figma-image/figma-image";
import {useEffect, useState} from "react";
import {getMinScreenScale} from "@/plugins/screen.fitter";
import {EventBus} from "@/plugins/event.bus";
import {EventPageSlide} from "@/events/event.page.slide";
import FigmaFont from "@/components/figma-font/figma-font";
import TxtMenuItem from "@/components/txt-menu/txt-menu-item";
import {toast} from "react-toastify";

export default function HomePage6() {

    const [topPos, setTopPos] = useState(0);

    const onPushSwiperSlide = (idx: any) => {
        if (idx <= 6) {
            setTopPos(0);
        } else {
            let scale = getMinScreenScale();

            setTopPos(560 * Math.min(1, scale));
        }
    };

    useEffect(() => {
        EventBus.instance.on(EventPageSlide.event, onPushSwiperSlide);

        return () => {
            EventBus.instance.off(EventPageSlide.event, onPushSwiperSlide);
        };
    }, []);

    const Text = {
        text0: "Welcome to our community",
        text1: "You’re early",
        text2: "Join the Osairo social community today. Be one of the earliest contributors, together creating automated world.",
    }

    return (
        <>
            <div
                style={{
                    display: "flex",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    width: "100vw",
                    left: 0,
                    top: topPos,
                }}>
                <PageFitter>
                    <div className={`${pageStyle.outerContainer}`}>
                        <div className={`${pageStyle.innerContainer}`}>
                            <FigmaImage figmaX={6221} figmaY={3908} figmaW={1440} figmaH={900} homepageNumber={6}
                                        name={"background-color"}/>
                            <FigmaImage figmaX={6221} figmaY={3908} figmaW={1440} figmaH={900} homepageNumber={6}
                                        name={"background"}/>
                            <FigmaImage figmaX={7661 - 1440} figmaY={4128 - 220} figmaW={1440} figmaH={220}
                                        homepageNumber={6}
                                        name={"decorate-mask-top"}/>

                            <FigmaFont figmaX={6322} figmaY={4336} figmaW={1082} homepageNumber={6}
                                       fontFamily={"Pilat Extended Bold"} fontWeight={1000} fontSize={60}
                                       figmaFillColor={["#4181E8", "#12ABC5"]}
                                       figmaStrokeColor={"#FFFFFF"} figmaStrokeWidth={3}
                                       value={Text.text0}/>

                            <FigmaFont figmaX={6322} figmaY={4424} figmaW={466} homepageNumber={6}
                                       fontFamily={"Pilat Extended Bold"} fontWeight={1000} fontSize={40}
                                       figmaFillColor={["#4181E8", "#12ABC5"]}
                                       figmaStrokeColor={"#FFFFFF"} figmaStrokeWidth={2}
                                       value={Text.text1}/>

                            <FigmaFont figmaX={6323} figmaY={4485} figmaW={790} homepageNumber={6}
                                       fontFamily={"Pilat Extended Demi"} fontWeight={1000} fontSize={30}
                                       figmaFillColor={["#4181E8", "#C74BF2"]}
                                       value={Text.text2}/>

                            <div
                                style={{
                                    position: "absolute",
                                    left: 101,
                                    top: 783,
                                }}>
                                <TxtMenuItem
                                    txt="Join Us"
                                    fontFamily="Pilat Extended Bold"
                                    fontSize={16}
                                    bgColor={'#FFE19A'}
                                    txtColor={"#212324"}
                                    onClick={() => {
                                        toast.info("coming soon!");
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </PageFitter>
            </div>
        </>
    );
}
