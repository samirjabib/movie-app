import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./routes"

function App() {


  return (
    <div className="">
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </div>
  )
}

export default App