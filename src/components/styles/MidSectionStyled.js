import styled from "styled-components";

const MidSectionStyled = styled.section`
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 4rem;
  padding-bottom: 2rem;

  @media screen and (min-width: 481px) {
    padding-top: 8rem;
    padding-left: 6rem;
    padding-right: 6rem;

    div:first-of-type {
      img {
        order: 2;
      }
    }

    div:last-of-type {
      img {
        order: 2;
      }
    }

    /* div:nth-last-child() {
      img {
        order: 2;
      }
    } */

    /* div:nth-of-type(3) {
    } */
  }
`;

export default MidSectionStyled;
