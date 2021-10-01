import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle` 
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira Code', sans-serif; 
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text}
    width: 100%;
    height: 100%; 
  }

  input, button {
    border: 0;
    outline: none;
  }

  .container {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.text}; 
    
    .box {
      width: 620px;
      
    }
    
    
    @media only screen and (max-width: 768px) {
      body {
        font-size: 80%;
      }
      
      .box {
        padding: 2rem;
      }
    }
`;