import styled from "styled-components";

const ExtraStyled = styled.div`
  margin-left: 5%;
  margin-right: 5%;
  box-shadow: 0 0 10px #ccc;
  height: 180px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  top: 4rem;
  z-index: 2;
  background-color: ${({ theme }) => theme.color.white};
  h2 {
    font-size: 1.2rem;
  }

  button {
    padding: 1rem 3rem;
  }
`;

export default ExtraStyled;
