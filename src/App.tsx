import { useState } from "react";
import FilmList from "./components/FilmList";
import useFilmsApi from "./data/useFilmsApi";
import type { Film } from "./types/film";
import "./App.css";

function App() {
  const films = useFilmsApi();
  const [searchTerm, setSearchTerm] = useState(""); // state for search
   const [favorites, setFavorites] = useState<Film[]>([]);//state for favorites

  if (!films) return <p>Loading...</p>;

  // Sort films from newest to oldest
  const sortedFilms = [...films].sort(
    (a, b) => Number(b.release_date) - Number(a.release_date)
  );

  // Filter films based on search term
  const filteredFilms = sortedFilms.filter(film =>
    film.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
   const toggleFavorite = (film: Film) => {
    if (favorites.find(f => f.id === film.id)) {
      setFavorites(favorites.filter(f => f.id !== film.id));
    } else {
      setFavorites([...favorites, film]);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Go Ghibli</h1>

      {/* Input for search */}
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
       onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
     <FilmList 
  films={filteredFilms} 
  favorites={favorites} 
  toggleFavorite={toggleFavorite} 
/>

    </div>
  );
}

export default App;
