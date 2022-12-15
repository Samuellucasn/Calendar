import styled from "styled-components";
import { ButtonStyle } from "../Button/style";

export const HeaderStyle = styled.header`

    background-color: ${props => props.theme.colors.headerBg};
    color: ${props => props.theme.colors.headerColor};
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: small;

    border-bottom: '';
    border-radius: '';
`;

export const ButtonHeader = styled(ButtonStyle)`
    background-color: white;
    color: ${props => props.theme.colors.headerButtonColor};
    padding: 0;
    margin: 0 10px;
`