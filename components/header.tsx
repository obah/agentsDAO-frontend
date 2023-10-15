"use client";

import Link from "next/link";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  StyledHeader,
  Container,
  Flex,
} from "@/components/styles/Header.styled";
import { Logo } from "./styles/Logo.styled";
import { StyledLink } from "./styles/Button.styled";
import { useState } from "react";

interface MenuItem {
  path: string;
  title: string;
}

interface Props {
  mini?: boolean;
}

function Header({ mini }: Props) {
  const { isConnected } = useAccount();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuItems: MenuItem[] = [
    { path: "/dashboard", title: "Dashboard" },
    { path: "/portfolio", title: "Portfolio" },
    { path: "/members", title: "Members" },
    { path: "/about", title: "About" },
  ];

  const handleMenu = () => setIsOpen(!isOpen);

  return (
    <StyledHeader>
      <Container>
        <Link href="/">
          <Logo>The Agents</Logo>
        </Link>
        {mini ? (
          <div>
            <StyledLink $type="secondary" $box href="/dashboard">
              Launch App
            </StyledLink>
          </div>
        ) : (
          <Flex>
            <div>
              <button onClick={handleMenu}>hamburger</button>
              <nav>
                <ul>
                  {menuItems.map((item) => (
                    <li key={item.title}>
                      <Link href={item.path}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div>
              {isConnected ? (
                <>
                  <div>
                    <ConnectButton accountStatus={"address"} />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <ConnectButton />
                  </div>
                </>
              )}
            </div>
          </Flex>
        )}
      </Container>
    </StyledHeader>
  );
}

export default Header;
