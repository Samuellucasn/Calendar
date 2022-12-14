import styled from "styled-components";

export const DayStyle = styled.div`
    border: '';
    border-style: '';

    text-align: center;

    font-weight: ${props => props.theme.fonts.fontWeight};

    height: 50px;
`

export const RedBall = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: red;
`