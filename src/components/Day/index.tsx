import React from "react";
import { DayStyle, RedBall } from "./style";

interface daysArray {
    day: string | number,
    event: Object | undefined | null,
    isCurrentDay: boolean,
    date: string
}

interface DaysProps {
    day: daysArray,
    onClick: React.MouseEventHandler<HTMLDivElement>
}

const Days : React.FC<DaysProps> = ({ day, onClick }) => {
    return (<>
        <DayStyle onClick={onClick} >
            {day.day !== 'none'? day.day : ''}
            {day.event && <RedBall/>}
        </DayStyle></>
    )
}

export default Days 