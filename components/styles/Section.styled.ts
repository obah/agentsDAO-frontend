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
  gap: 2rem;
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
  }

  h1 ~ p {
    margin: 0 0 3rem;
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

  ul > li {
    list-style: none;

    display: flex;
    gap: 1rem;
    margin: 0 0 1rem;
    padding-left: 1rem;
    align-items: center;
    font-size: 1.1rem;
  }
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
`;

export const Flex = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  height: 500px;
  margin: 4rem auto;

  img {
    max-width: 100%;
    /* height: 100%; */
    object-fit: cover;
  }
`;
