import useFilmsApi from "./data/useFilmsApi.ts";

function App() {
  const films = useFilmsApi();

  if (!films) return <p>Loading...</p>;

  return (
    <div>
      <h1>Go Ghibli</h1>
      <ul>
        {films.map((film) => (
          <li key={film.id}>
            <h2>{film.title}</h2>
            <p>🎬 Director: {film.director}</p>
            <img src={film.image} alt={film.title} width="200" />
            <p>{film.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
