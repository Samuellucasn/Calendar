import styled from "styled-components";
import {ButtonStyle} from "../Button/style";

export const EventTitleStyle = styled.div`
    min-height: 20px;
    width: 250px;

    background-color: white;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid black;
    padding: 2px;
`

export const EventTitleButton = styled(ButtonStyle)`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid black;

    margin: 0 5px;

    background-color: ${props => props.theme.colors.titleEventButtonBg}
`