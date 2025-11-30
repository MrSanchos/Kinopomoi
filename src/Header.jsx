import { Routes, Route, Link } from 'react-router-dom'
import './Header.css'
import logo from './assets/logo.png';
import entry from './assets/vhod.png';
import Movie from './movie'

function Header() {
    return (
        <div>
            <div className='menu'>
                <button><Link to="/"><img src={logo} width="189" height="67"></img></Link></button>
                <input className='poisk' type="text" placeholder="Поиск..."/>
                <button className='reg'><img src={entry} width="40" height="40"></img></button>
            </div>
            <Routes>
                <Route path="/" element={<Movie/>} />
            </Routes>
        </div>
  );
}

export default Header