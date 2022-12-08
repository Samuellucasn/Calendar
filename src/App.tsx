import Global from "./style/Global"
import Calendar from "./components/Calendar"
import { ThemeProvider } from 'styled-components'
import ClassicTheme from "./style/themes/ClassicTheme"

function App() {
  return (
    <ThemeProvider theme={ClassicTheme}>
      <Calendar></Calendar>
      <Global></Global>
    </ThemeProvider>
  )
}

export default App
