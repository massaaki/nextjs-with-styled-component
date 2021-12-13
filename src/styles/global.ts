import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
	--gray-900: #181b23;
  --gray-50: #eeeef2;
	--blue-200: #896ef4;
	--blue-100: #66cbff;
	--blue-50: #00ffff;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }

    @media(max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--gray-900);
    color: var(--gray-50);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style-type: none;
  }
`;