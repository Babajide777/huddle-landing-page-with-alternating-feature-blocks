import styled from "styled-components";
import bg from "../../assets/images/bg-hero-mobile.svg";

const HeaderStyled = styled.header`
  padding-top: 2rem;
  background-image: url(${bg});
  background-color: ${({ theme }) => theme.color.veryPaleCyan};
  padding-bottom: 2rem;
`;

export default HeaderStyled;
