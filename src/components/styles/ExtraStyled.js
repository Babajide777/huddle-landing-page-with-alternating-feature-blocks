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

  @media screen and (min-width: ${({ theme }) => theme.mobile}) {
    margin-left: 25%;
    margin-right: 25%;
    height: 220px;
    h2 {
      font-size: 1.5rem;
    }
    button {
      padding: 1rem 4rem;
    }
  }
`;

export default ExtraStyled;
