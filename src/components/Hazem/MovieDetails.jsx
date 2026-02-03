import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaPlay, FaPlus, FaShareAlt, FaVolumeUp, FaStar } from "react-icons/fa";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const movieRes = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWZjMmM2ZjRiYjYxZDg5MmMzMTg0OTlkNTJiNTNmNSIsIm5iZiI6MTc1NTk2NTkyNi40ODg5OTk4LCJzdWIiOiI2OGE5ZTllNmQ3OGJjODk5ODk3ODE4ODgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zcn74zrEwTcjStu8N3mVFVCP2cf87OhPXYM9gqVZjII`,
            },
          }
        );

        const creditsRes = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWZjMmM2ZjRiYjYxZDg5MmMzMTg0OTlkNTJiNTNmNSIsIm5iZiI6MTc1NTk2NTkyNi40ODg5OTk4LCJzdWIiOiI2OGE5ZTllNmQ3OGJjODk5ODk3ODE4ODgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zcn74zrEwTcjStu8N3mVFVCP2cf87OhPXYM9gqVZjII`,
            },
          }
        );

        setMovie(movieRes.data);
        setCredits(creditsRes.data);
      } catch (err) {
        setError("Failed to load movie details 😢");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl text-gray-300">
        Loading movie details...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500 font-bold">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-neutral-900 text-white min-h-screen">
      {/* Cover Section */}
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          className="w-full h-[400px] md:h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        <div className="absolute bottom-8 left-6 md:left-12 max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold">{movie.title}</h1>
          <p className="text-gray-300 mt-3 line-clamp-3">
            {movie.tagline || movie.overview}
          </p>
          <div className="flex gap-3 mt-5 flex-wrap">
            <button className="bg-red-600 px-5 py-2 rounded flex items-center gap-2 hover:bg-red-700 transition">
              <FaPlay /> Play Now
            </button>
            <button className="bg-zinc-700 px-3 py-2 rounded hover:bg-zinc-600">
              <FaPlus />
            </button>
            <button className="bg-zinc-700 px-3 py-2 rounded hover:bg-zinc-600">
              <FaShareAlt />
            </button>
            <button className="bg-zinc-700 px-3 py-2 rounded hover:bg-zinc-600">
              <FaVolumeUp />
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 md:px-12 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Description */}
          <div className="bg-zinc-800 p-5 rounded-xl">
            <h2 className="font-semibold mb-2">Description</h2>
            <p className="text-gray-300 leading-relaxed">{movie.overview}</p>
          </div>

          {/* Cast */}
          <div className="bg-zinc-800 p-5 rounded-xl">
            <h2 className="font-semibold mb-3">Cast</h2>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {credits?.cast?.slice(0, 10).map((actor) => (
                <div
                  key={actor.id}
                  className="flex flex-col items-center min-w-[70px]"
                >
                  <img
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                        : "https://via.placeholder.com/100"
                    }
                    alt={actor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <p className="text-xs mt-2 text-center">{actor.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Rating */}
          <div className="bg-zinc-800 p-5 rounded-xl">
            <h2 className="font-semibold mb-3">Rating</h2>
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-400" />
              <span className="font-medium">
                {movie.vote_average.toFixed(1)} / 10
              </span>
              <span className="text-gray-400 text-sm">
                ({movie.vote_count} votes)
              </span>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-5">
          <div className="bg-zinc-800 p-5 rounded-xl space-y-3">
            <p>
              <span className="text-gray-400">Release Date:</span>{" "}
              {movie.release_date}
            </p>
            <p>
              <span className="text-gray-400">Runtime:</span>{" "}
              {movie.runtime} mins
            </p>
            <p>
              <span className="text-gray-400">Language:</span>{" "}
              {movie.original_language.toUpperCase()}
            </p>
            <p>
              <span className="text-gray-400">Genres:</span>{" "}
              {movie.genres.map((g) => g.name).join(", ")}
            </p>
          </div>
          <div className="bg-zinc-800 p-5 rounded-xl space-y-3">
            <p>
              <span className="text-gray-400">Director:</span>{" "}
              {credits?.crew?.find((c) => c.job === "Director")?.name || "N/A"}
            </p>
            <p>
              <span className="text-gray-400">Music:</span>{" "}
              {credits?.crew?.find((c) => c.job === "Original Music Composer")
                ?.name || "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
