import styled from "styled-components";
import { theme } from "./theme";

interface Props {
  $bg: "primary" | "secondary" | "default";
  $align?: string;
  $full?: boolean;
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
      grid-template-columns: ${({ $full }) => ($full ? "1fr" : "1fr 1fr")};
      margin: 2rem 0 0;
    }
  }

  @media screen and (min-width: ${theme.breakpoints.laptop}) {
    h1 {
      margin: 1rem 0 2rem;
    }

    h2 {
      margin: 2rem 0 3rem;
    }

    h1 ~ p {
      margin: 0 0 5rem;
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

export const AnimatedWaves = styled.div`
  position: relative;
  width: 100%;
  height: 20vh;
  background: transparent;
  overflow: hidden;

  div {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-image: url(https://1.bp.blogspot.com/-xQUc-TovqDk/XdxogmMqIRI/AAAAAAAACvI/AizpnE509UMGBcTiLJ58BC6iViPYGYQfQCLcBGAsYHQ/s1600/wave.png);
    background-size: 1000px 100px;
  }

  div:nth-child(1) {
    animation: wave 40s linear infinite;
    z-index: 1000;
    opacity: 1;
    animation-delay: 0s;
    bottom: 0;
  }

  div:nth-child(2) {
    animation: wave2 25s linear infinite;
    z-index: 999;
    opacity: 0.5;
    animation-delay: -5s;
    bottom: 10px;
  }

  div:nth-child(3) {
    animation: wave 40s linear infinite;
    z-index: 998;
    opacity: 0.2;
    animation-delay: -2s;
    bottom: 15px;
  }

  div:nth-child(4) {
    animation: wave2 20s linear infinite;
    z-index: 997;
    opacity: 0.7;
    animation-delay: -5s;
    bottom: 20px;
  }

  @keyframes wave {
    0% {
      background-position-x: 0px;
    }
    100% {
      background-position-x: 1000px;
    }
  }

  @keyframes wave2 {
    0% {
      background-position-x: 0px;
    }
    100% {
      background-position-x: -1000px;
    }
  }
`;
