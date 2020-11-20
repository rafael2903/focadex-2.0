import styled from 'styled-components';

export const KindsContainer = styled.ul`
list-style: none;
display: flex;
justify-content: space-evenly;
align-items: center;
height: 30%;

`;

export const Kind = styled.li`
color: white;
display: inline-block;
font-size: ${ (props) => props.size}px;
font-weight: 400;
border-radius: 7px;
padding: 3px 5px;
text-align: center;
text-shadow: 0 0 1px #c3c3c3;
background-color: ${ ({children, backgroundColors}) => backgroundColors[children]};

    
`;