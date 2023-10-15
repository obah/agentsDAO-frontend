"use client";

import { StyledSection, Flex, SectionContainer } from "./styles/Section.styled";
import { StyledButton } from "./styles/Button.styled";

export default function CreditsSection() {
  return (
    <StyledSection $bg="default">
      <SectionContainer>
        <h2>Made with ❤️ by {/*Put agents logo style here*/}Obaloluwa</h2>
        <p>
          Building The Agents DAO has been an incredibly fun effort and learning
          activity for me. I am always looking to improve my frontend
          development, smart contract development skills and make my projects
          better, so please let me know how I can improve.
        </p>
        <Flex>
          <StyledButton $type="primary" href="mailto:hello@obaloluwa.com">
            Email
          </StyledButton>

          <StyledButton
            $type="secondary"
            href="https://github.com/obah/agentsDAO-frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </StyledButton>
        </Flex>
      </SectionContainer>
    </StyledSection>
  );
}
