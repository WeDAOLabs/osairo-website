import Image from "next/image";
import MediaIcon from "../media-icon/media-icon";
import mainStyle from "@/styles/main.module.css";
import panelStyle from "./page.module.css";
import {LINK_DISCORD, LINK_X} from "@/const/game";
import PageFitter from "../page-fitter/page-fitter";

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
                <div
                    className={mainStyle.containerFullPage}
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                    }}
                >
                    <div
                        className={`${panelStyle.panelContainer} ${mainStyle.flexCenter}`}
                    >
                        <Image
                            src="/assets/homepage0-bg.png"
                            width={1440}
                            height={900}
                            alt="osairo world background"
                        />
                        <Image
                            src="/assets/homepage0-map.png"
                            width={1440}
                            height={900}
                            alt="osairo world map"
                            style={{
                                position: "absolute",
                                left: 0,
                                top: 0,
                            }}
                        />
                        <Image
                            src="/assets/homepage0-txt.png"
                            width={900}
                            height={372}
                            alt="osairo world text"
                            style={{
                                position: "absolute",
                                left: 97,
                                top: 386,
                            }}
                        />
                        <Image
                            src="/assets/homepage0-wavemask.png"
                            width={1440}
                            height={220}
                            alt="osairo world wavemask"
                            style={{
                                position: "absolute",
                                left: 0,
                                top: 707,
                            }}
                        />
                        <div
                            className="media-panel"
                            style={{
                                position: "absolute",
                                left: 97,
                                top: 844,
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
