import { createGlobalStyle} from "styled-components";

export const globalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        height: 100vh;

        background-color: ${props => props.theme.colors.bodyBackground};
        
        font-family: ${props => props.theme.fonts.fontFamily};
        
        display: flex;
        justify-content: center;
        align-items: center;
    }

`;

export default globalStyle
