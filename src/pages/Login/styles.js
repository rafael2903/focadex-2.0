import styled from 'styled-components';

export const Container = styled.div`

    background-color: #EF4444;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        height: 35vh;
        width: 100%;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;

    }

    h1{
        color: white;
        margin-top: 20px;
        font-weight: normal;
        font-size: 38px;
    }

    @media(max-width: 450px) {

        font-size: 20px;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center
    }
`;

export const LoginInput = styled.input`
    font-size: 24px;
    padding: 5px 10px;
    border-radius: 5px;
    margin: 30px 10px 0 10px;
    max-width: 85vw;

    :focus{
        outline: none
    }

    @media(max-width: 450px) {
        font-size: 20px;
    }
`;

export const LoginButton = styled.button`
    background-color: #2D70B7;
    color: #FFF;
    outline: none;
    border: none;
    font-size: 20px;
    padding: 5px 0px;
    width: 30%;
    margin-top: 20px;
    border-radius: 5px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
    border: 2px solid #3179c5;

    :hover{
        background-color: #4D90D7;
        cursor: pointer;
    }

    @media(max-width: 450px) {
        font-size: 17px;
    }
`;