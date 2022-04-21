import styled from "styled-components";

const MidSectionStyled = styled.section`
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 4rem;
  padding-bottom: 2rem;

  @media screen and (min-width: ${({ theme }) => theme.mobile}) {
    padding-top: 8rem;
    padding-left: 6rem;
    padding-right: 6rem;

    div:first-of-type,
    div:last-of-type {
      img {
        order: 2;
      }
    }
  }
`;

export default MidSectionStyled;
