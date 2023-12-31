"use client";

import { SectionContainer, StyledSection } from "./styles/Section.styled";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { StyledLink } from "./styles/Button.styled";

export default function BenefitsSection() {
  const benefits = [
    { id: 1, text: "Low barrier to entry" },
    { id: 2, text: "Access to every digital asset" },
    { id: 3, text: "Highly liquid investment" },
    { id: 4, text: "Full control over" },
    { id: 5, text: "Easy governance" },
    { id: 6, text: "Easy profit sharing" },
    { id: 7, text: "Highly transparent" },
    { id: 8, text: "0% Risk to assets" },
  ];

  return (
    <StyledSection $bg="primary">
      <SectionContainer>
        <h2>Agents 🤝 Everyone</h2>
        <p>
          The Agents DAO was made with almost no barrier to entry for everyone
          on the web. All you need is a crypto wallet, an Agents NFT and funds
          to contribute to the Agents Pool. With this, you can participate in
          the Agent Asset Acquisition and profit sharing process.
        </p>

        <div>
          <ul>
            {benefits.map((benefit) => (
              <li key={benefit.id}>
                <span>
                  <BsFillPatchCheckFill />
                </span>
                <div>{benefit.text}</div>
              </li>
            ))}
          </ul>
        </div>

        <StyledLink $type="secondary" href="/dashboard">
          Enter
        </StyledLink>
      </SectionContainer>
    </StyledSection>
  );
}
