"use client";

import Link from "next/link";
import { StyledFooter } from "./styles/Footer.styled";
import { Logo } from "./styles/Logo.styled";
import { Container } from "./styles/Header.styled";

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <div>links here</div>
        <Link href="/">
          <Logo>
            &copy; {/**THIS SHOULD HAVE THE LOOG STYLING */}The Agents
          </Logo>
        </Link>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
