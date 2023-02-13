import { Suspense } from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import { MainLayout, Loading} from "../components"
import { HomePage, MediaRouter  } from "../features"



export const AppRouter = () => {

    return(
        <>
        <Suspense fallback={<Loading/>}>
            <Routes>
                <Route
                    path="/"
                    element={<MainLayout/>}
                >
                    <Route
                        index
                        path="/"
                        element={<HomePage/>}
                    />
                    <Route
                        path="/media/*"
                        element={<MediaRouter/>}
                    />

                    <Route 
                        path='/*' 
                        element={ <Navigate to='/'/>}
                    />
                                               
                </Route>
            </Routes>
        </Suspense>
        </>
    )
}