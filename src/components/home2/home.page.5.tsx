import PageFitter from "../page-fitter/page-fitter";
import pageStyle from "@/components/home2/page.module.css";
import FigmaImage from "@/components/figma-image/figma-image";

export default function HomePage5() {
    return (
        <>
            <PageFitter>
                <div className={`${pageStyle.outerContainer}`}>
                    <div className={`${pageStyle.innerContainer}`}>
                        <FigmaImage figmaX={6220} figmaY={306} figmaW={1440} figmaH={900} homepageNumber={1}
                                    name={"background-color"}/>
                    </div>
                </div>
            </PageFitter>
        </>
    );
}
