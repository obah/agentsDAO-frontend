"use client";

import { StyledSection, Title } from "@/components/styles/App.styled";
import { StyledButton } from "@/components/styles/Button.styled";
import Image from "next/image";
import { NftCard } from "@/components/styles/Portfolio.styled";
import NftData from "@/lib/nftData.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Keyboard } from "swiper/modules";
import "@/components/styles/styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

export default function Page() {
  return (
    <StyledSection>
      <Title>
        <h1>The Agents Portfolio</h1>
      </Title>

      <Swiper
        // spaceBetween={100}
        navigation
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        speed={500}
        initialSlide={1}
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
        {NftData.map((item) => (
          <SwiperSlide key={item.name}>
            <NftCard>
              <Image src={item.image} alt="nft" width={400} height={400} />
              <div>
                <p>{item.name}</p>
                <StyledButton href={item.link} $type="primary">
                  View
                </StyledButton>
              </div>
            </NftCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSection>
  );
}
