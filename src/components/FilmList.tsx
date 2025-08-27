import type { Film } from "../types/film";

type Props = {
  films: Film[];
};

function FilmList({ films }: Props) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
      {films.map((film) => (
        <div
          key={film.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "1rem",
          }}
        >
          <img
            src={film.image}
            alt={film.title}
            style={{ width: "100%", borderRadius: "8px", marginBottom: "0.5rem" }}
          />
          <h2>{film.title}</h2>
          <p>{film.description}</p>
          <p><b>Director:</b> {film.director}</p>
        </div>
      ))}
    </div>
  );
}

export default FilmList;
