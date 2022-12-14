import styled from "styled-components";

export const DayStyle = styled.div`
    border: ${props => props.theme.styles.dayBorder};
    border-style: ${props => props.theme.styles.dayBorderStyle};

    text-align: ${props => props.theme.fonts.textAlignDay};

    font-weight: ${props => props.theme.fonts.fontWeight};

    height: 50px;
`

export const RedBall = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: red;
`