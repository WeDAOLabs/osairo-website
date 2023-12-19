import PageFitter from "../page-fitter/page-fitter";
import FigmaImage from "@/components/figma-image/figma-image";
import pageStyle from "@/components/home2/page.module.css";

export default function HomePage3() {
    return (
        <>
            <PageFitter>
                <div className={`${pageStyle.outerContainer}`}>
                    <div className={`${pageStyle.innerContainer}`}>
                        <FigmaImage figmaX={6220} figmaY={1207} figmaW={1440} figmaH={900} homepageNumber={3}
                                    name={"background-color"}/>
                        <FigmaImage figmaX={6220} figmaY={1206} figmaW={1440} figmaH={900} homepageNumber={3}
                                    name={"background"}/>
                        <FigmaImage figmaX={6403} figmaY={1788} figmaW={1060} figmaH={321} homepageNumber={3}
                                    name={"txt-background"}/>
                        <FigmaImage figmaX={6872} figmaY={1232} figmaW={137} figmaH={156} homepageNumber={3}
                                    name={"decorate-tree"}/>
                        <FigmaImage figmaX={6601} figmaY={1314} figmaW={703} figmaH={55} homepageNumber={3}
                                    name={"txt-title"}/>
                        <FigmaImage figmaX={7028} figmaY={1380} figmaW={565} figmaH={581} homepageNumber={3}
                                    name={"decorate-coin"}/>
                        <FigmaImage figmaX={7660 - 1440} figmaY={1294 - 85} figmaW={1440} figmaH={85} homepageNumber={3}
                                    name={"decorate-mask-top"}/>
                        <FigmaImage figmaX={6220} figmaY={2022} figmaW={1440} figmaH={85} homepageNumber={3}
                                    name={"decorate-mask-bottom"}/>
                        <FigmaImage figmaX={6325} figmaY={1522} figmaW={726} figmaH={243} homepageNumber={3}
                                    name={"txt-description0"}/>
                        <FigmaImage figmaX={6325} figmaY={1533} figmaW={726} figmaH={192} homepageNumber={3}
                                    name={"txt-description1"}/>
                        <FigmaImage figmaX={6325} figmaY={1609} figmaW={726} figmaH={192} homepageNumber={3}
                                    name={"txt-description2"}/>
                    </div>
                </div>
            </PageFitter>
        </>
    );
}
