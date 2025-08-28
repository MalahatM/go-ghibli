import { useState } from "react";
import FilmList from "./components/FilmList";
import useFilmsApi from "./data/useFilmsApi";
import type { Film } from "./types/film";
import "./App.css";


//Define a new type that extends film with a seen property
type FavoriteFilm = Film & { seen: boolean }; 

function App() {
  const films = useFilmsApi();
  const [searchTerm, setSearchTerm] = useState(""); // state for search
   const [favorites, setFavorites] = useState<FavoriteFilm[]>([]);//state for favorites

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
  const existing = favorites.find(f => f.id === film.id);

  if (existing) {
    // delet favorite
    setFavorites(favorites.filter(f => f.id !== film.id));
  } else {
    // اadding fvorite with seen=false
    setFavorites([...favorites, { ...film, seen: false }]);
  }
};
const toggleSeen = (id: string) => {
  setFavorites(favorites.map(f => 
    f.id === id ? { ...f, seen: !f.seen } : f
  ));
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
   toggleSeen={toggleSeen} 
/>

    </div>
  );
}

export default App;
