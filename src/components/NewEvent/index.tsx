import React, { useState } from 'react'
import { EventStyle, EventHeaderStyle, EventInput, ButtonClose, ButtonSave, Title} from './style'
import { NewEventsProps } from '../../interfaces/types'

import EventTitle from '../EventTitle'

const NewEvent: React.FC<NewEventsProps> = ({ onSave, onClose, onDelete, eventsArray}) => {
    const [title, setTitle] = useState('')

    return (
        <EventStyle>   
            <EventHeaderStyle>
                <Title>Event mark</Title>

                <ButtonClose onClick={onClose}>X</ButtonClose>
            </EventHeaderStyle>


            <EventInput 
                type={'text'}
                value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setTitle(e.target.value)}}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => { if (e.key === 'Enter') return onSave(title) }}
            />
            
            <ButtonSave onClick={() => {if (title) onSave(title)}}>Insert</ButtonSave>

            {
                eventsArray.map((v:any, i: number) => {
                    return <EventTitle key={i} id={i} onDelete={onDelete}>{v.title}</EventTitle>
                })
            }

        </EventStyle>
    )
}

export default NewEvent