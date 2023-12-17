import {useState} from "react";
import FigmaImage, {IFigmaImageProps} from "@/components/figma-image/figma-image";

export default function Resources() {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index: number) => {
        console.log("🐧", index)
        setActiveIndex(index);
    };

    const buttons: IFigmaImageProps[] = [
        {
            figmaX: 6452,
            figmaY: 2398,
            figmaW: 300,
            figmaH: 100,
            homepageNumber: 4,
            name: 'button0',
        },
        {
            figmaX: 6452,
            figmaY: 2498,
            figmaW: 300,
            figmaH: 100,
            homepageNumber: 4,
            name: 'button1',
        },
        {
            figmaX: 6452,
            figmaY: 2598,
            figmaW: 300,
            figmaH: 100,
            homepageNumber: 4,
            name: 'button2',
        },
        {
            figmaX: 6452,
            figmaY: 2698,
            figmaW: 300,
            figmaH: 100,
            homepageNumber: 4,
            name: 'button3',
        },
    ];
    const activeButtons: IFigmaImageProps[] = buttons.map((button: IFigmaImageProps) => ({
        ...button,
        name: button.name + '-active',
    }));
    const materialResources: IFigmaImageProps[] = [
        {
            figmaX: 6827,
            figmaY: 2351,
            figmaW: 528,
            figmaH: 490,
            homepageNumber: 4,
            name: 'material-resources0',
        },
        {
            figmaX: 6827,
            figmaY: 2351,
            figmaW: 528,
            figmaH: 490,
            homepageNumber: 4,
            name: 'material-resources1',
        },
        {
            figmaX: 6827,
            figmaY: 2351,
            figmaW: 528,
            figmaH: 490,
            homepageNumber: 4,
            name: 'material-resources2',
        },
        {
            figmaX: 6882,
            figmaY: 2438,
            figmaW: 414,
            figmaH: 355,
            homepageNumber: 4,
            name: 'material-resources3',
        },
    ];

    return (
        <>
            {buttons.map((props: IFigmaImageProps, index: number) => (
                <div key={index} style={{cursor: "pointer"}} onClick={() => handleClick(index)}>
                    <FigmaImage {...props} />
                </div>

            ))}

            {activeButtons.map((props: IFigmaImageProps, index: number) => (
                activeIndex === index && (
                    <div key={index}>
                        <FigmaImage {...props}/>
                    </div>
                )
            ))}

            {materialResources.map((props: IFigmaImageProps, index: number) => (
                activeIndex === index && (
                    <div key={index}>
                        <FigmaImage {...props}/>
                    </div>
                )
            ))}
        </>
    );
}
