import styled from "styled-components";
import { theme } from "./theme";

interface Props {
  $bg: string;
  $align?: string;
}

export const StyledSection = styled.section<Props>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 3.7rem 2rem;

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
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
  }

  p {
    font-size: 1.25rem;
  }
`;

export const StyledSectionAnimated = styled.section<Props>`
  min-height: 100vh;
`;
