import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root{
    --mainBackground: rgb(116,66,233);
    --mainGradientBackground: linear-gradient(90deg, rgba(116,66,233,1) 0%, rgba(152,59,240,1) 50%, rgba(180,53,244,1) 100%);
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html{
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-family: 'Smooch', cursive;
    font-family: 'Poppins', sans-serif;
    @media (max-width:1280px) {
      font-size: 14px;
    }
    @media (max-width:600px) {
      font-size: 12px;
    }
  }
  body {
    background-color: ${(props) => (props.darkMode ? '#30333d' : '#fff')};
    color: ${(props) => (props.darkMode ? '#fff' : '#30333d')};
    overflow: hidden;
    width: 100%;
    height: 100vh;
    
  }

  img{
    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8;
  }
  

  /* width */
  ::-webkit-scrollbar {
    width: 3px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--mainBackground);
    background: var(--mainGradientBackground);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--mainBackground);
  }
`;

export default GlobalStyle;
