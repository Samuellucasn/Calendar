import { createGlobalStyle} from "styled-components";

export const globalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        height: 100vh;

        background-color: #a8a8a8;
        
        display: flex;
        justify-content: center;
        align-items: center;
    }

`;

export default globalStyle
