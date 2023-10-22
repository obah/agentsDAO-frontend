import styled from "styled-components";
import { theme } from "./theme";

export const OwnerCard = styled.div``;

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
