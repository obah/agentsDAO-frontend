import styled from "styled-components";
import { theme } from "./theme";

export const AnimatedPorfolio = styled.div`
  width: 100%;
  height: 100%;

  ul {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    gap: 2rem;
  }

  ul li {
    position: relative;
    font-size: 4rem;
    font-weight: 800;
    text-transform: uppercase;
    transition: 0.5s;
  }

  ul:hover li {
    opacity: 0.2;
  }

  ul li:hover {
    opacity: 1;
  }

  ul li img {
    position: absolute;
    top: var(--y);
    left: var(--x);
    width: 400px;
    object-fit: contain;
    transform-origin: center;
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
    transition: 0.2s;
    z-index: -2;
    pointer-events: none;
  }

  ul li:hover img {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }

  ul li::before {
    content: attr(data-text);
    position: absolute;
    top: var(--y);
    left: var(--x);
    width: 100%;
    transform: translate(-50%, -50%);
    opacity: 0;
    pointer-events: none;
    font-size: 8vw;
    transition: 0.25s;
    z-index: -1;
    color: transparent;
    -webkit-text-stroke: 1px #fff;
  }

  ul li:hover::before {
    opacity: 1;
  }
`;

export const NftCard = styled.div`
  width: 50%;

  p {
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 1rem;
  }
`;
