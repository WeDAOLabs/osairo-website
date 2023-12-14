import PageFitter from "../page-fitter/page-fitter";
import FigmaImage from "@/components/figma-image/figma-image";
import pageStyle from "@/components/home2/page.module.css";

export default function HomePage4() {
    return (
        <>
            <PageFitter>
                <div className={`${pageStyle.outerContainer}`}>
                    <div className={`${pageStyle.innerContainer}`}>
                        <FigmaImage figmaX={6220} figmaY={2107} figmaW={1440} figmaH={900} homepageNumber={3}
                                    name={"background-color"}/>
                        <FigmaImage figmaX={6221} figmaY={2107} figmaW={1440} figmaH={959} homepageNumber={3}
                                    name={"background"}/>
                        <FigmaImage figmaX={6872} figmaY={2133} figmaW={137} figmaH={156} homepageNumber={3}
                                    name={"decorate-tree"}/>
                        <FigmaImage figmaX={6351} figmaY={2247} figmaW={1179} figmaH={721} homepageNumber={3}
                                    name={"decorate-scroll"}/>
                        <FigmaImage figmaX={6269} figmaY={2819} figmaW={281} figmaH={179} homepageNumber={3}
                                    name={"decorate-conch-left"}/>
                        <FigmaImage figmaX={7329} figmaY={2806} figmaW={281} figmaH={179} homepageNumber={3}
                                    name={"decorate-conch-right"}/>
                        <FigmaImage figmaX={6489} figmaY={2215} figmaW={919} figmaH={65} homepageNumber={3}
                                    name={"txt-title"}/>
                    </div>
                </div>
            </PageFitter>
        </>
    );
}
