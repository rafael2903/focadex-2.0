import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Archivo, Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    

    main {
        min-height: 100vh;
        width: 85vw;
        max-width: 1100px;
        margin: 0 auto;
        position: relative;
        text-align: center;
    }

    main p.loading {
        font-size: 20px;
        margin-top: 20%;
    }

    @media(max-width: 530px) {

        main {
            width: 90vw;
        }
    }
`;