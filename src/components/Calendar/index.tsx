import { CalendarStyle, DaysInWeekDiv } from './style'
import CalendarHeader from '../CalendarHeader'
import EventModal from '../EventModal'
import { useState, useEffect } from 'react'
import Day from '../Day'

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

    const eventForDate = (date:any) => events.find((v:any) => v.date === date)
    
    useEffect(() => {
        localStorage.setItem('events', JSON.stringify(events))
    }, [events])

    const [monthString, setMonthString] = useState('')
    const [year, setYear] = useState(Number)

    useEffect(() => {
        const date = new Date()
        
        if (MonthId !== 0) date.setMonth(new Date().getMonth() + MonthId)
        const year = date.getFullYear()
        const monthString = date.toLocaleString('eng', { month: 'long' })
        
        const daysArr = []
        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const day = date.getDate()
        const monthNumber = date.getMonth()
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
        setMonthString(monthString)
        setYear(year)

    }, [events, MonthId])

    console.log(daysArray)

    return (
        <>
        <CalendarHeader 
            onNext={() => { setMonthId(MonthId - 1) }}
            onBack={() => { setMonthId(MonthId + 1) }}
        >{monthString} {year}</CalendarHeader>
        
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