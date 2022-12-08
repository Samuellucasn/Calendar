import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

    colors: {
        bodyBackground: string,

        headerBackground: string,

        dayInWeekBackground: string;
    },

    fonts: {
        fontFamily: string,

        textAlignDay: string,
    },

    styles: {
        borderDay: string,
        borderStyleDay: string,

        borderDayInWeek: string,
    }
    }
}