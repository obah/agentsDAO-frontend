import styled from "styled-components";
import { theme } from "./theme";

export const StyledHeader = styled.header`
  background-color: transparent;

  a {
    color: ${theme.colors.default};
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

export const MenuBtn = styled.div`
  position: relative;
  cursor: pointer;

  span {
    position: absolute;
    width: 25px;
    height: 2px;
    right: 0;
    background: ${theme.colors.secondary};
    transition: transform 300ms ease;

    &::before {
      content: "";
      position: absolute;
      top: -0.4rem;
      width: 25px;
      height: 2px;
      background: ${theme.colors.secondary};
      transition: transform 300ms ease;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0.4rem;
      width: 25px;
      height: 2px;
      background: ${theme.colors.secondary};
      transition: transform 300ms ease;
    }

    &.open {
      background: transparent;

      &::before {
        transform: rotate(45deg) translate(4px, 3px);
      }

      &::after {
        transform: rotate(-45deg) translate(5px, -6px);
      }
    }
  }

  @media screen and (min-width: ${theme.breakpoints.laptop}) {
    display: none;
  }
`;

export const StyledNav = styled.nav`
  position: fixed;
  top: 51px;
  right: 0;
  width: 100vw;
  z-index: 10;
  visibility: hidden;
  background: ${theme.colors.primary};

  &.open {
    visibility: visible;
  }

  ul {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: uppercase;
    padding: 2rem 0;
    transform: translateX(200%);
    transition: transform 300ms ease-in;
    list-style: none;

    &.open {
      transform: translateX(0);
    }

    li {
      width: 100%;
      padding: 1rem 0;
      text-align: center;
      transition: color 300ms ease-in;

      a {
        font-size: 1.1rem;

        &.active {
          color: ${theme.colors.secondary};
        }

        &:hover {
          color: ${theme.colors.secondary};
        }

        &:active {
          color: ${theme.colors.default};
        }
      }
    }
  }

  @media screen and (min-width: ${theme.breakpoints.laptop}) {
    position: static;
    visibility: visible;
    width: 100%;

    ul {
      flex-direction: row;
      height: 100%;
      width: 100;
      text-transform: none;
      padding: 0;
      transform: translateX(0);
      gap: 3rem;
    }
  }
`;
