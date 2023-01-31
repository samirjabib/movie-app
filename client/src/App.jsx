import { useProviderTheme } from "./hooks"

function App() {

  const {  handleThemeSwitch, theme  } = useProviderTheme()

  return (
    <div className="h-screen w-full flex justify-center items-center gap-4">
  
    </div>
  )
}

export default App