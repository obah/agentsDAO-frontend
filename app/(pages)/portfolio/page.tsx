"use client";

import { StyledSection, Title } from "@/components/styles/App.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import NFT1 from "@/assets/images/NFT1.webp";
import NFT2 from "@/assets/images/NFT2.webp";
import NFT3 from "@/assets/images/NFT5.webp";
import NFT4 from "@/assets/images/NFT8.png";
import NFT5 from "@/assets/images/NFT3.webp";
import NFT6 from "@/assets/images/NFT4.webp";
import Image from "next/image";
import { NftCard } from "@/components/styles/Portfolio.styled";

export default function Page() {
  const NftData = [
    {
      image: NFT1,
      name: "System Crash",
      link: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/94097795555596813934356543551066882305933048127717855204369613979654174025487",
    },
    {
      image: NFT2,
      name: "ATROPOLIS",
      link: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/94097795555596813934356543551066882305933048127717855204369613981853197281039",
    },
    {
      image: NFT3,
      name: "Everything Water",
      link: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/94097795555596813934356543551066882305933048127717855204369613925778104261964",
    },
    {
      image: NFT4,
      name: "BoredApeYachtClub",
      link: "https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/7808",
    },
    {
      image: NFT5,
      name: "Cosmic Jelly",
      link: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/94097795555596813934356543551066882305933048127717855204369613860906918217880",
    },
    {
      image: NFT6,
      name: "Dead Botz",
      link: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/94097795555596813934356543551066882305933048127717855204369613989549778667972",
    },
  ];

  return (
    <StyledSection>
      <Title>
        <h1>The Agents Portfolio</h1>
      </Title>

      <Swiper
        spaceBetween={1000}
        navigation
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        speed={1000}
        initialSlide={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[Navigation, EffectCoverflow]}
      >
        {NftData.map((item) => (
          <SwiperSlide key={item.name}>
            <NftCard>
              <Image src={item.image} alt="nft" width={400} />
              <a href={item.link}>{item.name}</a>
            </NftCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSection>
  );
}
