import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import movies from "./movies.js";
import "./moviePage.css";

function MoviePage() {
  const { id } = useParams();
  const movie = movies.find(m => m.id === Number(id));
  const [isFavorite, setIsFavorite] = useState(false);

  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");


  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.includes(movie?.id));
  }, [movie]);

  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem(`comments_${movie?.id}`)) || [];
    setComments(savedComments);
  }, [movie]);


  if (!movie) return <h2>Фильм не найден</h2>;


  function addToFavorites(id) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorites.includes(id)) {
      favorites = favorites.filter(favId => favId !== id);
      setIsFavorite(false);
    } else {
      favorites.push(id);
      setIsFavorite(true);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }


    function handleAddComment(e) {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComments = [...comments, { text: commentText.trim(), date: new Date().toLocaleString() }];
    setComments(newComments);
    setCommentText("");
    localStorage.setItem(`comments_${movie.id}`, JSON.stringify(newComments));
  }


  return ( 
    <div className="watch">

      <div className="wathcPoste">
        <img src={movie.poster}/>
        <button className="favoritButton" onClick={() => addToFavorites(movie.id)}>{isFavorite ? "Убрать из избранного" : "В избранное"}</button>
        <p className="time">Фильм идёт: {movie.duration}</p>
        <p className="time">Рейтинг: {movie.rating}</p>
      </div>

      <div className="watch-text">
        <h1>{movie.title}</h1>
        <p>{movie.description}</p>
        <iframe src={movie.videoUrl}
        title={movie.title}
        frameBorder="0"
        allowFullScreen />
      </div>
      <div className="comments-section">
          <h2>Комментарии</h2>
          <form onSubmit={handleAddComment}>
            <textarea
              value={commentText}
              onChange={e => setCommentText(e.target.value)}
              placeholder="Напишите комментарий..."
              rows={4}
            />
            <button type="submit">Отправить</button>
          </form>

          <div className="comments-list">
            {comments.length === 0 && <p>Комментариев пока нет.</p>}
            {comments.map((c, i) => (
              <div key={i} className="comment">
                <p>MrSanchos</p>
                <p>{c.text}</p>
                <small style={{color: "#999"}}>{c.date}</small>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}

export default MoviePage;