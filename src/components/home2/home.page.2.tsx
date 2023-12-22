import pageStyle from "./page.module.css";
import mainStyle from "@/styles/main.module.css";
import CustomSwiper from "@/components/custom-swiper/custom-swiper";
import FigmaImage from "@/components/figma-image/figma-image";
import FigmaFont from "@/components/figma-font/figma-font";
import PageFitter from "../page-fitter/page-fitter";
import TxtMenuItem from "../txt-menu/txt-menu-item";
import {toast} from "react-toastify";

export default function HomePage2() {

    const Text = {
        textTitle: "LAND NFT",
    }

    return (
        <>
            <PageFitter>
                <div className={`${pageStyle.outerContainer}`}>
                    <div className={`${pageStyle.innerContainer}`}>

                        <FigmaImage figmaX={6220} figmaY={306} figmaW={1440} figmaH={900} homepageNumber={2}
                                    name={"background-color"}/>
                        <FigmaImage figmaX={6220} figmaY={306} figmaW={1440} figmaH={900} homepageNumber={2}
                                    name={"background-image"}/>
                        <FigmaImage figmaX={6410} figmaY={864} figmaW={1060} figmaH={321} homepageNumber={2}
                                    name={"background-text"}/>
                        <FigmaImage figmaX={6220} figmaY={1121} figmaW={1440} figmaH={85} homepageNumber={2}
                                    name={"background-mask-bottom"}/>
                        <FigmaImage figmaX={6872} figmaY={331} figmaW={137} figmaH={156} homepageNumber={2}
                                    name={"decorate-tree"}/>
                        <FigmaImage figmaX={6404} figmaY={880} figmaW={154} figmaH={164} homepageNumber={2}
                                    name={"decorate-conch"}/>
                        <FigmaImage figmaX={7268} figmaY={443} figmaW={179} figmaH={169} homepageNumber={2}
                                    name={"decorate-starfish"}/>

                        <FigmaFont figmaX={6729} figmaY={410} figmaW={397} homepageNumber={2}
                                   fontFamily={"Pilat Extended Bold"} fontWeight={1000} fontSize={50}
                                   figmaFillColor={["#5850FF", "#FF52FF"]}
                                   figmaStrokeColor={"#FFFFFF"} figmaStrokeWidth={4}
                                   value={Text.textTitle}/>

                        <CustomSwiper/>

                        <div
                            className={`right-bottom ${mainStyle.flexCenter}`}
                            style={{
                                flex: "20%",
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    left: 630,
                                    top: 761,
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
