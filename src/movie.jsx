import './movie.css'
import posterjw from './assets/posterjw.png';
import posterA from './assets/posterA.png';
import posterI from './assets/posterI.png';
import posterN from './assets/posterN.png';
import posterthrl from './assets/posterthrl.png';
import fnafposter from './assets/fnafposter.png';

function Movie() {
    return (
        <div>
            <div className='film'>
                <h1 className='kategor'>БОЕВИК</h1>
                <div className='film-image'>
                    <img src={posterjw}></img>
                    <img src={posterA}></img>
                    <img src={posterI}></img>
                    <img src={posterN}></img>
                    <img src={posterthrl}></img>
                    <img src={fnafposter}></img>
                </div>
            </div>
            <div className='film'>
                <h1 className='kategor'>СЕМЕЙНЫЙ</h1>
                <div className='film-image'>
                    <img src={posterjw}></img>
                    <img src={posterA}></img>
                    <img src={posterI}></img>
                    <img src={posterN}></img>
                    <img src={posterthrl}></img>
                    <img src={fnafposter}></img>
                </div>
            </div>
            <div className='film'>
                <h1 className='kategor'>ФАНТАСТИКА</h1>
                <div className='film-image'>
                    <img src={posterjw}></img>
                    <img src={posterA}></img>
                    <img src={posterI}></img>
                    <img src={posterN}></img>
                    <img src={posterthrl}></img>
                    <img src={fnafposter}></img>
                </div>
            </div>
            <div className='film'>
                <h1 className='kategor'>УЖАСЫ</h1>
                <div className='film-image'>
                    <img src={posterjw}></img>
                    <img src={posterA}></img>
                    <img src={posterI}></img>
                    <img src={posterN}></img>
                    <img src={posterthrl}></img>
                    <img src={fnafposter}></img>
                </div>
            </div>
        </div>
  );
}

export default Movie
