import { useParams } from "react-router-dom";
import movies from "./movies.js";
import "./moviePage.css";

function MoviePage() {
  const { id } = useParams();
  const movie = movies.find(m => m.id === Number(id));

  if (!movie) return <h2>Фильм не найден</h2>;

  return (
    <div className="watch">
        <img src={movie.poster}/>
        <div className="watch-text">
          <h1>{movie.title}</h1>
          <p>{movie.description}</p>
          <iframe src={movie.videoUrl}
          width="100%"
          height="600"
          title={movie.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />
        </div>
        <p className="time">{movie.duration}</p>
    </div>
  );
}

export default MoviePage;