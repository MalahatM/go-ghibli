import FilmList from "./components/FilmList";
import useFilmsApi from "./data/useFilmsApi";

function App() {
  const films = useFilmsApi();

  if (!films) return <p>Loading...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Go Ghibli</h1>
      <FilmList films={films} />
    </div>
  );
}

export default App;
