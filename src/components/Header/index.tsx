import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white border-b-4  border-red-600 rounded-b-3xl text-red-600 flex justify-between p-5 px-20">
      <Link className="text-2xl font-bold hover:scale-110 transition-transform" to="/">
        MOVIES
      </Link>

      <Link className="flex items-center gap-3 font-semibold text-3xl hover:scale-110 transition-transform " to="/favoriteMovies">
        <FaHeart />
      </Link>
    </header>
  );
};

export default Header;
