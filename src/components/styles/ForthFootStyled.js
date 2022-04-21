import styled from "styled-components";

const ForthFootStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  .socials {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  div div {
    border: 1px solid ${({ theme }) => theme.color.white};
    padding: 0.4rem;
    border-radius: 50%;
  }

  span {
    font-size: 0.9rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.mobile}) {
    .socials {
      justify-content: flex-start;
    }
  }
`;

export default ForthFootStyled;
