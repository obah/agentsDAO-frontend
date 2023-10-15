"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { StyledMain } from "@/components/styles/App.styled";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  );
}
