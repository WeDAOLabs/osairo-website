import pageStyle from "./page.module.css";
import FigmaImage from "@/components/figma-image/figma-image";
import FigmaFont from "@/components/figma-font/figma-font";
import PageFitter from "../page-fitter/page-fitter";

export default function HomePage1() {

    const Text = {
        textTitle: "EARN",
    }

    return (
        <>
            <PageFitter>
                <div className={`${pageStyle.outerContainer}`}>
                    <div className={`${pageStyle.innerContainer}`}>

                        <FigmaImage figmaX={6220} figmaY={-463} figmaW={1440} figmaH={900} homepageNumber={1}
                                    name={'background-color'}/>
                        <FigmaImage figmaX={6220} figmaY={-439} figmaW={1440} figmaH={742} homepageNumber={1}
                                    name={'background-image'}/>
                        <FigmaImage figmaX={7660 - 1440} figmaY={-354 - 85} figmaW={1440} figmaH={85} homepageNumber={1}
                                    name={"background-mask-top"}/>
                        <FigmaImage figmaX={6220} figmaY={217} figmaW={1440} figmaH={85} homepageNumber={1}
                                    name={"background-mask-bottom"}/>
                        <FigmaImage figmaX={6316} figmaY={-194} figmaW={1277} figmaH={427} homepageNumber={1}
                                    name={"material-roadmap"}/>
                        <FigmaImage figmaX={6872} figmaY={-382} figmaW={137} figmaH={156} homepageNumber={1}
                                    name={"decorate-tree"}/>
                        <FigmaImage figmaX={6887} figmaY={-240} figmaW={71} figmaH={71} homepageNumber={1}
                                    name={"decorate0"}/>
                        <FigmaImage figmaX={6592} figmaY={-101} figmaW={46} figmaH={46} homepageNumber={1}
                                    name={"decorate1"}/>
                        <FigmaImage figmaX={6891} figmaY={-107} figmaW={64} figmaH={64} homepageNumber={1}
                                    name={"decorate2"}/>
                        <FigmaImage figmaX={7213} figmaY={-98} figmaW={40} figmaH={40} homepageNumber={1}
                                    name={"decorate3"}/>
                        <FigmaImage figmaX={6813} figmaY={25} figmaW={38} figmaH={38} homepageNumber={1}
                                    name={"decorate4"}/>
                        <FigmaImage figmaX={7210} figmaY={26} figmaW={49} figmaH={49} homepageNumber={1}
                                    name={"decorate5"}/>
                        <FigmaImage figmaX={7212} figmaY={142} figmaW={47} figmaH={47} homepageNumber={1}
                                    name={"decorate6"}/>

                        <FigmaFont figmaX={6831} figmaY={-304} figmaW={219} homepageNumber={1}
                                   fontFamily={"Pilat Extended Bold"} fontWeight={1000} fontSize={50}
                                   figmaFillColor={["#5850FF", "#FF52FF"]}
                                   figmaStrokeColor={"#FFFFFF"} figmaStrokeWidth={4}
                                   value={Text.textTitle}/>
                    </div>
                </div>
            </PageFitter>
        </>
    );
}
