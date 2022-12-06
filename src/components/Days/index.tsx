import { DaysStyle } from "./style";

interface DaysProps {
    day: any,
    onClick: () => void
}

const Days : React.FC<DaysProps> = ({ day, onClick }) => {
    return (
        <DaysStyle onClick={onClick} >
            {day.value !== 'none'? day.value : ''}
            {day.event && <div>{ day.event.title }</div>}
        </DaysStyle>
    )
}

export default Days