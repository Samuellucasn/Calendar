import { CalendarStyle, DaysInWeekDiv } from './style'
import { useState, useEffect } from 'react'
import { daysArray, events } from '../../interfaces/types'
import {useDates} from '../../hooks/useDates'

import CalendarHeader from '../CalendarHeader'
import Day from '../Day'
import NewEvent from '../NewEvent'

function Calendar() {
    const [monthNav, setMonthNav] = useState(0)
    const [clicked, setClicked] = useState<string | null>()
    const [events, setEvents] = useState<events[]>(
      localStorage.getItem('events') ? 
        JSON.parse(localStorage.getItem('events') || "") : 
        []
    )

    const eventForDate = (date:string) => events.filter((v:events) => {return v.date === date})
    
    useEffect(() => {
        localStorage.setItem('events', JSON.stringify(events))
    }, [events])

    const { daysArray, dateDisplay } = useDates(events, monthNav)

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
            daysArray.map((v:daysArray, i: number) => {
                return <Day
                  key={i}
                  day={v}
                  onClick={() => {
                    if (v.day !== 'none' && !clicked) {
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
                setEvents([ ...events, { title, date: clicked}])
                setClicked(null)
            }}
            onDelete={(id:number) => {
                const eventsOut = events.filter((v:events) => {return v.date !== clicked})
                const eventsIn = events.filter((v:events) => {return v.date === clicked})
                eventsIn.splice(id, 1)
                setEvents([...eventsOut, ...eventsIn])
            }}
            />
        }
        </>
    )
}

export default Calendar