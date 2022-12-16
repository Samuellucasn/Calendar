import styled from "styled-components";
import { ButtonProps } from "../../interfaces/types";

export const ButtonStyle = styled.button<ButtonProps>`
    border: ${props => props.border? props.border : 'transparent'};
    background-color: ${props => props.color? props.color : 'transparent'};

    min-width: 20px;
    min-height: 20px;

    font-weight: normal;
    cursor: pointer;
    
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Wrapper = styled.div`
    width: 100%;

    margin-bottom: 40px;

    display: flex;
    justify-content: space-evenly;
`
