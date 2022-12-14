import styled from 'styled-components'

export const CalendarStyle = styled.section`

    display: grid;
    grid-template-rows:  1fr repeat(5, 1fr);
    grid-template-columns:  repeat(7, 1fr);


    background-color: white;
    padding: '';

    border-radius: '';
    box-shadow: 0px 10px 19px 0px #3c3c3c;
`

export const DaysInWeekDiv = styled.div`

    display: flex;
    text-align: center;
    align-items: center;

    font-weight: bold;

    padding: 15px;
    background-color: ${props => props.theme.colors.dayInWeekBackground};
    border: '';

`