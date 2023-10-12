"use client";

import Link from "next/link";
import { useAccount, useBalance } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

interface MenuItem {
  path: string;
  title: string;
}

function Header() {
  const { isConnected } = useAccount();

  const menuItems: MenuItem[] = [
    { path: "/dashboard", title: "Dashboard" },
    { path: "/portfolio", title: "Portfolio" },
    { path: "/members", title: "Members" },
    { path: "/about", title: "About" },
  ];

  return (
    <header>
      <div>
        <p>{/**THIS SHOULD HAVE THE LOOG STYLING */}The Agents</p>
        <div>
          <div>hamburger</div>
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
      </div>
    </header>
  );
}

export default Header;
