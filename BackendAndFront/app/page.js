"use client";
import Image from "next/image";
import { useState, useEffect } from 'react';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentMovie, setCurrentMovie] = useState(null);

  // Fetch movies from the API
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/movies", { cache: "no-store" });
        if (!res.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await res.json();
        
        // Add a unique `id` to each movie if it doesn't have one
        const moviesWithId = (data.movies || []).map((movie, index) => ({
          ...movie,
          id: movie.id || `movie-${Date.now()}-${index}`
        }));
        
        setMovies(moviesWithId);
      } catch (error) {
        console.error("Error loading movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const handleImageClick = (movie) => {
    setCurrentMovie(movie);
    setDialogOpen(true);
  };

  return (
    <div className="m-auto w-[1000px] h-full">
      <h1 className="text-white text-center font-bold text-4xl pb-5">Хамгийн их үзэлттэй кино</h1>

      <div className="m-auto w-[1000px] h-[550px] bg-gray-200 relative">
  {movies
    .filter((movie) => movie._id === "6725a3b3a0da6d4a20217f82") // Only show movie with the specified ID
    .map((movie) => (
      <Image
        key={movie.id}
        src={movie.image}
        layout="fill"
        objectFit="cover"
        alt="Featured movie"
        onClick={() => handleImageClick(movie)}
      />
    ))}
</div>

      <h1 className="text-white font-bold text-4xl pt-5 pb-3">Дэлгэцээр гарч буй кинонууд</h1>
      <div className="relative">
        <div className="carousel w-full">
          {movies.map((movie) => (
            <div key={movie.id} id={movie.id} className="carousel-item w-full">
              <img
                src={movie.image}
                className="w-full h-80 cursor-pointer"
                onClick={() => handleImageClick(movie)}
                alt={movie.title}
              />
            </div>
          ))}
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
  {movies.map((movie, index) => (
    <a key={movie.id} href={`#${movie.id}`} className="btn btn-xs">
      {index + 1} {/* Starts numbering from 1 */}
    </a>
  ))}
</div>


        {dialogOpen && currentMovie && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="card glass p-6 rounded-lg shadow-lg w-11/12 md:w-1/3 text-white">
              <h2 className="text-2xl font-semibold pb-3">{currentMovie.title}</h2>
              <img src={currentMovie.image} alt={currentMovie.title} className="w-full h-60 object-cover rounded-lg" />
              <p className="mt-2 flex gap-1"><span className="font-bold">Төрөл:</span> {currentMovie.type}</p>
<p className="mt-2 flex gap-1"><span className="font-bold">Нас:</span> {currentMovie.age}</p>
<p className="mt-2 flex gap-1"><span className="font-bold">Үргэлжлэх хугацаа:</span> {currentMovie.duration}</p>
              <p className="mt-2 font-bold">Тайлбар:</p>
              <p>{currentMovie.description}</p>
              <button
                className="text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2"
                onClick={() => setDialogOpen(false)}
              >
                Хаах
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
