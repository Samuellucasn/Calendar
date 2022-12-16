import styled from 'styled-components'

export const CalendarStyle = styled.section`

    display: grid;
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns:  repeat(7, 1fr);
    justify-items: center;
    align-items: center;


    background-image: ${props => props.theme.colors.calendarBg};

    @media (max-width: 455px) {
        grid-template-rows: repeat(5, 1fr);
        grid-template-columns:  repeat(7, minmax(45px, auto)) ;
    }
`

export const DaysInWeekDiv = styled.div`

    display: flex;
    text-align: center;
    align-items: center;

    font-weight: bold;

    padding: 15px;
    color: ${props => props.theme.colors.dayInWeekColor};
`

