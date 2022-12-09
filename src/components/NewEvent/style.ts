import styled from "styled-components";
import { ButtonStyle } from "../Button/style";

export const EventStyle = styled.div`
    height: 100px;
    width: 300px;
    background-color: pink;

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
    padding: ${props => props.theme.styles.eventsButtonPadding}
`
export const ButtonSave = styled(ButtonStyle)`
    background-color: ${props => props.theme.colors.eventsButtonBgSave};
    padding: ${props => props.theme.styles.eventsButtonPadding};
`