import "swiper/css";
import "swiper/react";
import "swiper/css/navigation";
import Image from "next/image";
import SwiperStyle from "@/components/custom-swiper/swiper.module.css";

export interface ICustomSwiperSlide {
    src: string;
    width: number;
    height: number;
}

export default function CustomSwiperSlide(props: ICustomSwiperSlide) {
    return (
        <>
            <div className={`${SwiperStyle.SwiperSlideContainer}`}>
                <Image
                    alt="land nft"
                    src={props.src}
                    width={props.width}
                    height={props.height}
                />
            </div>
        </>
    );
}
