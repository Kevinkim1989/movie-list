import React, { useEffect, useState } from "react";
import { Movie, fetchPopularMovies } from "@/pages/api/movies/getPopularMovies";
import MovieCard from "@/components/movieCard";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedMovies = await fetchPopularMovies();
      setMovies(fetchedMovies);
    }

    fetchData();
  }, []);

  return (
    <main className="container mx-auto">
      <h1 className="text-[4rem]">Movie List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies ? (
          movies.map((movie: Movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </main>
  );
}
