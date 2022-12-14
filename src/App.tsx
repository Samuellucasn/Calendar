import Global from "./style/Global"
import Calendar from "./components/Calendar"

import { ThemeProvider } from 'styled-components'

import defaultTheme from "./style/themes/defaultTheme"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Calendar></Calendar>
      <Global></Global>
    </ThemeProvider>
  )
}

export default App
