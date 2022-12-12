import styled from "styled-components";
import { ButtonStyle } from "../Button/style";

export const EventStyle = styled.div`
    width: 300px;
    background-color: ${props => props.theme.colors.eventsBackground};
    border-radius: ${props => props.theme.styles.eventsBorderRadius};

    position: absolute;
    z-index: 20;
    top: calc(50% - 100px);
    left: calc(50% - 150px);

    text-align: center;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
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
`

export const ButtonClose = styled(ButtonStyle)`
    background-color: ${props => props.theme.colors.eventsButtonBgClose};
    padding: ${props => props.theme.styles.eventsButtonPadding};
    border-radius: ${props => props.theme.styles.eventsButtonBorderRadius};

    font-weight: ${props => props.theme.styles.eventsButtonWeight};

    width: 30px;
    height: 30px;

    margin: 0 20px;
`
export const ButtonSave = styled(ButtonStyle)`
    background-color: ${props => props.theme.colors.eventsButtonBgSave};
    padding: ${props => props.theme.styles.eventsButtonPadding};
    border-radius: ${props => props.theme.styles.eventsButtonBorderRadius};

    font-weight: ${props => props.theme.styles.eventsButtonWeight};
    color: white;
`

export const Title = styled.h3`
    margin: 0 20px;
    font-family: sans-serif;
`