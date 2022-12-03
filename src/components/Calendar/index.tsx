import {a} from './style'
import Header from '../Header'
import { useState } from 'react'

function Calendar() {
    const [dayMonth, setDayMonth] = useState([])

    const date = new Date()
    const year = date.getFullYear()
    const month = date.toLocaleString('eng', { month: 'short' })
    const weekDay = date.toLocaleString('eng', {weekday: 'short'})
    const day = new Date(year, date.getMonth()+1, 0).getDate()

    return (
        <>
        <Header></Header>
        <h1>{year}</h1>
        <h1>{month}</h1>
        <h1>{day}</h1>
        <h1>{weekDay}</h1>
        {
            
        }
        </>
    )
}

export default Calendar