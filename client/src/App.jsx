import { BrowserRouter } from "react-router-dom"
import { useProviderTheme } from "./hooks"
import { AppRouter } from "./routes"

function App() {

  const {  handleThemeSwitch, theme  } = useProviderTheme()

  return (
    <div className="h-screen w-full flex justify-center items-center gap-4">
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </div>
  )
}

export default App