import styled from "styled-components";
import { theme } from "./theme";

interface Props {
  $type: "connected" | "unconnected";
}

export const StyledDiv = styled.div<Props>`
  width: 100%;
  margin: 1rem 0 0;
  display: flex;
  flex-direction: column;
  gap: ${({ $type }) => ($type === "connected" ? "1rem" : "1.5rem")};
  align-items: ${({ $type }) => ($type === "connected" ? "start" : "center")};

  background: #fff;
  color: ${theme.colors.primary};
  border-radius: 3px;
  padding: 1rem;
  text-align: ${({ $type }) => ($type === "connected" ? "left" : "center")};
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25);

  h3 {
    font-size: 1.35rem;
    font-weight: 600;
  }

  p {
    font-size: 0.9rem;
    font-weight: 300;
  }

  span {
    margin-left: 5rem;
    font-weight: 500;
    font-size: 1rem;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    /* margin: 1rem 0; */

    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }

  /* @media screen and (min-width: ${theme.breakpoints.laptop}) {
    margin: 2rem 0;
  } */
`;

export const Table = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-top: 1px ${theme.colors.default} solid;
`;
