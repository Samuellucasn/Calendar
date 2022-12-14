import React from "react";
import { DayStyle, RedBall } from "./style";
import { DaysProps } from "../../interfaces/types";

const Days : React.FC<DaysProps> = ({ day, onClick }) => {
    return (
    <>
        { day.isCurrentDay? 
            <DayStyle onClick={onClick} >
                X
            </DayStyle>
            :
            <DayStyle onClick={onClick} >
                {day.day !== 'none'? day.day : ''}
                {day.event && <RedBall/>}
            </DayStyle>
        }
    </>
    )
}

export default Days 