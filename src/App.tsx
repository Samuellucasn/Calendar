import { useState } from 'react'
import Global from "./style/Global"
import { Wrapper } from './components/Button/style'
import Calendar from "./components/Calendar"
import Button from './components/Button'

import { ThemeProvider } from 'styled-components'

import defaultTheme from "./style/themes/defaultTheme"
import darkTheme from "./style/themes/darkTheme"
import colorTheme from "./style/themes/colorTheme"

function App() {
  const [theme, setTheme] = useState(defaultTheme)

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Button onClick={() => { if(theme !== defaultTheme) setTheme(defaultTheme) }} border={'1px solid black'} color={'white'}/>
        <Button onClick={() => { if(theme !== darkTheme) setTheme(darkTheme) }} border={'1px solid white'} color={'black'}/>
        <Button onClick={() => { if(theme !== colorTheme) setTheme(colorTheme) }} border={'1px solid white'} color={'#d287a3'}/>
      </Wrapper>
      <Calendar/>
      <Global/>
    </ThemeProvider>
  )
}

export default App
