import type { Film } from "../types/film";

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
            <h2>{film.title}</h2>
            <p>{film.description}</p>
            <p><b>Director:</b> {film.director}</p>

            {/* Button favorite */}
            <button onClick={() => toggleFavorite(film)}>
              {isFavorite ? "💖" : "🤍"}
            </button>

            {/* Button toggle Seen / Not Seen */}
            {isFavorite && (
              <button onClick={() => toggleSeen(film.id)}>
                {isFavorite.seen ? "✅ Seen" : "❌ Not Seen"}
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default FilmList;
