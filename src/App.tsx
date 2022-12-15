import Global from "./style/Global"
import Calendar from "./components/Calendar"

import { ThemeProvider } from 'styled-components'

import defaultTheme from "./style/themes/defaultTheme"
import darkTheme from "./style/themes/darkTheme"
import colorTheme from "./style/themes/colorTheme"

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Calendar></Calendar>
      <Global></Global>
    </ThemeProvider>
  )
}

export default App
