import type { Film } from "../types/film";

type Props = {
  films: Film[];
  favorites: Film[];
  toggleFavorite: (film: Film) => void;
};

function FilmList({ films, favorites, toggleFavorite }: Props) {
  return (
    <div className="film-grid">
      {films.map((film) => (
        <div key={film.id} className="film-card">
          <img src={film.image} alt={film.title} className="film-image" />
          <h2>{film.title}</h2>
          <p>{film.description}</p>
          <p><b>Director:</b> {film.director}</p>

          {/*favorite button */}
          <button onClick={() => toggleFavorite(film)}>
            {favorites.find(f => f.id === film.id) ? "💖" : "🤍"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default FilmList;
