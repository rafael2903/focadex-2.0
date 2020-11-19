import styled from 'styled-components';

export const Container = styled.div`
    background-color: #EF4444;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        margin-top: 50px;
    }

    h1{
        color: white;
        margin-top: 30px;
    }
`;

export const LoginInput = styled.input`
    font-size: 26px;
    padding: 5px 10px;
    border-radius: 5px;
    margin: 30px 40px 0px 40px;
    max-width: 280px;
    :focus{
        outline: none
    }
`;

export const LoginButton = styled.button`
    background-color: #2D70B7;
    color: #FFF;
    outline: none;
    border: none;
    font-size: 26px;
    padding: 10px 20px;
    margin-top: 20px;
    border-radius: 5px;
    box-shadow: 2px 2px 5px black;
    
    :hover{
        background-color: #4D90D7;
        cursor: pointer;
    }
`;