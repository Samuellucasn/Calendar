import { useState } from 'react'
import { EventStyle, EventHeaderStyle, EventInput, ButtonClose, ButtonSave} from './style'

import Button from '../Button'

const EventModal: React.FC<any> = ({ onSave, onClose }) => {
    const [title, setTitle] = useState<string>()
    const [error, setError] = useState(false)

    return (
        <EventStyle>   
            <EventHeaderStyle>
                <h3>Event mark</h3>

                <ButtonClose onClick={onClose}>X</ButtonClose>
            </EventHeaderStyle>


            <EventInput 
                type={'text'}
                value={title}
                onChange={(e:any) => { setTitle(e.target.value)} }
            />
            
            <ButtonSave
                onClick={() => {
                    if (title) {
                        setError(false);
                        onSave(title);
                    } else {
                        setError(true);
                    }
                }}
            >Insert</ButtonSave>

        </EventStyle>
    )
}

export default EventModal