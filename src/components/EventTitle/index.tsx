import { EventTitleStyle, EventTitleButton } from './style'

const EventTitle: React.FC<any> = ({ children , onClick}) => {
    return (
        <EventTitleStyle>{children}
        
        <EventTitleButton
            onClick={() => {}}
        >X</EventTitleButton>
        </EventTitleStyle>
    )
}

export default EventTitle