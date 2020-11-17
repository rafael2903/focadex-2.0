import styled from 'styled-components';


export const PagesContainer = styled.div`
    width: 180px;
    margin: 50px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Page = styled.div`
    color: black;
    background-color: #d3d3d3;
    font-size: 16px;
    cursor: pointer; 
    width: 30px;
    height: 30px;
    border-radius: 20%;
    display: flex;
    justify-content: center;
    align-items: center;

    &.current {
        background-color: #0152cc;
        color: white;
    }

    :hover {
        border: 2px solid #0152cc;
    }

`;