import { CalendarStyle, DaysInWeekDiv } from './style'
import { useState, useEffect } from 'react'

import {useDates} from '../../hooks/useDates'

import CalendarHeader from '../CalendarHeader'
import Day from '../Day'
import NewEvent from '../NewEvent'

function Calendar() {
    const [monthNav, setMonthNav] = useState(0)
    const [clicked, setClicked] = useState<string | null>()
    const [events, setEvents] = useState(
      localStorage.getItem('events') ? 
        JSON.parse(localStorage.getItem('events') || "") : 
        []
    )

    const eventForDate = (date:any) => events.filter((v:any) => {return v.date === date})
    
    useEffect(() => {
        localStorage.setItem('events', JSON.stringify(events))
    }, [events])

    const { daysArray, dateDisplay } = useDates(events, monthNav)

    console.log(daysArray)
    return (
        <>
        <CalendarHeader 
            onNext={() => { setMonthNav(monthNav - 1) }}
            onBack={() => { setMonthNav(monthNav + 1) }}
        >{dateDisplay}</CalendarHeader>
        
        <CalendarStyle>
            <DaysInWeekDiv>Sun</DaysInWeekDiv>
            <DaysInWeekDiv>Mon</DaysInWeekDiv>
            <DaysInWeekDiv>Tue</DaysInWeekDiv>
            <DaysInWeekDiv>Wed</DaysInWeekDiv>
            <DaysInWeekDiv>Thu</DaysInWeekDiv>
            <DaysInWeekDiv>Fri</DaysInWeekDiv>
            <DaysInWeekDiv>Sat</DaysInWeekDiv>

        {
            daysArray.map((v:any, i: any) => {
                return <Day
                  key={i}
                  day={v}
                  onClick={() => {
                    if (v.value !== 'none') {
                        setClicked(v.date)
                    }
                  }}
                />
            })
        }
        </CalendarStyle>

        { clicked &&
            <NewEvent 
            eventsArray={eventForDate(clicked)}
            onClose={() => setClicked(null)}
            onSave={(title: string) => {
                setEvents([ ...events, { title, date: clicked }])
                setClicked(null)
            }}/>
        }
        </>
    )
}

export default Calendar