"use client";

import Link from "next/link";
import { StyledFooter } from "./styles/Footer.styled";
import { Logo } from "./styles/Logo.styled";
import { Container } from "./styles/Header.styled";

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Link href="/">
          <Logo $type="straight"> The Agents</Logo>
        </Link>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
