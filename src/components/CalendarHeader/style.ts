import styled from "styled-components";
import { ButtonStyle } from "../Button/style";

export const HeaderStyle = styled.header`

    background-color: ${props => props.theme.colors.headerBackground};
    color: ${props => props.theme.colors.headerColor};
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: small;

    border-bottom: ${props => props.theme.styles.headerBorderBottom};
    border-radius: ${props => props.theme.styles.calendarBorderRadius};
`;

export const ButtonHeader = styled(ButtonStyle)`
    background-color: ${props => props.theme.colors.headerButtonBackground};
    padding: ${props => props.theme.styles.headerButtonPadding};
`