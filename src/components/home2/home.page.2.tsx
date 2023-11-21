import PageFitter from "../page-fitter/page-fitter";
import FigmaImage from "@/components/figma-image/figma-image";
import pageStyle from "@/components/home2/page.module.css";

export default function HomePage2() {
    return (
        <>
            <PageFitter>
                <div className={`${pageStyle.outerContainer}`}>
                    <div className={`${pageStyle.innerContainer}`}>
                        <FigmaImage figmaX={6220} figmaY={1207} figmaW={1440} figmaH={900} homepageNumber={2}
                                    name={"background-color"}/>
                        <FigmaImage figmaX={6182} figmaY={1207} figmaW={1440} figmaH={959} homepageNumber={2}
                                    name={"background"}/>
                        <FigmaImage figmaX={6133} figmaY={1280} figmaW={1533} figmaH={958} homepageNumber={2}
                                    name={"background-mask"}/>
                        <FigmaImage figmaX={6133} figmaY={1280} figmaW={1533} figmaH={958} homepageNumber={2}
                                    name={"background-mask2"}/>
                        <FigmaImage figmaX={6410} figmaY={1753} figmaW={1060} figmaH={321} homepageNumber={2}
                                    name={"txt-background"}/>
                        <FigmaImage figmaX={6872} figmaY={1232} figmaW={137} figmaH={156} homepageNumber={2}
                                    name={"decorate-tree"}/>
                        <FigmaImage figmaX={6601} figmaY={1314} figmaW={703} figmaH={55} homepageNumber={2}
                                    name={"txt-title"}/>
                        <FigmaImage figmaX={6338} figmaY={1507} figmaW={611} figmaH={230} homepageNumber={2}
                                    name={"txt-description"}/>
                    </div>
                </div>
            </PageFitter>
        </>
    );
}
