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
                <button className='reg'>РЕГИСТРАЦИ | ВХОД</button>
            </div>
            <div className='film'>
                <h1 className='kategor'>НОВИНКИ</h1>
                <div className='film-image'>
                    <img src={xx} width="512" height="288"></img>
                    <img src={xx} width="512" height="288"></img>
                    <img src={xx} width="512" height="288"></img>
                </div>
            </div>
            <div className='film'>
                <h1 className='kategor'>ПОПУЛЯРНОЕ</h1>
                <div className='film-image'>
                    <img src={xx} width="512" height="288"></img>
                    <img src={xx} width="512" height="288"></img>
                    <img src={xx} width="512" height="288"></img>
                </div>
            </div>
            <div className='film'>
                <h1 className='kategor'>ЭКШОН</h1>
                <div className='film-image'>
                    <img src={xx} width="512" height="288"></img>
                    <img src={xx} width="512" height="288"></img>
                    <img src={xx} width="512" height="288"></img>
                </div>
            </div>
            <div className='film'>
                <h1 className='kategor'>УЖАСЫ</h1>
                <div className='film-image'>
                    <img src={xx} width="512" height="288"></img>
                    <img src={xx} width="512" height="288"></img>
                    <img src={xx} width="512" height="288"></img>
                </div>
            </div>
 

        </div>
  );
}

export default App
