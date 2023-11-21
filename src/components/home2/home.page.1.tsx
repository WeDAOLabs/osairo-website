import TxtMenuItem from "../txt-menu/txt-menu-item";
import PageFitter from "../page-fitter/page-fitter";
import FigmaImage from "@/components/figma-image/figma-image";
import CustomSwiper from "@/components/custom-swiper/custom-swiper";
import {toast} from "react-toastify";
import pageStyle from "@/components/home2/page.module.css";
import mainStyle from "@/styles/main.module.css";

export default function HomePage1() {
    return (
        <>
            <PageFitter>
                <div className={`${pageStyle.outerContainer}`}>
                    <div className={`${pageStyle.innerContainer}`}>
                        <FigmaImage figmaX={6220} figmaY={306} figmaW={1440} figmaH={900} homepageNumber={1}
                                    name={"background-color"}/>
                        <FigmaImage figmaX={6220} figmaY={306} figmaW={1440} figmaH={900} homepageNumber={1}
                                    name={"background"}/>
                        <FigmaImage figmaX={6410} figmaY={864} figmaW={1060} figmaH={321} homepageNumber={1}
                                    name={"txt-background"}/>
                        <FigmaImage figmaX={6404} figmaY={880} figmaW={154} figmaH={164} homepageNumber={1}
                                    name={"decorate-conch"}/>
                        <FigmaImage figmaX={7268} figmaY={443} figmaW={179} figmaH={169} homepageNumber={1}
                                    name={"decorate-starfish"}/>
                        <FigmaImage figmaX={6872} figmaY={332} figmaW={137} figmaH={156} homepageNumber={1}
                                    name={"decorate-tree"}/>
                        <FigmaImage figmaX={6742} figmaY={414} figmaW={397} figmaH={55} homepageNumber={1}
                                    name={"txt-title"}/>
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
