import styled from "styled-components";
import { theme } from "./theme";

interface Props {
  $bg: "primary" | "secondary" | "default";
  $align?: string;
}

export const StyledSection = styled.section<Props>`
  min-height: 100vh;

  background: ${({ $bg }) =>
    $bg === "primary"
      ? theme.colors.primary
      : $bg === "secondary"
      ? theme.colors.secondary
      : theme.colors.default};

  color: ${({ $bg }) => ($bg === "default" ? theme.colors.primary : "#fff")};

  text-align: ${({ $align }) => $align};

  h1 {
    color: ${theme.colors.secondary};
    font-size: 1.5rem;
    margin: 1rem 0 0;
  }

  h2 {
    font-size: 1.85rem;
    font-weight: 700;
    margin: 0.5rem 0 1rem;
  }

  p {
    font-size: 1.25rem;
    font-weight: 600;
  }

  h1 ~ p {
    margin: 0 0 3rem;
  }

  ul > li {
    list-style: none;

    display: flex;
    gap: 1rem;
    margin: 0 0 1rem;
    padding-left: 1rem;
    align-items: center;
    font-size: 1.1rem;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    text-align: center;

    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 3.25rem;
    }

    p {
      font-size: 1.5rem;
    }

    ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin: 2rem 0 0;
    }
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3.7rem 2rem;
  max-width: 1024px;
  margin: 0 auto;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & > div {
    p:nth-child(1) {
      font-size: 1rem;
    }

    p:nth-child(2) {
      font-size: 2.5rem;
    }
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 4rem;
    justify-content: center;
    margin: 2rem 0;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    justify-content: center;
    gap: 2rem;
    margin: 1rem 0 0;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 500px;
  margin: 4rem auto;

  img {
    position: absolute;
    max-width: 100%;
    object-fit: cover;
    border-radius: 15px;
  }

  img:nth-child(1) {
    left: 0;
  }

  img:nth-child(2) {
    display: none;
    bottom: 0;
    z-index: 10;
  }

  img:nth-child(3) {
    display: none;
    right: 0;
    bottom: 0;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    img:nth-child(2) {
      display: block;
      right: 0;
    }
  }

  @media screen and (min-width: ${theme.breakpoints.laptop}) {
    img:nth-child(2) {
      right: 30%;
    }

    img:nth-child(3) {
      display: block;
    }
  }
`;
