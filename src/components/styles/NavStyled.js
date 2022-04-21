import styled from "styled-components";

const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 4rem;
  img {
    width: 30%;
  }

  @media screen and (min-width: ${({ theme }) => theme.mobile}) {
    img {
      width: 15%;
    }
  }
`;

export default NavStyled;
