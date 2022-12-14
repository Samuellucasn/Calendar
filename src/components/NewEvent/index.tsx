import React, { useState } from 'react'
import { EventStyle, EventHeaderStyle, EventInput, ButtonClose, ButtonSave, Title} from './style'
import EventTitle from '../EventTitle'

interface NewEvents {
    onSave: (e:string) => void,
    onClose: React.MouseEventHandler<HTMLButtonElement>,
    onDelete: (e: number) => void,
    eventsArray: Object[]
}

const NewEvent: React.FC<NewEvents> = ({ onSave, onClose, onDelete, eventsArray}) => {
    const [title, setTitle] = useState('')
    const [error, setError] = useState(false)

    return (
        <EventStyle>   
            <EventHeaderStyle>
                <Title>Event mark</Title>

                <ButtonClose onClick={onClose}>X</ButtonClose>
            </EventHeaderStyle>


            <EventInput 
                type={'text'}
                value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setTitle(e.target.value)} }
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

            {
                eventsArray.map((v:any, i: number) => {
                    return <EventTitle key={i} id={i} onDelete={onDelete}>{v.title}</EventTitle>
                })
            }

        </EventStyle>
    )
}

export default NewEvent