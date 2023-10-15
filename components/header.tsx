"use client";

import Link from "next/link";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  StyledHeader,
  Container,
  Flex,
  Connector,
  MenuBtn,
  StyledNav,
} from "@/components/styles/Header.styled";
import { Logo } from "./styles/Logo.styled";
import { StyledLink } from "./styles/Button.styled";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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

  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const menuItems: MenuItem[] = [
    { path: "/dashboard", title: "Dashboard" },
    { path: "/portfolio", title: "Portfolio" },
    { path: "/members", title: "Members" },
    { path: "/about", title: "About" },
  ];

  const handleMenu = () => setIsOpen(!isOpen);

  const openStyle = isOpen ? " open" : "";

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
              <MenuBtn>
                <span onClick={handleMenu} className={openStyle}></span>
              </MenuBtn>

              <StyledNav className={openStyle}>
                <ul className={openStyle}>
                  {menuItems.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.path}
                        className={
                          pathname.includes(item.path) ? " active" : ""
                        }
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </StyledNav>
            </div>
            <Connector>
              {isConnected ? (
                <div>
                  <ConnectButton accountStatus={"address"} />
                </div>
              ) : (
                <div>
                  <ConnectButton />
                </div>
              )}
            </Connector>
          </Flex>
        )}
      </Container>
    </StyledHeader>
  );
}

export default Header;
