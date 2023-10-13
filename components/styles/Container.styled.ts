import styled from "styled-components";

interface Props {
  $bg: string;
}

export const Container = styled.section<Props>`
  min-height: 100vh;
  background-color: ${({ $bg }) => $bg};
`;
