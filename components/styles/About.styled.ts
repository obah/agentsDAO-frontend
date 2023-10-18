import styled from "styled-components";
import { theme } from "./theme";

export const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }
`;
