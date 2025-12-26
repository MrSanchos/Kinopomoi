import { Link } from "react-router-dom";
import movies from "./movies/movies.js";
import User from "./user.js"
import "./profil.css";
import "./movies/movie.css";

function Profil() {
    const favoriteIds = JSON.parse(localStorage.getItem("favorites")) || [];
    const favoriteMovies = movies.filter(m => favoriteIds.includes(m.id));
    return (
        <div>
            <div className="profil">
                <div className="profilImg">
                    {User.map(user => (
                        <div key={user.login} className="user-info">
                            <img src={user.avatarka} width="200" height="200" alt="Avatar" />
                            <div>
                            <h1>{user.login}</h1>
                            <p>Дата регистрации: 26.12.2025</p>
                            <p>Посмотренно фильмов: 0</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="film">
                <h1>Избраное</h1>
                <div className="film-image">
                    {favoriteMovies.map(movie => (
                        <Link key={movie.id} to={`/movie/${movie.id}`}>
                        <img src={movie.poster}/>
                        <p className="movieName">{movie.title}</p>
                        <p className="movieDate">{movie.releaseDate}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
  );
}

export default Profil