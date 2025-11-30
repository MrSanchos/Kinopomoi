import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Boevik from './categories/boevik';
import Anime from './categories/anime';
import Dedektiv from './categories/dedektiv';
import Dokymentalka from './categories/dokymentalka';
import Drama from './categories/drama';
import Fantastika from './categories/fantastika';
import Fentezi from './categories/fentezi';
import Istrik from './categories/istrik';
import Komedia from './categories/komedia';
import Kriminal from './categories/kriminal';
import Melodrama from './categories/melodrama';
import Priklychenie from './categories/priklychenie';
import Semeini from './categories/semeini';
import Triller from './categories/triller';
import Yjas from './categories/yjas';

function App() {
    return (
        <div>
            <div className='onTop'>
                <button className='ktr'><Link to="/boevik">Боевик</Link></button>
                <button className='ktr'><Link to="/komedia">Комедия </Link></button>
                <button className='ktr'><Link to="/drama">Драма</Link> </button>
                <button className='ktr'><Link to="/triler">Триллер</Link> </button>
                <button className='ktr'><Link to="/yjas">Ужасы </Link> </button>
                <button className='ktr'><Link to="/fantastika">Фантастика</Link> </button>
                <button className='ktr'><Link to="/fentezi">Фэнтези</Link> </button>
                <button className='ktr'><Link to="/priklychenie">Приключения</Link> </button>
                <button className='ktr'><Link to="/melodrama">Мелодрама</Link> </button>
                <button className='ktr'><Link to="/kriminal">Криминал</Link> </button>
                <button className='ktr'><Link to="/semeini">Семейный</Link> </button>
                <button className='ktr'><Link to="/anime">Анимация</Link> </button>
                <button className='ktr'><Link to="/dokymentalka">Документальный</Link> </button>
                <button className='ktr'><Link to="/istorik">Исторический</Link> </button>
                <button className='ktr'><Link to="/detektiv">Детектив</Link> </button>
            </div>
            <Routes>
                <Route path="/boevik" element={<Boevik/>} />
                <Route path="/komedia" element={<Komedia/>} />
                <Route path="/drama" element={<Drama/>} />
                <Route path="/triler" element={<Triller/>} />
                <Route path="/yjas" element={<Yjas/>} />
                <Route path="/fantastika" element={<Fantastika/>} />
                <Route path="/fentezi" element={<Fentezi/>} />
                <Route path="/priklychenie" element={<Priklychenie/>} />
                <Route path="/melodrama" element={<Melodrama/>} />
                <Route path="/kriminal" element={<Kriminal/>} />
                <Route path="/semeini" element={<Semeini/>} />
                <Route path="/anime" element={<Anime/>} />
                <Route path="/dokymentalka" element={<Dokymentalka/>} />
                <Route path="/istorik" element={<Istrik/>} />
                <Route path="/detektiv" element={<Dedektiv/>} />
            </Routes>
        </div>
  );
}

export default App
