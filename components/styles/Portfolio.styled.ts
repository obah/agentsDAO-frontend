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

    & > li {
      font-size: 4rem;
      font-weight: 800;
    }

    & li {
      transition: all 300ms ease-in;
      position: relative;

      & img {
        position: absolute;
        top: calc(var(--y) -5px);
        left: calc(var(--x) -5px);
        transform: translate(-50%, -50%) scale(1);
        /* opacity: 0; */
        transition: 200ms;
        z-index: -2;
      }
    }

    &:hover li {
      opacity: 0.5;
    }

    & li:hover {
      opacity: 1;
    }
  }
`;

// export const StyledPortfolio = styled.div`
//   .main-slider {
//     position: relative;
//     width: 100vw;
//     height: 100vh;
//     background: ${theme.colors.default};

//     .swiper-slide {
//       position: relative;
//       width: 100%;
//       height: 100%;
//       background: none;

//       img {
//         position: absolute;
//         bottom: 20%;
//         right: 30%;
//         height: 80vh;
//         object-fit: contain;
//       }
//     }
//   }

//   .text {
//     position: absolute;
//     left: 53%;
//     bottom: 15%;

//     font-weight: 700;
//     font-size: 2rem;
//   }

//   .swiper-button-next::after,
//   .swiper-button-prev::after {
//     /* display: none; */
//   }
// `;

export const NftCard = styled.div`
  width: 50% p {
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 1rem;
  }
`;
