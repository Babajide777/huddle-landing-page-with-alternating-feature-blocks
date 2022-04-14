import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Poppins:wght@600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
    font-size: ${({ theme }) => theme.fontSize.p};
    font-weight: ${({ theme }) => theme.fontWeight.small};
    font-family: ${({ theme }) => theme.fontFamily.poppins};
}

img{
    width: 100%
}

`;

export default GlobalStyles;
