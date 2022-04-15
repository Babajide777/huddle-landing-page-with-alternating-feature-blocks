import styled from "styled-components";

const ButtonStyled = styled.button`
  border-radius: 3rem;
  border: none;
  background-color: ${({ bg }) => bg};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

export default ButtonStyled;
