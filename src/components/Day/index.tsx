import React from "react";
import { DayStyle, CurrentDayStyle, Ball } from "./style";
import { DaysProps } from "../../interfaces/types";

const Days : React.FC<DaysProps> = ({ day, onClick }) => {
    return (
    <>
        { day.isCurrentDay? 
            <CurrentDayStyle onClick={onClick} >
                {day.day}
                {day.event && <Ball/>}
            </CurrentDayStyle>
            :
            <DayStyle onClick={onClick} >
                {day.day !== 'none'? day.day : ''}
                {day.event && <Ball/>}
            </DayStyle>
        }
    </>
    )
}

export default Days 