import styled from "styled-components";

const ButtonStyled = styled.button`
  border-radius: 3rem;
  border: none;
  background-color: ${({ bg }) => bg};
  color: ${({ color }) => color};
  box-shadow: 0 5px 10px -6px #3e3c49;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  padding: 0.5rem 1.3rem;
`;

export default ButtonStyled;
