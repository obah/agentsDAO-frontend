import styled from "styled-components";
import { theme } from "./theme";

export const StyledHeader = styled.header`
  background-color: transparent;

  nav {
    transform: translateX(-100vw);
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    list-style: none;
  }

  @media screen and (min-width: ${theme.breakpoints.laptop}) {
    button {
      display: none;
    }

    nav {
      transform: none;
    }

    ul {
      flex-direction: row;
    }
  }
`;

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
`;

export const Flex = styled.div`
  width: 65%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
