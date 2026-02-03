import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MoviesAndShows() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWZjMmM2ZjRiYjYxZDg5MmMzMTg0OTlkNTJiNTNmNSIsIm5iZiI6MTc1NTk2NTkyNi40ODg5OTk4LCJzdWIiOiI2OGE5ZTllNmQ3OGJjODk5ODk3ODE4ODgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zcn74zrEwTcjStu8N3mVFVCP2cf87OhPXYM9gqVZjII`,
        },
      })
      .then((res) => {
        setMovies(res.data.results);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch movies 😢");
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-neutral-900 min-h-screen text-white px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Popular Movies
      </h1>

      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 animate-pulse">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="bg-neutral-800 rounded-xl h-80 shadow-md"
            ></div>
          ))}
        </div>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {movies.map((movie) => (
            <Link
              key={movie.id}
              to={`/hazem/${movie.id}`}
              className="bg-neutral-800 rounded-xl overflow-hidden hover:scale-105 transition transform duration-300 shadow-lg group"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-80 object-cover group-hover:opacity-90"
              />
              <div className="p-4">
                <h3 className="text-base font-semibold truncate group-hover:text-red-400 transition">
                  {movie.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  ⭐ {movie.vote_average.toFixed(1)} |{" "}
                  {movie.release_date?.split("-")[0]}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
