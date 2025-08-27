import FilmList from "./components/FilmList";
import useFilmsApi from "./data/useFilmsApi";

function App() {
  const films = useFilmsApi();

  if (!films) return <p>Loading...</p>;

  // Sort films from newest to oldest
  const sortedFilms = [...films].sort(
    (a, b) => Number(b.release_date) - Number(a.release_date)
  );

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Go Ghibli</h1>
      <FilmList films={sortedFilms} />
    </div>
  );
}

export default App;
