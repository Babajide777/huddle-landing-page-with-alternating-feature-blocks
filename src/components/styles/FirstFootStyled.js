import styled from "styled-components";

const FirstFootStyled = styled.div`
  div {
    display: flex;
    gap: 1rem;
    margin-bottom: 3rem;

    p {
      font-size: 1rem;
    }
  }
  div:nth-of-type(1) {
    img {
      width: 10%;
      height: 5%;
    }
  }
  @media screen and (min-width: 481px) {
    display: flex;
    flex-direction: column;
    div {
      justify-content: flex-start;
      align-items: flex-start;
    }

    div:nth-of-type(1) {
      img {
        width: 8%;
        height: 30%;
      }
    }

    div:nth-of-type(1) {
      p {
        width: 20rem;
      }
    }
  }
`;

export default FirstFootStyled;
