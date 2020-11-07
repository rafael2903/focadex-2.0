import styled from 'styled-components';
import BlueBox from "../BlueBox";

export const StyledHeader = styled(BlueBox).attrs({as: "header"})`
    padding: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;