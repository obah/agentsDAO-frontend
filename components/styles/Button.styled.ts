import styled from "styled-components";
import { theme } from "./theme";
import Link from "next/link";

interface Props {
  $type: "primary" | "secondary";
  $align?: boolean;
  $box?: boolean;
  $size?: string;
}

export const StyledButton = styled.a<Props>`
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 700;
  width: ${({ $size }) => ($size === "big" ? "12rem" : "8rem")};
  margin: 2rem 0;
  padding: 0.6rem 0;
  border-radius: 100vw;
  background-image: linear-gradient(
    to right,
    ${({ $type }) =>
      $type === "primary"
        ? `${theme.colors.primary}, #102a54`
        : `${theme.colors.secondary}, #91320c`}
  );
  color: ${theme.colors.default};
  transition: transform ease-out 200ms;

  &:hover {
    transform: scale(1.05, 1.025);
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 1.4rem;
    width: ${({ $size }) => ($size === "big" ? "14rem" : "9rem")};
  }
`;

export const StyledLink = styled(Link)<Props>`
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 700;
  width: ${({ $size }) => ($size === "big" ? "12rem" : "8rem")};
  margin: 0 ${({ $align }) => ($align ? " auto " : " 0 ")};
  padding: 0.6rem 0;
  border-radius: ${({ $box }) => ($box ? "10px" : "100vw")};
  background-image: linear-gradient(
    to right,
    ${({ $type }) =>
      $type === "primary"
        ? `${theme.colors.primary}, #102a54`
        : `${theme.colors.secondary}, #91320c`}
  );
  color: ${theme.colors.default};
  transition: transform ease-out 200ms;

  &:hover {
    transform: scale(1.05, 1.025);
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 1.4rem;
    width: ${({ $size }) => ($size === "big" ? "14rem" : "9rem")};
    margin: 0 auto;
  }
`;

export const StyledButton2 = styled.button<Props>`
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 700;
  width: 12rem;
  margin: 2rem 0;
  padding: 0.6rem 0;
  border-radius: 100vw;
  border: 0;
  background-image: linear-gradient(
    to right,
    ${({ $type }) =>
      $type === "primary"
        ? `${theme.colors.primary}, #102a54`
        : `${theme.colors.secondary}, #91320c`}
  );
  color: ${theme.colors.default};
  transition: transform ease-out 200ms;

  &:hover {
    transform: scale(1.05, 1.025);
    cursor: pointer;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 1.4rem;
    width: 14rem;
  }
`;
