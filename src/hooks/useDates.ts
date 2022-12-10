import React, { useEffect, useState } from "react";

export const useDates: (events: any, monthNav: number) => { daysArray: Object[]; dateDisplay: string; } = (events, monthNav) => {

    const [daysArray, setDaysArray] = useState<Object[]>([])
    const [dateDisplay, setDateDisplay] = useState('')

    const eventForDate = (date:string) => events.find((v:any) => v.date === date)

    useEffect(() => {
        const date = new Date()
        
        if (monthNav !== 0) date.setMonth(new Date().getMonth() + monthNav)

        const year = date.getFullYear()
        const monthNumber = date.getMonth()
        const monthString = date.toLocaleString('eng', { month: 'long' })
        const weekDay = date.getDay()
        
        const dateArray = []

        const monthDays = new Date(year, monthNumber+1, 0).getDate()

        const blockDays = weekDay -1

        console.log(blockDays)
        
        
        for (let i = 1; i <= blockDays + monthDays; i++) {
            const dayString = `${monthNumber + 1}/${i - blockDays}/${year}`

            if (i > blockDays) {
                dateArray.push({
                    value: i - blockDays,
                    event: eventForDate(dayString),
                    isCurrentDay: i - blockDays === date.getDate() && monthNav === 0,
                    date: dayString
                })
            } else {
                dateArray.push({
                    value: 'none',
                    event: null,
                    isCurrentDay: false,
                    date: ''
                })
            }
        }

        setDaysArray(dateArray)
        setDateDisplay(monthString + ' ' + year)

    }, [events, monthNav])

    return {
        daysArray,
        dateDisplay
    }
}