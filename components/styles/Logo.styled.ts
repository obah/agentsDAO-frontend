import styled from "styled-components";
import { theme } from "./theme";

interface Props {
  $type: "straight" | "slant";
}

export const Logo = styled.p<Props>`
  font-family: "Chakra Petch", sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  color: ${theme.colors.default};
  transform: ${({ $type }) =>
    $type === "straight" ? "none" : "rotate(-20deg)"};
  animation: flickering 1.8s infinite alternate;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 2rem;
  }

  @keyframes flickering {
    0%,
    19%,
    21%,
    23%,
    25%,
    54%,
    56%,
    100% {
      text-shadow: -0.2rem -0.2rem 1rem ${theme.colors.default},
        0.2rem 0.2rem 1rem ${theme.colors.default},
        0 0 2rem ${theme.colors.secondary}, 0 0 4rem ${theme.colors.secondary},
        0 0 6rem ${theme.colors.secondary}, 0 0 8rem ${theme.colors.secondary},
        0 0 10rem ${theme.colors.secondary};
    }
    20%,
    24%,
    55% {
      text-shadow: none;
      box-shadow: none;
    }
  }
`;
