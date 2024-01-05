import Image from "next/image";

export interface IFigmaImageProps {
    figmaX: number;         // figma中X的数值(用于计算left)
    figmaY: number;         // figma中Y的数值(用于计算top)
    figmaW: number;         // figma中W的数值
    figmaH: number;         // figma中H的数值
    homepageNumber: number; // 第几页(用于src与计算相对位置)
    name: string;           // 图片名称(用于alt与src)
}

export default function FigmaImage(props: IFigmaImageProps) {
    return (
        <>
            <Image
                width={props.figmaW}
                height={props.figmaH}
                alt={`osairo world image: ${props.name}`}
                src={`assets/homepage${props.homepageNumber}/${props.name}.png`}
                style={{
                    position: "absolute",
                    left: props.figmaX - 6220,
                    top: props.figmaY - props.homepageNumber * 900 - (-1495),
                }}
            />
        </>
    );
}
