import { tmdbConfigs } from "../../../api";
import { MediaList } from "../components";

export const MoviesPage = () => {
  return (
    <>
      <MediaList mediaType={tmdbConfigs.mediaType.movie} title="Movies" />
    </>
  );
};
