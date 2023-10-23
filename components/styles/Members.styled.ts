import styled from "styled-components";
import { theme } from "./theme";

export const OwnerCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  border: 2px solid ${theme.colors.default};
  border-radius: 5px;

  div:nth-child(2) {
    width: 100px;
  }

  h3 {
    font-size: 1rem;
    margin-bottom: 0.8rem;
  }

  p {
    text-align: center;
    font-size: 0.75rem;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 40%;
    gap: 0rem;
    justify-content: space-between;
  }

  @media screen and (min-width: ${theme.breakpoints.laptop}) {
    width: 400px;

    div:nth-child(2) {
      width: 200px;
    }

    h3 {
      text-align: center;
      margin-bottom: 1rem;
      font-size: 1.3rem;
    }

    p {
      text-align: center;
      font-size: 1rem;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 90px;
  height: 90px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: ${theme.breakpoints.laptop}) {
    width: 140px;
    height: 140px;
  }
`;

export const MembersArea = styled.div`
  h2 {
    margin: 1rem 0 2rem;
    text-align: center !important;
  }
`;

export const MembersSection = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  padding: 1rem;
  list-style: none;

  li {
    margin: 0 1rem 1rem 0;
    padding: 1rem 1.5rem;
    border: 2px solid ${theme.colors.default};
    border-radius: 1rem;
    text-overflow: ellipsis;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
