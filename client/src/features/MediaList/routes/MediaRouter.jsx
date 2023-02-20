import { Route, Routes } from "react-router";
import { MoviesPage, SeriesPage, DetailMediaPage } from "../pages";

export const MediaRouter = () => {
  return (
    <Routes>
      <Route element={<MoviesPage />} path="/movies" />
      <Route element={<SeriesPage />} path="/series" />
      <Route element={<DetailMediaPage />} path="/:mediaType/:id" />
    </Routes>
  );
};
