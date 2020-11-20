import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Archivo, Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    

    main {
        min-height: calc(100vh - 150px);
        width: 85vw;
        max-width: 1100px;
        margin: 30px auto 0 auto;
        position: relative;
        text-align: center;

    }

    main p.loading {
        font-size: 20px;
        padding-top: 30%;
        margin-top: 30px;
    }

    @media(max-width: 530px) {

        main {
            width: 90vw;
        }
    }
`;