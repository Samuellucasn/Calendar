import styled from "styled-components";

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