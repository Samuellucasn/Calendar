import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {

        colors: {
            bodyBg: string,

            calendarBg: string,

            headerBg: string,
            headerColor: string,
            headerButtonColor: string,

            dayInWeekBg: string;
            dayInWeekColor: string,

            dayColor: string,
            dayHoverColor: string,
            dayHoverBg: string,
            dayBallBg: string,
            
            currentDayColor:string,
            currentDayBg: string,
            currentDayDivBg: string,
            
            eventsBg: string,
            eventsButtonBgClose: string,
            eventsButtonColorClose: string,
            eventsButtonBgSave: string,
            eventsButtonColorSave: string,
            eventsTitleColor: string,

            titleEventButtonBg: string,
            titleEventsButtonColor: string,
        },

        fonts: {
            fontFamily: string,

            fontWeight: string,
        }
    }
}