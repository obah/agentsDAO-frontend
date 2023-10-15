"use client";

import { StyledSection, SectionContainer } from "./styles/Section.styled";

export default function ShowcaseSection() {
  return (
    <StyledSection $bg="secondary">
      <SectionContainer>
        <h2>Sneak Peak At Our Portfolio</h2>

        <div>
          {/*put 4 images of popular NFTs here with a slideshow/some form of interativity */}
        </div>
        {/* add any interactivity?? with the background maybe - nft hover with gsap */}
      </SectionContainer>
    </StyledSection>
  );
}
