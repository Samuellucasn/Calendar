import { useState } from 'react'
import { EventStyle } from './style'

import Input from '../Input'
import Button from '../Button'

const EventModal: React.FC<any> = ({ onSave, onClose }) => {
    const [title, setTitle] = useState('')
    const [error, setError] = useState(false)

    return (
        <EventStyle>   
            <Button onClick={onClose}>d</Button>
            
            <h3>Event mark</h3>

            <Input 
                value={title}
                onChange={(e:any) => { setTitle(e.target.value)} }
            /> 
            <Button onClick={onSave}>s</Button>
        </EventStyle>
    )
}

export default EventModal