export interface IFigmaFontProps {
    figmaX: number;         // figma中X的数值(用于计算left)
    figmaY: number;         // figma中Y的数值(用于计算top)
    figmaW: number;         // figma中W的数值
    homepageNumber: number; // 第几页(用于src与计算相对位置)

    fontFamily: string;     // 字体样式
    fontWeight: number;     // 字体粗细
    fontSize: number;       // 字体大小

    figmaFillColor?: string | string[];     // 字体颜色(单色或渐变色)(默认单色#333333)
    figmaStrokeColor?: string;              // 描边颜色(默认无描边transparent)
    figmaStrokeWidth?: number;              // 描边宽度(默认0px)

    value: string;          // 文本内容
}

export default function FigmaFont(props: IFigmaFontProps) {
    const fillColor: string | string[] = props.figmaFillColor || '#333333';
    const strokeColor: string | string[] = props.figmaStrokeColor || 'transparent';
    const strokeWidth: number = (props.figmaStrokeWidth || 0) * 2;

    return (
        <>
            {strokeWidth > 0 && (
                <text style={{
                    position: "absolute",
                    width: props.figmaW,
                    height: "auto",
                    left: props.figmaX - 6220,
                    top: props.figmaY - props.homepageNumber * 900 - (-1495),

                    fontFamily: props.fontFamily,
                    fontWeight: props.fontWeight,
                    fontSize: props.fontSize,

                    color: "transparent",

                    // 描边样式
                    WebkitTextStroke: `${strokeWidth}px ${strokeColor}`,
                }}>
                    {props.value}
                </text>
            )}

            <text style={{
                position: "absolute",
                width: props.figmaW,
                height: "auto",
                left: props.figmaX - 6220,
                top: props.figmaY - props.homepageNumber * 900 - (-1495),

                fontFamily: props.fontFamily,
                fontWeight: props.fontWeight,
                fontSize: props.fontSize,

                // 字体颜色
                ...(Array.isArray(fillColor)) ? {
                    backgroundImage: `linear-gradient(to right, ${fillColor.join(', ')})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                } : {
                    color: fillColor,
                },
            }}>
                {props.value}
            </text>
        </>
    );
}
