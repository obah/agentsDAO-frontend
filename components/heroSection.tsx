"use client";

import {
  StyledSection,
  StyledDiv,
  ImageWrapper,
  SectionContainer,
} from "./styles/Section.styled";
import { StyledLink } from "./styles/Button.styled";
import NFT from "@/assets/images/NFT1.webp";
import NFT2 from "@/assets/images/NFT8.png";
import NFT3 from "@/assets/images/NFT10.png";
import Image from "next/image";

export default function HeroSection() {
  return (
    <StyledSection $bg="primary" $align="center">
      <SectionContainer>
        <div>
          <h1>The Agents</h1>
          <h2>The community for all digital collectors</h2>
          <p>Open to everyone. Built to collect every digital asset</p>

          <StyledLink $type="secondary" $align href="/dashboard">
            Enter
          </StyledLink>

          {/* <div>Image hereput the agents image and 2 popular nfts here</div> */}
          <ImageWrapper>
            <Image src={NFT} alt="agents NFT" />
            <Image src={NFT2} alt="agents NFT" width={300} />
            <Image src={NFT3} alt="agents NFT" width={400} />
          </ImageWrapper>

          <StyledDiv>
            <div>
              <p>Agents Worldwide</p>
              <p>2,000+</p>
            </div>
            <div>
              <p>Asset Valuation</p>
              <p>$30M+</p>
            </div>
            <div>
              <p>NFTs Owned</p>
              <p>150+</p>
            </div>
          </StyledDiv>
        </div>

        <div>
          <p>
            The slickest collectors around the world are Agents and are actively
            increasing their portfolio accross different markets and assets
          </p>

          <div>
            {/*mini icons list here of nft markets, crypto assets and nfts that have logo eg manaland metaverse nfts*/}
          </div>
        </div>
      </SectionContainer>
    </StyledSection>
  );
}
