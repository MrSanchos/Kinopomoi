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
                <img src={xx} width="512" height="288"></img>
                <img src={xx} width="512" height="288"></img>
                <img src={xx} width="512" height="288"></img>
            </div>
            <div className='film'>
                <img src={xx} width="512" height="288"></img>
                <img src={xx} width="512" height="288"></img>
                <img src={xx} width="512" height="288"></img>
            </div>
            <div className='film'>
                <img src={xx} width="512" height="288"></img>
                <img src={xx} width="512" height="288"></img>
                <img src={xx} width="512" height="288"></img>
            </div>
            <div className='film'>
                <img src={xx} width="512" height="288"></img>
                <img src={xx} width="512" height="288"></img>
                <img src={xx} width="512" height="288"></img>
            </div>
            <div className='film'>
                <img src={xx} width="512" height="288"></img>
                <img src={xx} width="512" height="288"></img>
                <img src={xx} width="512" height="288"></img>
            </div>

        </div>
  );
}

export default App
