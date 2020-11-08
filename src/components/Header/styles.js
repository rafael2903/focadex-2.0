import styled from 'styled-components';
import BlueBox from "../BlueBox";

export const StyledHeader = styled(BlueBox).attrs({as: "header"})`
    padding: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p.header-logo {
        color: white;
        font-family: 'Orbitron', sans-serif;
        font-weight: 500;
        display: inline-block;
        font-size: 50px;
    }
`;