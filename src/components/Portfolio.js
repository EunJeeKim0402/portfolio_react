import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/autoplay";

import SwiperCore, { Autoplay, Navigation, Pagination, A11y, Keyboard } from 'swiper';
//import { HashLink } from "react-router-hash-link";
SwiperCore.use([Autoplay, Keyboard, Navigation, Pagination, A11y]);

function Department() {
    
    let url = process.env.PUBLIC_URL;
    const [swiperItem, setSwiperItem] = useState([]);
    let departSwiper = useRef(null);

    return(

        <section className="portfolioConts">
            <h1 className="tit">
                <span>Eunjee's Portfolio </span>
            </h1>
            {/* <img src="../image/workpeople" alt="Work People" /> */}

            <Swiper
                className='departSwiper'
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                keyboard={{
                    "enabled": true
                }}
                /*
                breakpoints={{
                    "769": {
                        "slidesPerView": 2,
                        "slidesPerGroup": 2
                    }
                }}
                */
                navigation={true}
                pagination={{ 
                    clickable: true,
                    type: 'faction',
                }}
                scrollbar={{ draggable: true }}
                onSwiper={
                    (swiper) => {
                        //const slideItemWrap = document.createElement('div');
                        //slideItemWrap.classList.add('swiper-wrapper-wrapper');
                        //swiper.wrapperEl.before(slideItemWrap);
                        //slideItemWrap.append(swiper.wrapperEl);
                        swiper.wrapperEl.classList.add('swiper-wrapper-wrapper');
                    }
                }
                onSlideChange={() => console.log('slice change')}
            >
                <SwiperSlide className="swiperImg">
                    <img src={`${url}/img/workpeople.jpg`} alt="img1" />
                    <span>포트폴리오1</span>
                </SwiperSlide>
                <SwiperSlide className="swiperImg"><img src={`${url}/img/workpeople.jpg`} alt="img1" /></SwiperSlide>
                <SwiperSlide className="swiperImg"><img src={`${url}/img/workpeople.jpg`} alt="img1" /></SwiperSlide>
                <SwiperSlide className="swiperImg"><img src={`${url}/img/workpeople.jpg`} alt="img1" /></SwiperSlide>
                <SwiperSlide className="swiperImg"><img src={`${url}/img/workpeople.jpg`} alt="img1" /></SwiperSlide>
                <SwiperSlide className="swiperImg"><img src={`${url}/img/workpeople.jpg`} alt="img1" /></SwiperSlide>
                <SwiperSlide className="swiperImg"><img src={`${url}/img/workpeople.jpg`} alt="img1" /></SwiperSlide>
                <SwiperSlide className="swiperImg"><img src={`${url}/img/workpeople.jpg`} alt="img1" /></SwiperSlide>
            </Swiper>
        </section>        
    )
}

export default Department;