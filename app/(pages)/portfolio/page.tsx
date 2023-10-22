"use client";

import { StyledSection, Title } from "@/components/styles/App.styled";
import NftData from "@/lib/nftData.json";
import Carousel from "@/components/carousel";

export default function Page() {
  return (
    <StyledSection>
      <Title>
        <h1>The Agents Portfolio</h1>
      </Title>

      <Carousel nftData={NftData} role="full" />
    </StyledSection>
  );
}
