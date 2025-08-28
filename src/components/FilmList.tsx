import type { Film } from "../types/film";
import "./FilmList.css";


type FavoriteFilm = Film & { seen: boolean };

type Props = {
  films: Film[];
  favorites: FavoriteFilm[];
  toggleFavorite: (film: Film) => void;
  toggleSeen: (id: string) => void;
};

function FilmList({ films, favorites, toggleFavorite, toggleSeen }: Props) {
  return (
    <div className="film-grid">
      {films.map((film) => {
        const isFavorite = favorites.find(f => f.id === film.id);
        return (
          <div key={film.id} className="film-card">
            <img src={film.image} alt={film.title} className="film-image" />

            {/* Buttons under the image */}
            <div className="buttons-container">
              <button onClick={() => toggleFavorite(film)}>
                {isFavorite ? "💖" : "🤍"}
              </button>

              {isFavorite && (
                <button
                  className="seen-btn"
                  onClick={() => toggleSeen(film.id)}
                >
                  {isFavorite.seen ? "✅ Seen" : "❌ Not Seen"}
                </button>
              )}
            </div>

            {/* Title and details */}
            <h2>{film.title}</h2>
            <p>{film.description}</p>
            <p><b>Director:</b> {film.director}</p>
          </div>
        );
      })}
    </div>
  );
}

export default FilmList;
