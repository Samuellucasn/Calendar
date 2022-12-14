import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {

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
        }
    }
}