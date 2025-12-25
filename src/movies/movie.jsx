import { Link } from "react-router-dom";
import movies from "./movies";
import "./movie.css";

function Movie() {
  return (
    <div>
      <div className="film">
        <h1 className="kategor">ВСЕ ФИЛЬМЫ</h1>

        <div className="film-image">
          {movies.map(movie => (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <img src={movie.poster} alt={movie.title} />
              <p className="movieName">{movie.title}</p>
              <p className="movieDate">{movie.releaseDate}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Movie;