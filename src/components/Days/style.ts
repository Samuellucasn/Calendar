import styled from "styled-components";

export const DaysStyle = styled.div`
    border: ${props => props.theme.styles.borderDay};
    border-style: ${props => props.theme.styles.borderStyleDay};

    text-align: ${props => props.theme.fonts.textAlignDay};

    height: 50px;
`