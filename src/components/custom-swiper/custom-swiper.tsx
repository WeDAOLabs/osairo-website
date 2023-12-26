import React, {useState} from 'react';
import "swiper/css";
import "swiper/react";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, EffectCoverflow, Pagination} from "swiper/modules";
import Image from "next/image";
import CustomSwiperSlide from "@/components/custom-swiper/custom-swiper-slide";
import {toast} from "react-toastify";
import SwiperStyle from "@/components/custom-swiper/swiper.module.css"

export interface ICustomSwiper {
}

const pagination = {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index: number, className: string) {
        return '<span class="' + className + '"> </span>';
    },
};

const TileImages = [
    {
        src: "/assets/swiper/tile0.png",
        nftType: "Forest",
        width: 778 / 2,
        height: 762 / 2,
        onClick: () => toast.info("coming soon!"),
    },
    {
        src: "/assets/swiper/tile1.png",
        nftType: "Desert",
        width: 837 / 2,
        height: 988 / 2,
        onClick: () => toast.info("coming soon!"),
    },
    {
        src: "/assets/swiper/tile2.png",
        nftType: "Mountain",
        width: 676 / 2,
        height: 762 / 2,
        onClick: () => toast.info("coming soon!"),
    },
    {
        src: "/assets/swiper/tile3.png",
        nftType: "ocean",
        width: 962 / 2,
        height: 942 / 2,
        onClick: () => toast.info("coming soon!"),
    },
    {
        src: "/assets/swiper/tile4.png",
        nftType: "lake",
        width: 962 / 2,
        height: 942 / 2,
        onClick: () => toast.info("coming soon!"),
    },
    {
        src: "/assets/swiper/tile5.png",
        nftType: "marsh",
        width: 962 / 2,
        height: 942 / 2,
        onClick: () => toast.info("coming soon!"),
    }
];

export default function CustomSwiper(props: ICustomSwiper) {

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <Swiper className={`${SwiperStyle.swiperContainer}`}
                    effect={`coverflow`}
                    initialSlide={2}
                    onSlideChange={(swiper) => {
                        setActiveIndex(swiper.activeIndex);
                    }}
                    slidesPerView={3}
                    centeredSlides={true}
                    grabCursor={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 700,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={pagination}
                    modules={[Navigation, EffectCoverflow, Pagination]}
            >
                {TileImages.map((tile: any, k: number) => (
                    <SwiperSlide key={k}>
                        <CustomSwiperSlide src={tile.src} nftType={tile.nftType}
                                           index={k} activeIndex={activeIndex}
                                           width={tile.width} height={tile.height}/>
                    </SwiperSlide>
                ))}

            </Swiper>

            <Image className="swiper-button-next"
                   src="/assets/swiper/button-next.png"
                   width={58.5}
                   height={61}
                   alt="osairo world image: button next"
            />
            <Image className="swiper-button-prev"
                   src="/assets/swiper/button-prev.png"
                   width={58.5}
                   height={61}
                   alt="osairo world image: button prev"
            />
            <div className={`swiper-pagination ${SwiperStyle.swiperPaginationContainer}`}/>
        </>
    );
}
