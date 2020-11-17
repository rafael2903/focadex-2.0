import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Archivo&display=swap');

    *{
        margin: 0;
        padding: 0;
        font-family: 'Archivo', sans-serif;
        box-sizing: border-box;
        //font-family: Archivo, Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    main {
        min-height: 100vh;
        width: 80vw;
        max-width: 1024px;
        margin: 0 auto;
    }

    @media(max-width: 530px) {

        main {
            width: 90vw;
        }
    }
`;