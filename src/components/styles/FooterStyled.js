import styled from "styled-components";

const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.color.veryDarkCyan};
  color: ${({ theme }) => theme.color.white};
  padding-top: 8rem;
  padding-left: 1rem;
  padding-bottom: 3rem;
  padding-right: 1rem;
  .logo {
    width: 50%;
    filter: brightness(0) invert(1);
    margin-bottom: 2rem;
  }
  img {
    width: 5%;
  }
  ul {
    list-style: none;
  }
  @media screen and (min-width: 481px) {
    padding-left: 5%;
    padding-right: 5%;
    .logo {
      width: 12%;
    }
    div {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export default FooterStyled;
