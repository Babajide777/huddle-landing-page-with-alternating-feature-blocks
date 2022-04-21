import styled from "styled-components";

const ProfileStyled = styled.div`
  box-shadow: 0 0 10px #ccc;
  border-radius: 20px;
  padding: 4rem 2.2rem;
  margin-bottom: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 550px;
  justify-content: space-between;
  div {
    margin-top: -50px;
  }
  h2 {
    margin-bottom: 1rem;
  }
  p {
    opacity: 0.6;
  }

  @media screen and (min-width: ${({ theme }) => theme.mobile}) {
    padding-left: 5rem;
    flex-direction: row;
    gap: 8rem;
    height: 450px;
    div {
      margin-top: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: left;
    }
  }
`;

export default ProfileStyled;
