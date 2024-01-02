import "swiper/css";
import "swiper/react";
import "swiper/css/navigation";
import Image from "next/image";
import SwiperStyle from "@/components/custom-swiper/swiper.module.css";

export interface ICustomSwiperSlide {
    src: string;
    nftType: string;
    width: number;
    height: number;
    index: number;
    activeIndex: number;
}

export default function CustomSwiperSlide(props: ICustomSwiperSlide) {

    if (props.activeIndex == props.index) {
        return (
            <>
                <div className={`${SwiperStyle.SwiperSlideContainer}`}>
                    <div className={`${SwiperStyle.SwiperSlideNftTypeDiv}`}>
                        <p className={`${SwiperStyle.SwiperSlideNftTypeText}`}>NFT Type : {props.nftType}</p>
                    </div>
                    <Image className={`${SwiperStyle.SwiperSlideImage}`}
                           alt="land nft"
                           src={props.src}
                           width={props.width}
                           height={props.height}
                    />
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className={`${SwiperStyle.SwiperSlideContainer}`}>
                    <Image className={`${SwiperStyle.SwiperSlideImage2}`}
                           alt="land nft"
                           src={props.src}
                           width={props.width}
                           height={props.height}
                    />
                    <div className={`${SwiperStyle.SwiperSlideImageMask}`}/>
                </div>
            </>
        );
    }
}
