import { createGlobalStyle } from 'styled-components';
import 'leaflet/dist/leaflet.css';
import './colors.css';
import './typography.css';

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
   
    html,
    body{
        height: 100vh;
    }
    body{
        color:var(--white);
        background-color: var(--grey);
    }
    p{
      font-size:1.8rem;
    }
    textarea,
    input, 
    button{
        font-family:600 2.4rem 'Nunito', sans-serif;
    }
}

.leaflet-container {
  border-bottom: 0.1rem solid #dde3f0;
  border-radius: 2rem;

  
  .leaflet-control-attribution a{
    display:none;
  }
}
`;

export default GlobalStyles;
