import PageFitter from "../page-fitter/page-fitter";
import pageStyle from "@/components/home2/page.module.css";
import FigmaImage from "@/components/figma-image/figma-image";

export default function HomePage5() {
    return (
        <>
            <PageFitter>
                <div className={`${pageStyle.outerContainer}`}>
                    <div className={`${pageStyle.innerContainer}`}>
                        <FigmaImage figmaX={6221} figmaY={2985} figmaW={1440} figmaH={900} homepageNumber={5}
                                    name={"background-color"}/>
                        <FigmaImage figmaX={6221} figmaY={3008} figmaW={1440} figmaH={900} homepageNumber={5}
                                    name={"background"}/>
                        <FigmaImage figmaX={6872} figmaY={3059} figmaW={137} figmaH={156} homepageNumber={5}
                                    name={"decorate-tree"}/>
                        <FigmaImage figmaX={6781} figmaY={3143} figmaW={321} figmaH={65} homepageNumber={5}
                                    name={"txt-title"}/>
                        <FigmaImage figmaX={7661 - 1440} figmaY={3093 - 85} figmaW={1440} figmaH={85} homepageNumber={5}
                                    name={"decorate-mask-top"}/>
                        <FigmaImage figmaX={6221} figmaY={3823} figmaW={1440} figmaH={85} homepageNumber={5}
                                    name={"decorate-mask-bottom"}/>
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
                    </div>
                </div>
            </PageFitter>
        </>
    );
}
