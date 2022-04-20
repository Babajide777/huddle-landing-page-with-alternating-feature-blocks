import styled from "styled-components";

const HeroTextStyled = styled.div`
  h1 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 2rem;
    line-height: 1.8rem;
    opacity: 0.8;
  }
  button {
    padding: 0.8rem 18%;
    margin-bottom: 3rem;
  }

  @media screen and (min-width: 481px) {
    margin-top: 4rem;
    text-align: left;
    h1 {
      padding-right: 5rem;
      margin-bottom: 1.5rem;
    }
    p {
      margin-bottom: 1.5rem;
    }
  }
`;

export default HeroTextStyled;
