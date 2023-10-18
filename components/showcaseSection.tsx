"use client";

import { AnimatedPorfolio } from "./styles/Portfolio.styled";
import { StyledSection, SectionContainer } from "./styles/Section.styled";
import NFT1 from "@/assets/images/NFT1.webp";
import NFT2 from "@/assets/images/NFT2.webp";
import NFT3 from "@/assets/images/NFT5.webp";
import NFT4 from "@/assets/images/NFT8.png";
import Image from "next/image";

let pos = document.documentElement;
pos.addEventListener("mouseover", (e) => {
  pos.style.setProperty("--x", e.clientX + "px");
  pos.style.setProperty("--y", e.clientY + "px");
});

export default function ShowcaseSection() {
  return (
    <StyledSection $bg="secondary" $full>
      <SectionContainer>
        <h2>Sneak Peak At Our Portfolio</h2>

        <AnimatedPorfolio>
          <ul>
            <li data-text="Systemcrash">
              <Image src={NFT1} alt="system crash nft" width={350} /> System
              Crash
            </li>
            <li data-text="EverythingWater">
              <Image src={NFT3} alt="everything water nft" width={350} />{" "}
              Everything Water
            </li>
            <li data-text="Astroplis">
              <Image src={NFT2} alt="astropolis nft" width={350} /> Astroplis
            </li>
            <li data-text="BoredYachtApeClub">
              <Image src={NFT4} alt="BAYC nft" width={350} /> BoredYachtApeClub
            </li>
          </ul>
        </AnimatedPorfolio>
      </SectionContainer>
    </StyledSection>
  );
}
