import PageFitter from "../page-fitter/page-fitter";
import Image from "next/image";
import pageStyle from "@/components/home2/page.module.css";
import FigmaImage from "@/components/figma-image/figma-image";

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
                        <FigmaImage figmaX={6872} figmaY={1232} figmaW={137} figmaH={156} homepageNumber={2}
                                    name={"decorate-tree"}/>
                        <Image
                            src="/assets/homepage2-txt.png"
                            width={680}
                            height={35.5}
                            alt="osairo world txt2"
                            style={{
                                position: "absolute",
                                left: 381,
                                top: 106,
                            }}
                        />
                        <Image
                            src="/assets/homepage2-txt2.png"
                            width={1051.5}
                            height={177.5}
                            alt="osairo world txt2"
                            style={{
                                position: "absolute",
                                left: 190,
                                top: 647,
                            }}
                        />
                        <Image
                            src="/assets/homepage2-txt3.png"
                            width={532}
                            height={216}
                            alt="osairo world txt3"
                            style={{
                                position: "absolute",
                                left: 138,
                                top: 299,
                            }}
                        />
                    </div>
                </div>
            </PageFitter>
        </>
    );
}
