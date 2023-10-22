import styled from "styled-components";
import { theme } from "./theme";

export const NftCard = styled.div`
  width: 100%;

  p {
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 1rem;
  }

  /* @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 50%;
  }

  @media screen and (min-width: ${theme.breakpoints.laptop}) {
    width: 30%;
  } */

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    /* justify-content: space-between; */
    padding: 1rem 0;
  }
`;
