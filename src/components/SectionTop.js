import React, { useEffect, useState } from 'react'
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/swiper-bundle.css';
import './SectionTop.css'

// Register the Navigation module
SwiperCore.use([Navigation]);

function SectionTop() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        let isMounted = true;
        const getMovies = async () => {
          const response = await fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
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
    if (loading) return <h1 className='w1240' style={{fontSize:'32px', paddingTop:'20px', textAlign:'center'}}>Loading...</h1>

  return (
    <section className="favorite w1240">
        <div className="section_title">
            <h1>오늘의 top 20</h1>
            <h2>더보기<i className="fas fa-angle-right"></i></h2>
        </div>
        <div className="swiper subSwiper top20">
            <Swiper
                className="top20"
                spaceBetween={13}
                slidesPerView={5}
                centeredSlides={false}
                slidesPerGroup={5}
                navigation={true}
            >
                {movies.map((movie, index) => (
                    <SwiperSlide key={movie.id}>
                        <Link to={`/movie/${movie.id}`}>
                            <div className="img_container">
                                <img src={movie.large_cover_image} alt={movie.title}/>
                            </div>
                            <h1 className="rank">{index+1}</h1>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    </section>
  )
}

export default SectionTop