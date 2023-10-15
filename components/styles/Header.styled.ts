import styled from "styled-components";
import { theme } from "./theme";

export const StyledHeader = styled.header`
  background-color: transparent;

  a {
    color: ${theme.colors.default};
  }

  nav {
    transform: translateY(-100vw);
    visibility: hidden;
    position: fixed;
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
      visibility: visible;
      position: static;
    }

    ul {
      flex-direction: row;
    }
  }
`;

export const Container = styled.div`
  max-width: 1650px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  @media screen and (min-width: ${theme.breakpoints.laptop}) {
    padding: 2rem 1rem;
  }
`;

export const Flex = styled.div`
  @media screen and (min-width: ${theme.breakpoints.laptop}) {
    width: 65%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Connector = styled.div`
  display: none;

  @media screen and (min-width: ${theme.breakpoints.laptop}) {
    display: block;
  }
`;
