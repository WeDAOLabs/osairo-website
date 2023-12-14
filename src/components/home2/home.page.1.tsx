import pageStyle from "./page.module.css";
import PageFitter from "../page-fitter/page-fitter";
import FigmaImage from "@/components/figma-image/figma-image";

export default function HomePage1() {

    return (
        <>
            <PageFitter>
                <div className={`${pageStyle.outerContainer}`}>
                    <div className={`${pageStyle.innerContainer}`}>
                        <FigmaImage figmaX={6220} figmaY={-463} figmaW={1440} figmaH={900} homepageNumber={1}
                                    name={'background-color'}/>
                        <FigmaImage figmaX={6220} figmaY={-439} figmaW={1440} figmaH={742} homepageNumber={1}
                                    name={'background'}/>
                        <FigmaImage figmaX={6872} figmaY={-382} figmaW={137} figmaH={156} homepageNumber={1}
                                    name={"decorate-tree"}/>
                        <FigmaImage figmaX={7660 - 1440} figmaY={-354 - 85} figmaW={1440} figmaH={85} homepageNumber={1}
                                    name={"decorate-mask-top"}/>
                        <FigmaImage figmaX={6220} figmaY={217} figmaW={1440} figmaH={85} homepageNumber={1}
                                    name={"decorate-mask-bottom"}/>
                        <FigmaImage figmaX={6831} figmaY={-303} figmaW={219} figmaH={55} homepageNumber={1}
                                    name={"txt-title"}/>
                        <FigmaImage figmaX={6316} figmaY={-194} figmaW={1277} figmaH={427} homepageNumber={1}
                                    name={"material"}/>
                        <FigmaImage figmaX={6887} figmaY={-240} figmaW={71} figmaH={71} homepageNumber={1}
                                    name={"decorate0"}/>
                    </div>
                </div>
            </PageFitter>
        </>
    );
}
