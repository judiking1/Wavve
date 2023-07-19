import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Detail.css'
function Detail() {
  const [loading, setLoading] = useState(true);
  const [imageIndex, setImageIndex] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  useEffect(() => {
    let timer = null;
    if(isPlaying) {timer = setInterval(() => {
        setImageIndex((prevIndex) => {
            return prevIndex < 3 ? prevIndex + 1 : 1;
        });
    }, 2500);

    return () => clearInterval(timer);
  }}, [isPlaying]);
  const handleTogglePlay = () => {
      setIsPlaying(!isPlaying);
  };
  const [movie, setMovie] = useState([]);
  const {id} = useParams();
  const getMovie = async ()=> {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`
    );
    const json = await response.json();
    setMovie(json.data.movie);
    setLoading(false);
  }
  useEffect(()=>{
    getMovie();
  }, {id})
  if(loading) return <h1>Loading...</h1>
  return (
      <div id='wrapper'>
        <Header/>
        <main>
            <section className="poster w1240">
               <img src={movie[`large_screenshot_image${imageIndex}`]} alt={movie.title}/>
                <h1>{movie.title}</h1>
                <h2>{movie.genres.join(', ')}<span>({movie.year})</span></h2>
                <h3>{movie.description_intro.slice(0,99)+'...'}</h3>
                <button onClick={handleTogglePlay}>{isPlaying ?<i className="fas fa-pause fa-xs"></i>:<i className="fas fa-play fa-xs"></i>}</button>
            </section>
            <section className="movie_info_tab w1240">
                <ul>
                    <li className="active">상세정보</li>
                    <li>관련영상</li>
                    <li>추천</li>
                </ul>
            </section>
            <section className="description w1240">
                <h1>{movie.title}</h1>
                <h2>{movie.description_full}</h2>
            </section>
            <section className="movie_info w1240">
                <img src={movie.medium_cover_image} alt="medium_cover_img"/>
                <table className="info_table">
                    <tr>
                        <td>연도</td>
                        <td>{movie.year}</td>
                    </tr>
                    <tr>
                        <td>장르</td>
                        <td>{movie.genres.join(', ')}</td>
                    </tr>
                    <tr>
                        <td>출연</td>
                        <td>
                          {Array.isArray(movie.cast) ? movie.cast.map(cast => cast.name ? cast.name : null).join(', ') : null}
                        </td>
                    </tr>
                    <tr>
                        <td>배우 정보</td>
                        <td>
                        {Array.isArray(movie.cast) ? movie.cast.map(cast => cast.url_small_image ? <img src={cast.url_small_image} alt="배우1" width="50" height="50"/> : null): null}
                        </td>
                    </tr>
                </table>
            </section>
        </main>
        <Footer/>
      </div>
  )
}

export default Detail