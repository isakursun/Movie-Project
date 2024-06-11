import { Link } from "react-router-dom";
import LikeButton from "../LikeButton";
import { movieType } from "../../types";
import { baseImgUrl } from "../../constants";

type CardProps = {
  movie: movieType;
};

const Card = ({ movie }: CardProps) => {
  return (
    <div className="p-2 shadow-lg shadow-red-100 rounded cursor-pointer hover:scale-105 transition-transform h-full max-h-[600px]">
      <Link className="flex flex-col gap-4" to={`/movie/${movie.id}`}>
        <img
          className="rounded-md w-full h-full object-contain"
          src={baseImgUrl + movie.poster_path}
        />
      </Link>
      <div className="w-full flex items-center justify-between my-3 ">
        <Link to={`/movie/${movie.id}`}>
          <h2 className="font-semibold line-clamp-2">{movie.original_title}</h2>
        </Link>
        <LikeButton id={movie.id} />
      </div>
    </div>
  );
};

export default Card;
