import { Route, Routes } from "react-router"
import { MoviesPage, SeriesPage } from "../pages"

export const MediaRouter = () => {
    <>
        <Routes>
            <Route 
                element={<MoviesPage/>}
                path="movies"
            />
            <Route 
                element={<SeriesPage/>}
                path="series"
            />
        </Routes>
    </>
}