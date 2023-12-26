import pageStyle from "./page.module.css";
import FigmaImage from "@/components/figma-image/figma-image";
import FigmaFont from "@/components/figma-font/figma-font";
import PageFitter from "../page-fitter/page-fitter";

export default function HomePage5() {

    const Text = {
        textTitle: "Roadmap",
        textTitle0: "Q4 2023",
        textTitle1: "Q1-Q2 2024",
        textTitle2: "Q3-Q4 2024",
        text0: "Recruitment of buildersWebsite and game development...",
        text1: "NFT Sale...",
        text2: "Game LaunchCommunity management activities...",
    }

    return (
        <>
            <PageFitter>
                <div className={`${pageStyle.outerContainer}`}>
                    <div className={`${pageStyle.innerContainer}`}>

                        <FigmaImage figmaX={6221} figmaY={2985} figmaW={1440} figmaH={900} homepageNumber={5}
                                    name={"background-color"}/>
                        <FigmaImage figmaX={6221} figmaY={3008} figmaW={1440} figmaH={900} homepageNumber={5}
                                    name={"background-image"}/>
                        <FigmaImage figmaX={7661 - 1440} figmaY={3093 - 85} figmaW={1440} figmaH={85} homepageNumber={5}
                                    name={"background-mask-top"}/>
                        <FigmaImage figmaX={6221} figmaY={3823} figmaW={1440} figmaH={85} homepageNumber={5}
                                    name={"background-mask-bottom"}/>
                        <FigmaImage figmaX={6305} figmaY={3236} figmaW={346} figmaH={520} homepageNumber={5}
                                    name={"material-rectangle"}/>
                        <FigmaImage figmaX={6734} figmaY={3236} figmaW={346} figmaH={520} homepageNumber={5}
                                    name={"material-rectangle"}/>
                        <FigmaImage figmaX={7169} figmaY={3236} figmaW={346} figmaH={520} homepageNumber={5}
                                    name={"material-rectangle"}/>
                        <FigmaImage figmaX={6308} figmaY={3503} figmaW={338} figmaH={338} homepageNumber={5}
                                    name={"decorate0"}/>
                        <FigmaImage figmaX={6734} figmaY={3493} figmaW={338} figmaH={338} homepageNumber={5}
                                    name={"decorate1"}/>
                        <FigmaImage figmaX={7173} figmaY={3493} figmaW={338} figmaH={338} homepageNumber={5}
                                    name={"decorate2"}/>
                        <FigmaImage figmaX={6872} figmaY={3059} figmaW={137} figmaH={156} homepageNumber={5}
                                    name={"decorate-tree"}/>

                        <FigmaFont figmaX={6781} figmaY={3143} figmaW={321} homepageNumber={5}
                                   fontFamily={"Pilat Extended Bold"} fontWeight={1000} fontSize={50}
                                   figmaFillColor={["#5850FF", "#FF52FF"]}
                                   figmaStrokeColor={"#FFFFFF"} figmaStrokeWidth={4}
                                   value={Text.textTitle}/>
                        <FigmaFont figmaX={6332} figmaY={3253} figmaW={216} homepageNumber={5}
                                   fontFamily={"Pilat Extended Heavy"} fontWeight={1000} fontSize={50}
                                   figmaFillColor={"#FFFFFF"}
                                   value={Text.textTitle0}/>
                        <FigmaFont figmaX={6760} figmaY={3262} figmaW={244} homepageNumber={5}
                                   fontFamily={"Pilat Extended Heavy"} fontWeight={1000} fontSize={50}
                                   figmaFillColor={"#FFFFFF"}
                                   value={Text.textTitle1}/>
                        <FigmaFont figmaX={7195} figmaY={3262} figmaW={241} homepageNumber={5}
                                   fontFamily={"Pilat Extended Heavy"} fontWeight={1000} fontSize={50}
                                   figmaFillColor={"#FFFFFF"}
                                   value={Text.textTitle2}/>
                        <FigmaFont figmaX={6332} figmaY={3399} figmaW={291} homepageNumber={5}
                                   fontFamily={"Pilat Extended Demi"} fontWeight={1000} fontSize={20}
                                   figmaFillColor={"#FFFFFF"}
                                   value={Text.text0}/>
                        <FigmaFont figmaX={6755} figmaY={3399} figmaW={125 + 50} homepageNumber={5}
                                   fontFamily={"Pilat Extended Demi"} fontWeight={1000} fontSize={20}
                                   figmaFillColor={"#FFFFFF"}
                                   value={Text.text1}/>
                        <FigmaFont figmaX={7190} figmaY={3399} figmaW={305} homepageNumber={5}
                                   fontFamily={"Pilat Extended Demi"} fontWeight={1000} fontSize={20}
                                   figmaFillColor={"#FFFFFF"}
                                   value={Text.text2}/>

                    </div>
                </div>
            </PageFitter>
        </>
    );
}
