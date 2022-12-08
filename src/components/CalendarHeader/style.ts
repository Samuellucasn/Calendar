import styled from "styled-components";

export const HeaderStyle = styled.header`

    background-color: ${props => props.theme.colors.headerBackground};
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: small;

`;