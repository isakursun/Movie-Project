import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white border-b-4  border-red-600 rounded-b-3xl text-red-600 flex justify-between p-5 lg:px-10">
      <Link className="text-2xl font-bold hover:scale-110 transition-transform" to="/">
        MOVIES
      </Link>

      <Link className="flex items-center gap-3 font-semibold text-lg hover:underline underline-offset-2 transition-transform " to="/favorites">
        <FaHeart />
        Favorites
      </Link>
    </header>
  );
};

export default Header;
