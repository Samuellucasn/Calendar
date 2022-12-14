import { EventTitleStyle, EventTitleButton } from './style'
import { EventTitleProps } from '../../interfaces/types'

const EventTitle: React.FC<EventTitleProps> = ({ children , onDelete, id}) => {
    return (
    <>
        <EventTitleStyle>
            {children}        
        </EventTitleStyle>

        <EventTitleButton
            onClick={() => onDelete(id)}
        >X</EventTitleButton>
    </>
    )
}

export default EventTitle