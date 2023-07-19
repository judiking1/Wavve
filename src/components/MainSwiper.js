import React, { useState, useRef } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay, EffectCoverflow} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/swiper-bundle.css';
import './MainSwiper.css'

// Register the modules
SwiperCore.use([Navigation, Pagination, Autoplay, EffectCoverflow]);

function AutoplayBtn({swiperRef}) {
    const [isAutoplay, setIsAutoplay] = useState(true);
    const toggleAutoplay = () => {
        const swiper = swiperRef.current;
        if(isAutoplay) {
            swiper.autoplay.stop();
        } else {
            swiper.autoplay.start();
        }
        setIsAutoplay(!isAutoplay);
    }
 
  return (
    <button className="autoplayBtn" onClick={toggleAutoplay}>
        {(isAutoplay)?<i className="fas fa-pause fa-xs"></i>:<i className="fas fa-play fa-xs"></i>}
    </button>
  )
}

function MainSwiper() {
  const swiperRef = useRef(null);
  const onSwiper = (swiper) => {
    swiperRef.current = swiper;
  };

  return (
    <section className="swipe_section">
        <div className="swiper mainSwiper">
            <Swiper
                className="mainSwiper"
                loop={true}
                slidesPerView={1.5}
                centeredSlides={true}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                onSwiper={onSwiper}
            >
                <SwiperSlide>
                    <Link to={`/movie/13106`}>
                        <img src="./images/avengers1.jpg" alt="id:13106"/>
                        <div className="slide_title">Avengers: Endgame</div>
                        <div className="slide_summary">After the devastating events of Avengers: Infinity War (2018), the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions...</div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={`/movie/3045`}>
                        <img src="./images/avengers2.jpg" alt="id:3045"/>
                        <div className="slide_title">The Avengers</div>
                        <div className="slide_summary">Loki, the adopted brother of Thor, teams-up with the Chitauri Army and uses the Tesseract's power to travel from Asgard to Midgard to plot the invasion of Earth and become a king. The director of the agency S.H.I.E.L.D., Nick Fury...</div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={`/movie/8462`}>
                        <img src="./images/avengers3.jpg" alt="id:8462"/>
                        <div className="slide_title">Avengers: Infinity War</div>
                        <div className="slide_summary">s the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect...</div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                     <Link to={`/movie/4522`}>
                        <img src="./images/avengers4.jpg" alt="id:4522"/>
                        <div className="slide_title">Avengers: Age of Ultron</div>
                        <div className="slide_summary">Tony Stark creates the Ultron Program to protect the world, but when the peacekeeping program becomes hostile, The Avengers go into action to try and defeat a virtually impossible enemy together. Earth's mightiest heroes must come together once again to protect the world from global extinction.</div>
                    </Link>
                </SwiperSlide>
                <AutoplayBtn swiperRef={swiperRef} />
            </Swiper>
        </div>
    </section>
  )
  
}

export default MainSwiper

