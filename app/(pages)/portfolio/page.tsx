"use client";

import { StyledSection, Title } from "@/components/styles/App.styled";

export default function Page() {
  return (
    <StyledSection>
      <Title>
        <h1>The Agents Portfolio</h1>
      </Title>
      <div>
        {/* render nfts here, mapped to a card component and include the gsap hover effect here also - 3 - 6 NFTs */}
      </div>
    </StyledSection>
  );
}
