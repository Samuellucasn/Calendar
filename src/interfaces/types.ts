import React, { ReactNode } from 'react'

export interface daysArray {
    day: string | number,
    event: Object | undefined | null,
    isCurrentDay: boolean,
    date: string
}

export interface events { 
    title: string
    date: string
}

export interface CalendarHeaderProps {
    children: React.ReactNode,
    onNext: React.MouseEventHandler<HTMLButtonElement>,
    onBack: React.MouseEventHandler<HTMLButtonElement>
}

export interface DaysProps {
    day: daysArray,
    onClick: React.MouseEventHandler<HTMLDivElement>
}

export interface EventTitleProps {
    children: ReactNode
    onDelete: (e: number) => void
    id: number
}

export interface NewEventsProps {
    onSave: (e:string) => void,
    onClose: React.MouseEventHandler<HTMLButtonElement>,
    onDelete: (e: number) => void,
    eventsArray: Object[]
}

export interface ButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    border?: string,
    color?: string,
}