import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {

        colors: {
            bodyBg: string,

            headerBg: string,
            headerColor: string,
            headerButtonColor: string,

            dayInWeekBg: string;
            dayInWeekBgWeekend: string,

            dayHoverBg: string,
            
            currentDayColor:string,
            currentDayBg: string,
            currentDayDivBg: string,
            
            eventsBg: string,
            eventsButtonBgClose: string,
            eventsButtonBgSave: string,

            titleEventButtonBg: string,
            titleEventBallBg: string,
        },

        fonts: {
            fontFamily: string,

            fontWeight: string,
        }
    }
}