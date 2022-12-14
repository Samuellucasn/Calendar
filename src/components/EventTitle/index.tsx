import { ReactNode } from 'react'
import { EventTitleStyle, EventTitleButton } from './style'

interface EventTitle {
    children: ReactNode
    onDelete: (e: number) => void
    id: number
}

const EventTitle: React.FC<EventTitle> = ({ children , onDelete, id}) => {
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