import styled from "styled-components";
import { theme } from "./theme";
import Link from "next/link";

interface Props {
  $type: "primary" | "secondary";
  $align?: boolean;
}

export const StyledButton = styled.a<Props>`
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 700;
  width: 8rem;
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
    transform: scale(1.1, 1.05);
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 1.4rem;
    width: 9rem;
  }
`;

export const StyledLink = styled(Link)<Props>`
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 700;
  width: 8rem;
  margin: 0 ${({ $align }) => ($align ? " auto " : " 0 ")};
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
    transform: scale(1.1, 1.05);
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 1.4rem;
    width: 9rem;
    margin: 0 auto;
  }
`;
