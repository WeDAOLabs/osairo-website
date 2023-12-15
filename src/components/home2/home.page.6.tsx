import PageFitter from "../page-fitter/page-fitter";
import pageStyle from "@/components/home2/page.module.css";
import FigmaImage from "@/components/figma-image/figma-image";
import {useEffect, useState} from "react";
import {getMinScreenScale} from "@/plugins/screen.fitter";
import {EventBus} from "@/plugins/event.bus";
import {EventPageSlide} from "@/events/event.page.slide";

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
                        </div>
                    </div>
                </PageFitter>
            </div>
        </>
    );
}
