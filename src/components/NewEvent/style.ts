import styled from "styled-components";
import { ButtonStyle } from "../Button/style";

export const EventStyle = styled.div`
    min-height: 100px;
    max-height: 250px;
    width: 320px;
    background-color: ${props => props.theme.colors.eventsBg};
    border-radius: 10px;

    position: absolute;
    z-index: 20;
    top: calc(50% - 100px);
    left: calc(50% - 150px);
    overflow-y: scroll;
    

    text-align: center;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    ::-webkit-scrollbar {
        width: 5px;
    }
    
    ::-webkit-scrollbar-thumb {
        -webkit-appearance: none;
        background-color: ${props => props.theme.colors.eventsScrollBg};
        border-radius: 10px;
    }
`

export const EventHeaderStyle = styled.div`
    height: 50px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const EventInput = styled.input`
    width: 200px;
    height: 20px;

    margin: 0 10px;
    border: 1px solid black;
    border-radius: 5px;
`

export const ButtonClose = styled(ButtonStyle)`
    background-color: ${props => props.theme.colors.eventsButtonBgClose};
    padding: 7px;
    border-radius: 15px;

    color: ${props => props.theme.colors.eventsButtonColorClose};

    width: 30px;
    height: 30px;

    margin: 0 20px;
`
export const ButtonSave = styled(ButtonStyle)`
    background-color: ${props => props.theme.colors.eventsButtonBgSave};
    padding: 7px;
    border-radius: 15px;

    color: ${props => props.theme.colors.eventsButtonColorSave};
`

export const Title = styled.h3`
    margin: 0 20px;
    font-family: sans-serif;
    color: ${props => props.theme.colors.eventsTitleColor}
`