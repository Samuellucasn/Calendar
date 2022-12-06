import { useState } from 'react'
import { EventStyle } from './style'

const EventModal: React.FC<any> = ({ onSave, onClose }) => {
    const [title, setTitle] = useState('')
    const [error, setError] = useState(false)

    return (
        <EventStyle 
          //value={title}
          onChange={(e:any) => {
            setTitle(e.target.value)
        }}>

        </EventStyle>
    )
}

export default EventModal