import styled from 'styled-components';
import BlueBox from "../BlueBox";

export const StyledHeader = styled(BlueBox).attrs({as: "header"})`
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    p.header-logo {
        color: white;
        font-family: 'Orbitron', sans-serif;
        font-weight: 500;
        display: inline-block;
        font-size: 48px;
    }

    @media(max-width: 530px) {

    p.header-logo {
    
        font-size: 42px;
    }
}
`;