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
                spaceBetween={50}
                slidesPerView={1}
                keyboard={{
                    "enabled": true
                }}
                navigation={true}
                scrollbar={{ draggable: true }}
                onSwiper={
                    (swiper) => {
                        swiper.wrapperEl.classList.add('swiper-wrapper-wrapper');
                    }
                }
                onSlideChange={() => console.log('slice change')}
            >
                {/* <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide> */}
            {/* <Swiper
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
            > */}

                <SwiperSlide className="swiperImg">
                    <img src={`${url}/img/reactPortfolio.jpg`} alt="img1" className="img1" />
                    <br />
                    <h2>Portfolio</h2>
                    <div className="swiperText">
                        <span>개인 포트폴리오 웹페이지입니다.</span><br/>   
                        <span>React와 scss를 이용하여 제작했습니다.</span><br/><br/>                       
                        <b># Period</b>&nbsp;&nbsp;
                        <span>2023.08~2023.09</span><br/>    
                        <b># Tech</b>&nbsp;&nbsp;
                        <span>React Scss HTML</span><br/> 
                        <b># My Work</b>&nbsp;&nbsp;  
                        <span>·Design ·Frontend</span><br/><br/> 
                        <a href="https://github.com/EunJeeKim0402/portfolio_react">source code</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiperImg">
                    <img src={`${url}/img/React클론코딩.jpg`} alt="img2" className="img2" />
                    <span>하하호호1</span>
                </SwiperSlide>
                <SwiperSlide className="swiperImg">
                    <img src={`${url}/img/workpeople.jpg`} alt="img3" className="img3" />
                    <span>하하호호2</span>
                </SwiperSlide>
                <SwiperSlide className="swiperImg">
                    <img src={`${url}/img/workpeople.jpg`} alt="img4" className="img4" />
                    <span>하하호호3</span>
                </SwiperSlide>
                <SwiperSlide className="swiperImg">
                    <img src={`${url}/img/workpeople.jpg`} alt="img5" className="img5" />
                    <span>하하호호4</span>
                </SwiperSlide>
                <SwiperSlide className="swiperImg">
                    <img src={`${url}/img/workpeople.jpg`} alt="img6" className="img6" />
                    <span>하하호호5</span>
                </SwiperSlide>
            </Swiper>
        </section>        
    )
}

export default Portfolio;