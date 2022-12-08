import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

    colors: {
        bodyBackground: string,

        headerBackground: string,
        headerColor: string,

        dayInWeekBackground: string;
    },

    fonts: {
        fontFamily: string,

        fontWeight: string,

        textAlignDay: string,
    },

    styles: {
        gridRow: string,

        calendarPadding: string,
        calendarBorderRadius: string,
        calendarBoxShadow: string,

        headerBorderBottom: string,

        dayBorder: string,
        dayBorderStyle: string,

        dayInWeekBorder: string,
        dayInWeekPadding: string,
    }
    }
}