import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import movies from './movies.js';
import './Header.css'
import logo from './assets/logo.png';
import entry from './assets/vhod.png';

function Header() {
      const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  function onChangeHandler(e) {
    const value = e.target.value;
    setSearch(value);

    if (value.trim() === '') {
      setSuggestions([]);
      return;
    }
    const filtered = movies
      .filter(m => m.title.toLowerCase().startsWith(value.toLowerCase()))
      .slice(0, 5); // максимум 5 вариантов

    setSuggestions(filtered);
  }

  function onSuggestionClick(id) {
    setSearch('');
    setSuggestions([]);
    navigate(`/movie/${id}`);
  }
    return (
        <div>
            <div className='menu'>
                <Link to="/"><img src={logo} width="189" height="67"></img></Link>
                        <div className="search-wrapper">
                            <input
                                className="poisk"
                                type="text"
                                placeholder="Поиск..."
                                value={search}
                                onChange={onChangeHandler}
                                autoComplete="off"
                            />
                            {suggestions.length > 0 && (
                                <ul className="suggestions">
                                {suggestions.map(movie => (
                                    <li key={movie.id} onClick={() => onSuggestionClick(movie.id)} onMouseDown={e => e.preventDefault()}>
                                    {movie.title}
                                    </li>
                                ))}
                                </ul>
                            )}
                            </div>
                <Link to="/profil" className='reg'><img src={entry} width="50" height="50"></img></Link>
            </div>
        </div>
  );
}

export default Header