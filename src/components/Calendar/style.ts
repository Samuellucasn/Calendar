import styled from 'styled-components'

export const CalendarStyle = styled.section`

    display: grid;
    grid-template-rows:  ${props => props.theme.styles.gridRow} repeat(5, 1fr);
    grid-template-columns:  repeat(7, 1fr);


    background-color: white;
    padding: ${props => props.theme.styles.calendarPadding};

    border-radius: ${props => props.theme.styles.calendarBorderRadius};
    box-shadow: ${props => props.theme.styles.calendarBoxShadow};
`

export const DaysInWeekDiv = styled.div`

    display: flex;
    text-align: center;
    align-items: center;

    font-weight: bold;

    padding: ${props => props.theme.styles.dayInWeekPadding};
    background-color: ${props => props.theme.colors.dayInWeekBackground};
    border: ${props => props.theme.styles.dayInWeekBorder};

`