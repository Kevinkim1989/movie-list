import React from "react";
import { Movie } from "@/pages/api/movies/getPopularMovies";


interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-black">
      <img
        className="w-full h-auto object-cover mb-4 rounded-md"
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />
      <h2 className="text-xl mb-2">{movie.title}</h2>
      <p className="text-xs italic mb-2">{movie.release_date}</p>
      {/* <p>{movie.overview}</p> */}
    </div>
  );
};

export default MovieCard;
