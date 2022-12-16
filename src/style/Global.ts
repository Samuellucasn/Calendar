import { createGlobalStyle} from "styled-components";

export const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        height: 100vh;

        background-image: ${props => props.theme.colors.bodyBg};
        
        font-family: ${props => props.theme.fonts.fontFamily};
        
        display: flex;
        justify-content: center;
        align-items: center;

    }

`;

export default Global
