import React, { useEffect, useState } from 'react'
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/swiper-bundle.css';
import './SectionEditor.css'

// Register the Navigation module
SwiperCore.use([Navigation]);

function SectionEditor() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        let isMounted = true;
        const getMovies = async () => {
          const response = await fetch("https://yts.mx/api/v2/list_movies.json?sort_by=like_count");
          const json = await response.json();
          if (isMounted) {
            setMovies(json.data.movies);
            setLoading(false);
          }
        };
        getMovies();
        return () => {
          isMounted = false;
        };
      }, []);
    if (loading) return  <h1 className='w1240' style={{fontSize:'32px', paddingTop:'20px', textAlign:'center'}}>Loading...</h1>
  return (
    <section className="favorite w1240">
        <div className="section_title">
            <h1>믿고 보는 웨이브 에디터 추천작</h1>
            <h2>더보기<i class="fas fa-angle-right"></i></h2>
        </div>
        <div className="swiper subSwiper">
            <Swiper
                className="subSwiper"
                spaceBetween={13}
                slidesPerView={5}
                centeredSlides={false}
                slidesPerGroup={5}
                navigation={true}  // navigation prop is now just a boolean
            >
                {movies.map(movie => (
                    <SwiperSlide key={movie.id}>
                        <Link to={`/movie/${movie.id}`}><img src={movie.large_cover_image} alt={movie.title} /></Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
  )
}

export default SectionEditor