"use client";

import { AnimatedPorfolio } from "./styles/Portfolio.styled";
import { StyledSection, SectionContainer } from "./styles/Section.styled";
import NFT1 from "@/assets/images/NFT1.webp";
import NFT2 from "@/assets/images/NFT2.webp";
import NFT3 from "@/assets/images/NFT5.webp";
import NFT4 from "@/assets/images/NFT8.png";
import Image from "next/image";

const nftData = [
  { image: NFT1, name: "System Crash" },
  { image: NFT3, name: "Everthing Water" },
  { image: NFT2, name: "Atroplis" },
  { image: NFT4, name: "BoredYachtApeClub" },
];

export default function ShowcaseSection() {
  return (
    <StyledSection $bg="secondary" $full>
      <SectionContainer>
        <h2>Sneak Peak Of Our Portfolio</h2>

        <AnimatedPorfolio>
          <ul>
            {nftData.map((item) => (
              <li key={item.name} data-text={item.name}>
                <Image src={item.image} alt={item.name} width={350} />
                {item.name}
              </li>
            ))}
          </ul>
        </AnimatedPorfolio>
      </SectionContainer>
    </StyledSection>
  );
}
