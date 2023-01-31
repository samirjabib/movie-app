import { useProviderTheme } from "./hooks"

function App() {

  const {  handleThemeSwitch  } = useProviderTheme()

  return (
    <div className="h-screen w-full flex justify-center items-center gap-4">
      <span className="w-40 bg-black text-white h-40 flex items-center justify-center dark:bg-gray-200 dark:text-black ">Hola</span>
      <span className="w-40 bg-gray-200 text-black  dark:text-white h-40 flex items-center justify-center dark:bg-black">Hola</span>
      <button className="py-4 px-12 bg-red-500 absolute mx-auto top-52 botton-0 left-0 right-0 w-32 text-center"
            onClick={handleThemeSwitch}
        >Change DARK</button>
    </div>
  )
}

export default App