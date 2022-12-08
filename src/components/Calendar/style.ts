import styled from 'styled-components'

export const CalendarStyle = styled.section`

    display: grid;
    grid-template-rows:  20px repeat(5, 1fr);
    grid-template-columns:  repeat(7, 1fr);

    background-color: white;
    padding: 10px;
`

export const DaysInWeekDiv = styled.div`

    display: flex;
    text-align: center;
    align-items: center;

    padding: 10px;
    background-color: ${props => props.theme.colors.dayInWeekBackground};
    border: ${props => props.theme.styles.borderDayInWeek};

`