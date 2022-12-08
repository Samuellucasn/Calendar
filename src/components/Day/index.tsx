import { DayStyle } from "./style";

interface DaysProps {
    day: any,
    onClick: () => void
}

const Days : React.FC<DaysProps> = ({ day, onClick }) => {
    return (
        <DayStyle onClick={onClick} >
            {day.value !== 'none'? day.value : ''}
            {day.event && <div>{ day.event.title }</div>}
        </DayStyle>
    )
}

export default Days