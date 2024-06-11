import { useGetDetailQuery } from "../../redux/api";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { Link, useParams } from "react-router-dom";
import { baseImgUrl } from "../../constants";
import { IoIosArrowBack } from "react-icons/io";
import ItemList from "./ItemList";
import LikeButton from "../../components/LikeButton";

const Detail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetDetailQuery(id);

  return (
    <div>
      <div className="flex justify-between">
        <Link
          className="flex items-center gap-2 mb-10 border border-red-600 rounded p-1 px-3 w-fit hover:bg-red-600 hover:text-white"
          to={"/"}
        >
          <IoIosArrowBack />
          Back
        </Link>

        <LikeButton id={id ? +id : 1} />
      </div>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error data={error} />
      ) : (
        data && (
          <div className="flex flex-col lg:flex-row text-center gap-5">
            <div className="flex justify-center lg:min-w-max lg:mt-8">
              <img
                className="mb-5 max-h-[50vh] object-contain shadow-2xl rounded-lg shadow-red-200"
                src={baseImgUrl + data.backdrop_path}
              />
            </div>

            <div>
              <div className="flex justify-center items-center gap-3 mb-5">
                <h1 className="text-2xl font-bold text-red-600 ">
                  {data.title} ({data.release_date})
                </h1>
                <span className="text-2xl font-semibold bg-white text-red-600 shadow-md p-2 border border-red-600 rounded-full cursor-pointer hover:bg-red-600 hover:text-white">{data.vote_average.toFixed(1)}</span>
              </div>

              <div className="flex gap-3 text-gray-500 justify-center">
                {data.genres.map((genre) => (
                  <p className="md:text-center">{genre.name}</p>
                ))}
              </div>

              <p className="text-gray-500 my-4 md:text-center">
                {data.tagline}
              </p>

              <p className="my-2 md:text-center">{data.overview}</p>

              <h2 className="font-semibold md:text-center my-2">
                Production Information
              </h2>

              <div className="flex flex-col items-center my-2">
                <ItemList data={data.production_companies} />
                <ItemList data={data.spoken_languages} />
                <ItemList data={data.production_countries} />
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Detail;
