import pageStyle from "./page.module.css";
import FigmaImage from "@/components/figma-image/figma-image";
import MediaIcon from "../media-icon/media-icon";
import PageFitter from "../page-fitter/page-fitter";
import {LINK_DISCORD, LINK_X} from "@/const/game";

export default function HomePage0() {

    const MediaIcons = [
        {
            txt: "x",
            onClick: () => {
                window.open(LINK_X, "_blank");
            },
            size: [43.5, 35],
        },
        {
            txt: "discord",
            onClick: () => {
                window.open(LINK_DISCORD, "_blank");
            },
            size: [44, 33],
        },
    ];

    return (
        <>
            <PageFitter>
                <div className={`${pageStyle.outerContainer}`}>
                    <div className={`${pageStyle.innerContainer}`}>

                        <FigmaImage figmaX={6220} figmaY={-1363 - 158} figmaW={1440} figmaH={900} homepageNumber={0}
                                    name={'background-image'}/>
                        <FigmaImage figmaX={6220} figmaY={-656 - 158} figmaW={1440} figmaH={220} homepageNumber={0}
                                    name={'background-mask-bottom'}/>
                        <FigmaImage figmaX={6250} figmaY={-1320 - 158} figmaW={241} figmaH={100} homepageNumber={0}
                                    name={'material-logo'}/>
                        <FigmaImage figmaX={6220} figmaY={-1363 - 158} figmaW={1440} figmaH={900} homepageNumber={0}
                                    name={'material-map'}/>
                        <FigmaImage figmaX={6303} figmaY={-977 - 158} figmaW={900} figmaH={372} homepageNumber={0}
                                    name={'material-text'}/>

                        <div
                            className="media-panel"
                            style={{
                                position: "absolute",
                                left: 97,
                                top: 820,
                            }}
                        >
                            <div
                                style={{
                                    position: "relative",
                                    width: 800,
                                    height: 70,
                                }}
                            >
                                {MediaIcons.map((icon: any, k: number) => (
                                    <div
                                        key={icon.txt}
                                        style={{
                                            position: "absolute",
                                            height: 70,
                                            width: 100,
                                            top: 0,
                                            left: k === 0 ? 0 : k * 100,
                                        }}
                                    >
                                        <MediaIcon
                                            txt={icon.txt}
                                            size={icon.size}
                                            onClick={icon.onClick}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </PageFitter>
        </>
    );
}
