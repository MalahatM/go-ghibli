import type { Film } from "../types/film";
import "./FilmList.css";

type Props = {
  films: Film[];
};

function FilmList({ films }: Props) {
  return (
    <div className="film-grid">
      {films.map((film) => (
        <div key={film.id} className="film-card">
          <img src={film.image} alt={film.title} className="film-image" />
          <h2>{film.title}</h2>
          <p>{film.description}</p>
          <p><b>Director:</b> {film.director}</p>
        </div>
      ))}
    </div>
  );
}

export default FilmList;
