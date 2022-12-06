import { CalendarStyle, DaysInWeekDiv } from './style'
import CalendarHeader from '../CalendarHeader'
import EventModal from '../EventModal'
import { useState, useEffect } from 'react'
import Days from '../Days'

function Calendar() {
    const [MonthId, setMonthId] = useState(0)
    const [daysArray, setDaysArray] = useState([{}])
    const [dateDisplay, setDateDisplay] = useState('')
    const [clicked, setClicked] = useState()
    const [events, setEvents] = useState(
      localStorage.getItem('events') ? 
        JSON.parse(localStorage.getItem('events') || "") : 
        []
    )

    const eventForDate = (date:any) => events.find((e:any) => e.date === date)
    
    useEffect(() => {
        localStorage.setItem('events', JSON.stringify(events))
    }, [events])
    const date = new Date()
    const year = date.getFullYear()

    useEffect(() => {
        const daysArr = []
        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const day = date.getDate()
        const monthNumber = date.getMonth()
        const monthString = date.toLocaleString('eng', { month: 'short' })
        const weekDay = date.toLocaleString('eng', { weekday: 'long' })
        const monthDays = new Date(year, date.getMonth()+1, 0).getDate()
    
        const blockDays = weekdays.indexOf(weekDay);


        
        for (let i = 1; i <= blockDays + monthDays; i++) {
            const dayString = `${monthNumber + 1}/${i - blockDays}/${year}`

            if (i > blockDays) {
                daysArr.push({
                    value: i - blockDays,
                    event: eventForDate(dayString),
                    isCurrentDay: i - blockDays === day && MonthId === 0,
                    date: dayString
                })
            } else {
                daysArr.push({
                    value: 'none',
                    event: null,
                    isCurrentDay: false,
                    date: ''
                })
            }
        }

        setDaysArray(daysArr)

    }, [events, MonthId])

    console.log(daysArray)

    return (
        <>
        <CalendarHeader>{year}</CalendarHeader>
        
        <CalendarStyle>
        <>
            <DaysInWeekDiv>Sun</DaysInWeekDiv>
            <DaysInWeekDiv>Mon</DaysInWeekDiv>
            <DaysInWeekDiv>Tue</DaysInWeekDiv>
            <DaysInWeekDiv>Wed</DaysInWeekDiv>
            <DaysInWeekDiv>Thu</DaysInWeekDiv>
            <DaysInWeekDiv>Fri</DaysInWeekDiv>
            <DaysInWeekDiv>Sat</DaysInWeekDiv>

        {
            daysArray.map((v:any, i: any) => {
                return <Days
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
        </>
        </CalendarStyle>

        {
            /*clicked && !eventForDate(clicked) && 
            <EventModal 
                onClose={}
                onSave={title => {
                setEvents({ ...events, { title,date: clicked } })
                setClicked(null)
                }}
            />*/
        }
        </>
    )
}

export default Calendar