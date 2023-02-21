import { tmdbConfigs } from "../../../api";

export const ActorsCard = ({ actor }) => {
  console.log(actor);

  return (
    <div className="relative flex items-center justify-center  transition-all hover:scale-95 cursor-pointer">
      <img
        src={tmdbConfigs.posterPath(actor.profile_path)}
        className="object-cover rounded-full h-24 w-24"
      />
      <p className="absolute h-24 w-24 mx-auto text-xs items-center justify-center text-white font-semibold hover:bg-black/80 opacity-0 hover:opacity-100 rounded-full transition-all border-green-500 border-2 flex text-center">
        {actor.name}
      </p>
    </div>
  );
};
