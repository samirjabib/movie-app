import { BrowserRouter } from "react-router-dom"
import { useProviderTheme } from "./hooks"
import { AppRouter } from "./routes"

function App() {

  const {  handleThemeSwitch, theme  } = useProviderTheme()

  return (
    <div className="">
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </div>
  )
}

export default App