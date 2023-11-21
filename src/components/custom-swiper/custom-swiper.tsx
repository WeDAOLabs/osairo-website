import "swiper/css";
import "swiper/react";
import "swiper/css/navigation";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, EffectCoverflow, Pagination} from "swiper/modules";
import Image from "next/image";
import {toast} from "react-toastify";

export interface ICustomSwiper {

}


const TileImages = [
    {
        src: "/tile_0.png",
        size: [726 / 2, 818 / 2],
        onClick: () => toast.info("coming soon!"),
    },
    {
        src: "/tile_1.png",
        size: [726 / 2, 818 / 2],
        onClick: () => toast.info("coming soon!"),
    },
    {
        src: "/tile_2.png",
        size: [726 / 2, 818 / 2],
        onClick: () => toast.info("coming soon!"),
    },
];

export default function CustomSwiper(props: ICustomSwiper) {
    return (
        <>
            <Swiper
                effect={`coverflow`}
                slidesPerView={3}
                centeredSlides={true}
                grabCursor={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 400,
                    modifier: 1,
                    slideShadows: true,
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                //TODO pagination不生效
                // 貌似是因为渲染顺序的原因 加载Swiper时认为SwiperSlide的数量=0 所以不显示pagination
                pagination={true}
                modules={[Navigation, EffectCoverflow, Pagination]}
                // loop
                style={{
                    position: "absolute",
                    left: 294,
                    top: 192,
                    width: 853,
                    height: 507,
                }}
            >
                {TileImages.map((tile: any, k: number) => (
                    <SwiperSlide key={k}>
                        <Image
                            src={tile.src}
                            alt="land nft"
                            width={tile.size[0]}
                            height={tile.size[1]}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Image
                className="swiper-button-next"
                src="/assets/homepage1-button-next.png"
                width={58.5}
                height={61}
                alt="osairo world swiper button next"
            />
            <Image
                className="swiper-button-prev"
                src="/assets/homepage1-button-prev.png"
                width={58.5}
                height={61}
                alt="osairo world swiper button next"
            />
        </>
    );
}
