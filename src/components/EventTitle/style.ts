import styled from "styled-components";
import Button from "../Button";

export const EventTitleStyle = styled.div`
    width: 250px;

    background-color: white;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid black;
`

export const EventTitleButton = styled(Button)`
    background-color: blue;
`