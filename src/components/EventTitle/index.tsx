import { EventTitleStyle, EventTitleButton } from './style'

const EventTitle: React.FC<any> = ({ children , onDelete, id}) => {
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