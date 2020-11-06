import { createGlobalStyle } from "styled-components";

import "./colors.css";
import "./typography.css";

const GlobalStyles = createGlobalStyle`
 
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}

 :root{
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; 
    font-family: 'Nunito', sans-serif;
    scroll-behavior: smooth;
    html {
    
    } 
    html,
    body{
        height: 100vh;
    }
    body{
        color:var(--white);
        background-color: var(--grey);
    }
    
    textarea,
    input, 
    button{
        font-family:600 var(--regular) 'Nunito', sans-serif;
    }
}
`;

export default GlobalStyles;
