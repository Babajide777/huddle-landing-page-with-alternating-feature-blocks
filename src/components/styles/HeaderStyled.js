import styled from "styled-components";
import bg from "../../assets/images/bg-hero-mobile.svg";
import bg2 from "../../assets/images/bg-hero-mobile.svg";

const HeaderStyled = styled.header`
  padding-top: 2rem;
  background-image: url(${bg});
  background-color: ${({ theme }) => theme.color.veryPaleCyan};
  padding-bottom: 2rem;
  @media screen and (min-width: ${({ theme }) => theme.mobile}) {
    padding-left: 2rem;
    padding-right: 2rem;
    background-image: url(${bg2});
  }
`;

export default HeaderStyled;
