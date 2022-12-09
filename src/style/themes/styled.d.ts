import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

    colors: {
        bodyBackground: string,

        headerBackground: string,
        headerColor: string,
        headerButtonBackground: string,

        dayInWeekBackground: string;
        dayInWeekBackgroundWeekend: string,
        
        eventsBackground: string,
        eventsButtonBgClose: string,
        eventsButtonBgSave: string,
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
        headerButtonPadding: string,

        dayBorder: string,
        dayBorderStyle: string,

        dayInWeekBorder: string,
        dayInWeekPadding: string,
        
        eventsButtonWeight: string,
        eventsButtonPadding: string,
    }
    }
}