import { HeaderStyle, ButtonHeader } from './style'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { CalendarHeaderProps } from '../../interfaces/types'

const CalendarHeader: React.FC<CalendarHeaderProps> = ({children, onNext, onBack}) => {
    return (
        <>
        <HeaderStyle>
            <ButtonHeader onClick={ onNext }><FaChevronLeft></FaChevronLeft></ButtonHeader>
                <h1>{ children }</h1>
            <ButtonHeader onClick={ onBack }><FaChevronRight></FaChevronRight></ButtonHeader>
        </HeaderStyle>
        </>
    ) 
}

export default CalendarHeader