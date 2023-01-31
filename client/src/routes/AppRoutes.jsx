import { Routes, Route } from "react-router-dom"

import { PageWrapper, MainLayout} from "../components"


export const AppRouter = () => {



    return(
        <>
            <Routes>
                <Route 
                    path="/"
                    element={<MainLayout/>}
                >
                    
                </Route>
            </Routes>
        </>
    )
}