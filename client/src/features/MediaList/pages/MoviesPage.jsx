import { tmdbConfigs } from "../../../api";
import { HeroSlide } from "../../Home/components";
import { MediaList } from "../components";

export const MoviesPage = () => {
  return (
    <>
      <MediaList mediaType={tmdbConfigs.mediaType.movie} title="Movies" />
    </>
  );
};
