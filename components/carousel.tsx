import { NftCard } from "@/components/styles/Portfolio.styled";
import { StyledButton } from "@/components/styles/Button.styled";
import Image, { StaticImageData } from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Keyboard } from "swiper/modules";
import "@/components/styles/styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

interface NftData {
  image: string | StaticImageData;
  name: string;
  link?: string;
}

type Props = {
  nftData: NftData[];
  role: "full" | "mini";
};

export default function Carousel({ nftData, role }: Props) {
  return (
    <>
      <Swiper
        navigation
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        speed={500}
        keyboard={{ enabled: true }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1.5,
          slideShadows: false,
        }}
        modules={[Navigation, EffectCoverflow, Keyboard]}
      >
        {nftData.map((item) => (
          <SwiperSlide key={item.name}>
            <NftCard>
              <Image src={item.image} alt="nft" width={400} height={400} />
              <div>
                <p>{item.name}</p>
                {role === "full" ? (
                  <StyledButton href={item.link} $type="primary">
                    View
                  </StyledButton>
                ) : null}
              </div>
            </NftCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
