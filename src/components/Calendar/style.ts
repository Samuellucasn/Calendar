import styled from 'styled-components'

export const CalendarStyle = styled.section`

    background-color: white;

    
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: repeat(7, 1fr);
`

export const DaysInWeekDiv = styled.div`

    display: flex;
    text-align: center;
    align-items: center;

    height: 50px;

    padding: 5px;
    background-color: green;
    border: 1px solid black;

`