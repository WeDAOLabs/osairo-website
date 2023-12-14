import PageFitter from "../page-fitter/page-fitter";
import pageStyle from "@/components/home2/page.module.css";
import FigmaImage from "@/components/figma-image/figma-image";

export default function HomePage6() {
    return (
        <>
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
        </>
    );
}
