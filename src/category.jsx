import { useParams, Link } from "react-router-dom";
import movies from "./movies.js";
import "./movies/movie.css";

function Category() {
  const { name } = useParams();

  const filtered = movies.filter(movie =>
    movie.categories.includes(name)
  );

  return (
    <div className="film">
      <h1>{name}</h1>
      <div className="film-image">
        {filtered.map(movie => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <img src={movie.poster}/>
          <p className="movieName">{movie.title}</p>
          <p className="movieDate">{movie.releaseDate}</p>
        </Link>
      ))}
      </div>
    </div>
  );
}

export default Category;