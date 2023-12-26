import pageStyle from "./page.module.css";
import FigmaImage from "@/components/figma-image/figma-image";
import FigmaFont from "@/components/figma-font/figma-font";
import PageFitter from "../page-fitter/page-fitter";
import Resources from "@/components/resources/resources";

export default function HomePage4() {

    const Text = {
        textTitle: "Island Resources",
    }

    return (
        <>
            <PageFitter>
                <div className={`${pageStyle.outerContainer}`}>
                    <div className={`${pageStyle.innerContainer}`}>

                        <FigmaImage figmaX={6220} figmaY={2108} figmaW={1440} figmaH={900} homepageNumber={4}
                                    name={"background-color"}/>
                        <FigmaImage figmaX={6221} figmaY={2107} figmaW={1440} figmaH={959} homepageNumber={4}
                                    name={"background-image"}/>
                        <FigmaImage figmaX={7660 - 1440} figmaY={2195 - 85} figmaW={1440} figmaH={85} homepageNumber={4}
                                    name={"background-mask-top"}/>
                        <FigmaImage figmaX={6388} figmaY={2271} figmaW={1090} figmaH={666} homepageNumber={4}
                                    name={"material-scroll"}/>
                        <FigmaImage figmaX={6872} figmaY={2131} figmaW={137} figmaH={156} homepageNumber={4}
                                    name={"decorate-tree"}/>
                        <FigmaImage figmaX={6221} figmaY={2108} figmaW={1440} figmaH={900} homepageNumber={4}
                                    name={"decorate-bottom"}/>

                        <FigmaFont figmaX={6656} figmaY={2214} figmaW={572} homepageNumber={4}
                                   fontFamily={"Pilat Extended Bold"} fontWeight={1000} fontSize={50}
                                   figmaFillColor={["#5850FF", "#FF52FF"]}
                                   figmaStrokeColor={"#FFFFFF"} figmaStrokeWidth={4}
                                   value={Text.textTitle}/>

                        <Resources/>

                    </div>
                </div>
            </PageFitter>
        </>
    );
}