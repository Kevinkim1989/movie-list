import React, { useEffect, useState } from "react";
import { Movie, fetchPopularMovies } from "@/pages/api/movies/getPopularMovies";
import MovieCard from "@/components/movieCard";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Home() {
  const [topMovies, setTopMovies] = useState<Movie[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedMovies = await fetchPopularMovies();
      const topMovies = fetchedMovies.slice(0, 4);
      // const remainingMovies = fetchedMovies.splice(5);
      setTopMovies(topMovies);
      setMovies(fetchedMovies);
    }

    fetchData();
  }, []);

  return (
    <>

      <Nav />

      <main className="container mx-auto">
        <h1 className="text-[4rem]">Movie List</h1>
        <p className="text-[1.5rem]">Popular Movies</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {topMovies ? (
            topMovies.map((movie: Movie) => <MovieCard key={movie.id} movie={movie} />)
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <p className="text-[1.5rem]">All Movies</p>
        <ul className="">
          {movies ? (
            movies.map((movie: Movie) => 
              <li>
                <a href="#" key={movie.id}>
                  {movie.title}
                </a>
              </li>
            )
          ) : (
            <p>Loading...</p>
          )}
        </ul>
      </main>

      <Footer />

    </>
  );
}
