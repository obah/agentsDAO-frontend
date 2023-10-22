import styled from "styled-components";
import { theme } from "./theme";

interface Props {
  $multichild?: boolean;
}

export const StyledMain = styled.main`
  background-color: ${theme.colors.default};
  color: ${theme.colors.primary};
  min-height: 100vh;
`;

export const StyledSection = styled.section`
  max-width: 1600px;
`;

export const Title = styled.div`
  background-color: ${theme.colors.primary};
  padding: 1rem 1.2rem;

  h1 {
    font-size: 1.25rem;
    font-weight: 600;
    color: ${theme.colors.secondary};
    margin: 0 0 1rem;
  }

  h2 {
    color: ${theme.colors.default};
    margin: 0 0 1 rem;
  }

  @media screen and (min-width: ${theme.breakpoints.laptop}) {
    padding: 2rem 6rem;

    h1 {
      font-size: 1.75rem;
    }

    h2 {
      font-size: 2.2rem;
    }
  }
`;

export const Grid = styled.div<Props>`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 1rem;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 0 3rem;
  }

  @media screen and (min-width: ${theme.breakpoints.laptop}) {
    grid-template-columns: ${({ $multichild }) =>
      $multichild ? "1fr 1fr" : "1fr"};
    gap: 1rem;
    padding: 0 7rem;
  }
`;
