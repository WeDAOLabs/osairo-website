import pageStyle from "./page.module.css";
import FigmaImage from "@/components/figma-image/figma-image";
import FigmaFont from "@/components/figma-font/figma-font";
import PageFitter from "../page-fitter/page-fitter";

export default function HomePage3() {

    const Text = {
        textTitle: "Economic foundation",
        text0: "Osairo Island Token $ OIT",
        text1: "$ Total supply:",
        text2: "100, 000, 000, 000",
    }

    return (
        <>
            <PageFitter>
                <div className={`${pageStyle.outerContainer}`}>
                    <div className={`${pageStyle.innerContainer}`}>

                        <FigmaImage figmaX={6220} figmaY={1207} figmaW={1440} figmaH={900} homepageNumber={3}
                                    name={"background-color"}/>
                        <FigmaImage figmaX={6220} figmaY={1206} figmaW={1440} figmaH={900} homepageNumber={3}
                                    name={"background-image"}/>
                        <FigmaImage figmaX={6403} figmaY={1788} figmaW={1060} figmaH={321} homepageNumber={3}
                                    name={"background-text"}/>
                        <FigmaImage figmaX={7660 - 1440} figmaY={1294 - 85} figmaW={1440} figmaH={85} homepageNumber={3}
                                    name={"background-mask-top"}/>
                        <FigmaImage figmaX={6220} figmaY={2022} figmaW={1440} figmaH={85} homepageNumber={3}
                                    name={"background-mask-bottom"}/>
                        <FigmaImage figmaX={7028} figmaY={1380} figmaW={565} figmaH={581} homepageNumber={3}
                                    name={"material-coin"}/>
                        <FigmaImage figmaX={6872} figmaY={1232} figmaW={137} figmaH={156} homepageNumber={3}
                                    name={"decorate-tree"}/>

                        <FigmaFont figmaX={6601} figmaY={1314} figmaW={703} homepageNumber={3}
                                   fontFamily={"Pilat Extended Bold"} fontWeight={1000} fontSize={50}
                                   figmaFillColor={["#5850FF", "#FF52FF"]}
                                   figmaStrokeColor={"#FFFFFF"} figmaStrokeWidth={4}
                                   value={Text.textTitle}/>
                        <FigmaFont figmaX={6325} figmaY={1522} figmaW={726 - 100} homepageNumber={3}
                                   fontFamily={"Pilat Extended Demi"} fontWeight={1000} fontSize={50}
                                   figmaFillColor={"#FFFFFF"}
                                   figmaStrokeColor={"#41C3DF"} figmaStrokeWidth={3}
                                   value={Text.text0}/>
                        <FigmaFont figmaX={6325} figmaY={1661} figmaW={726} homepageNumber={3}
                                   fontFamily={"Pilat Extended Demi"} fontWeight={1000} fontSize={50}
                                   figmaFillColor={"#FFFFFF"}
                                   figmaStrokeColor={"#41C3DF"} figmaStrokeWidth={3}
                                   value={Text.text1}/>
                        <FigmaFont figmaX={6325} figmaY={1735} figmaW={726} homepageNumber={3}
                                   fontFamily={"Pilat Extended Demi"} fontWeight={1000} fontSize={50}
                                   figmaFillColor={["#5996FA", "#2FF9ED"]}
                                   figmaStrokeColor={"#FFFFFF"} figmaStrokeWidth={3}
                                   value={Text.text2}/>

                    </div>
                </div>
            </PageFitter>
        </>
    );
}
