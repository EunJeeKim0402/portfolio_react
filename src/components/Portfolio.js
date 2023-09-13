import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/autoplay";

import SwiperCore, { Autoplay, Navigation, Pagination, A11y, Keyboard } from 'swiper';
//import { HashLink } from "react-router-hash-link";
SwiperCore.use([Autoplay, Keyboard, Navigation, Pagination, A11y]);

function Portfolio() {
    
    let url = process.env.PUBLIC_URL;
    const [swiperItem, setSwiperItem] = useState([]);
    let departSwiper = useRef(null);

    return(

        <section className="portfolioConts">
            <h1 className="tit">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;Eunjee's Portfolio </span>
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
                navigation={true}
                pagination={{ 
                    clickable: true,
                    type: 'faction',
                }}
                scrollbar={{ draggable: true }}
                onSwiper={
                    (swiper) => {
                        swiper.wrapperEl.classList.add('swiper-wrapper-wrapper');
                    }
                }
                onSlideChange={() => console.log('slice change')}
            >
                <SwiperSlide className="swiperImg">
                    <img src={`${url}/img/reactPortfolio.jpg`} alt="img1" className="img1" />
                    <span>React 포트폴리오 프로젝트</span>
                </SwiperSlide>
                <SwiperSlide className="swiperImg">
                    <img src={`${url}/img/workpeople.jpg`} alt="img2" />
                    <span></span>
                </SwiperSlide>
                <SwiperSlide className="swiperImg">
                    <img src={`${url}/img/workpeople.jpg`} alt="img2" />
                    <span>React로 만든 트위터(클론코딩)</span>
                </SwiperSlide>
                <SwiperSlide className="swiperImg">
                    <img src={`${url}/img/workpeople.jpg`} alt="img2" />
                    <span>하하호호3</span>
                </SwiperSlide>
                <SwiperSlide className="swiperImg">
                    <img src={`${url}/img/workpeople.jpg`} alt="img2" />
                    <span>하하호호4</span>
                </SwiperSlide>
                <SwiperSlide className="swiperImg">
                    <img src={`${url}/img/workpeople.jpg`} alt="img2" />
                    <span>하하호호5</span>
                </SwiperSlide>
            </Swiper>
        </section>        
    )
}

export default Portfolio;