import Global from "./style/Global"
import Calendar from "./components/Calendar"

import { ThemeProvider } from 'styled-components'

import defaultTheme from "./style/themes/defaultTheme"
import orangeTheme from "./style/themes/orangeTheme"

function App() {
  return (
    <ThemeProvider theme={orangeTheme}>
      <Calendar></Calendar>
      <Global></Global>
    </ThemeProvider>
  )
}

export default App
