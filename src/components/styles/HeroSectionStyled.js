import styled from "styled-components";

const HeroSectionStyled = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2rem;
  padding-right: 2rem;
  @media screen and (min-width: 481px) {
    flex-direction: row;
    gap: 3rem;
  }
`;

export default HeroSectionStyled;
