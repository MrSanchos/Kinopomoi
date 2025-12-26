import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Category from './category';
import Movie from "./movies/movie";
import Profil from "./profil";
import MoviePage from "./movies/moviePage";
import Header from "./Header";

function App() {
    return (
        <div>
            <div className='onTop'>
                <Link to="/БОЕВИК" className="linkButton">Боевик</Link>
                <Link to="/КОМЕДИЯ" className="linkButton">Комедия </Link>
                <Link to="/ДРАМА" className="linkButton">Драма</Link> 
                <Link to="/ТРИЛЛЕР" className="linkButton">Триллер</Link>
                <Link to="/УЖАСЫ" className="linkButton">Ужасы </Link>
                <Link to="/ФАНТАСТИКА" className="linkButton">Фантастика</Link>
                <Link to="/ФЭНТЕЗИ" className="linkButton">Фэнтези</Link>
                <Link to="/ПРИКЛЮЧЕНИЯ" className="linkButton">Приключения</Link>
                <Link to="/МЕЛОДРАМА" className="linkButton">Мелодрама</Link>
                <Link to="/КРИМИНАЛ" className="linkButton">Криминал</Link>
                <Link to="/СЕМЕЙНЫЙ" className="linkButton">Семейный</Link>
                <Link to="/АНИМАЦИЯ" className="linkButton">Анимация</Link>
                <Link to="/ДОКУМЕНТАЛЬНЫЙ" className="linkButton">Документальный</Link>
                <Link to="/ИСТОРИЧЕСКИЙ" className="linkButton">Исторический</Link>
                <Link to="/ДЕТЕКТИВ" className="linkButton">Детектив</Link>
            </div>

            <Header />

            <Routes>
                <Route path="/" element={<Movie />} />
                <Route path="/profil" element={<Profil />} />
                <Route path="/movie/:id" element={<MoviePage />} />
                <Route path="/:name" element={<Category />} />
            </Routes>
        </div>
  );
}

export default App
