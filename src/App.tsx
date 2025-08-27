import { useState } from "react";
import FilmList from "./components/FilmList";
import useFilmsApi from "./data/useFilmsApi";

function App() {
  const films = useFilmsApi();
  const [searchTerm, setSearchTerm] = useState(""); // state for search

  if (!films) return <p>Loading...</p>;

  // Sort films from newest to oldest
  const sortedFilms = [...films].sort(
    (a, b) => Number(b.release_date) - Number(a.release_date)
  );

  // Filter films based on search term
  const filteredFilms = sortedFilms.filter(film =>
    film.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Go Ghibli</h1>

      {/* Input for search */}
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <FilmList films={filteredFilms} />
    </div>
  );
}

export default App;
