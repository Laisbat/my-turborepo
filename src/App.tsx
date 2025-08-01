import './App.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>
  )
}

export default App
