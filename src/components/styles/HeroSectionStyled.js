import styled from "styled-components";

const HeroSectionStyled = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2rem;
  padding-right: 2rem;
  @media screen and (min-width: ${({ theme }) => theme.mobile}) {
    gap: 5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;

export default HeroSectionStyled;
