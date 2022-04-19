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
`;

export default FirstFootStyled;
