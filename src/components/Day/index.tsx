import React from "react";
import { DayStyle, RedBall } from "./style";

interface DaysProps {
    day: any,
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