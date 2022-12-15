import styled from "styled-components";

export const DayStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    font-weight: ${props => props.theme.fonts.fontWeight};

    height: 50px;

    color: ${props => props.theme.colors.dayColor};

    :hover{ 
        background-color: ${props => props.theme.colors.dayHoverBg};
        color: ${props => props.theme.colors.dayHoverColor};
        border-radius: 10px;
        width: 35px;
        height: 35px;

        cursor: pointer;
    }
`

export const CurrentDayStyle = styled(DayStyle)`
    color: ${props => props.theme.colors.currentDayColor};
    font-size: larger;

    div {
        background-color: ${props => props.theme.colors.currentDayDivBg};
    }
`

export const Ball = styled.div`
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.dayBallBg};
`