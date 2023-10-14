"use client";

import { StyledSection } from "./styles/Section.styled";

export default function CreditsSection() {
  return (
    <StyledSection $bg="default">
      <div>
        <h2>Made with ❤️ by {/*Put agents logo style here*/}Obaloluwa</h2>
        <p>
          Building The Agents DAO has been an incredibly fun effort and learning
          activity for me. I am always looking to improve my frontend
          development, smart contract development skills and make my projects
          better, so please let me know how I can improve.
        </p>
        <div>
          <a href="mailto:hello@obaloluwa.com">Email</a>
          <a
            href="https://github.com/obah/agentsDAO-frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </StyledSection>
  );
}
