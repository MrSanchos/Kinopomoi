import './App.css'
import yrna from './assets/yrna.svg';
import xx from './assets/xx.png';

function App() {
    return (
        <div>
            <div className='menu'>
                <img src={yrna} width="64" height="64"></img>
                <h1>KINOPOMOI</h1>
                <input className='poisk' type="text" />
                <button className='reg'>РЕГИСТРАЦИЯ | ВХОД</button>
            </div>
            <div className='film'>
                <h1 className='kategor'>НОВИНКИ</h1>
                <div className='film-image'>
                    <img src={xx}></img>
                    <img src={xx}></img>
                    <img src={xx}></img>
                </div>
            </div>
            <div className='film'>
                <h1 className='kategor'>ПОПУЛЯРНОЕ</h1>
                <div className='film-image'>
                    <img src={xx}></img>
                    <img src={xx}></img>
                    <img src={xx}></img>
                </div>
            </div>
            <div className='film'>
                <h1 className='kategor'>ЭКШОН</h1>
                <div className='film-image'>
                    <img src={xx}></img>
                    <img src={xx}></img>
                    <img src={xx}></img>
                </div>
            </div>
            <div className='film'>
                <h1 className='kategor'>УЖАСЫ</h1>
                <div className='film-image'>
                    <img src={xx}></img>
                    <img src={xx}></img>
                    <img src={xx}></img>
                </div>
            </div>
 

        </div>
  );
}

export default App
