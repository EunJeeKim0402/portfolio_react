import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
//import 'swiper/css/scrollbar'; 
import "swiper/css/autoplay";

import SwiperCore, { Autoplay, Navigation, Pagination, A11y, Keyboard } from 'swiper';
//import { HashLink } from "react-router-hash-link";
SwiperCore.use([Autoplay, Keyboard, Navigation, Pagination, A11y]);

//import SwiperCore, { Autoplay, Navigation, Pagination, A11y, Scrollbar, Keyboard } from 'swiper'; // Keyboard도 추가
//SwiperCore.use([Autoplay, Keyboard, Navigation, Pagination, A11y, Scrollbar]); // Scrollbar 추가

function Department() {
    

    let url = process.env.PUBLIC_URL;

    return(

        <section className="departmentConts">
            <h1 className="tit">
                <span>the</span> Eunjee's <br/> Portfolio
            </h1>
            {/* <img src="../image/workpeople" alt="Work People" /> */}

            <Swiper
                className='departSwiper'
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={3}
                keyboard={{
                    "enabled": true
                }}
                breakpoints={{
                    "769": {
                        "slidesPerView": 2,
                        "slidesPerGroup": 2
                    }
                }}
                navigation={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slice change')}
            >
                <SwiperSlide><img src={`../image/workpeople`} alt="img1" /></SwiperSlide>
                <SwiperSlide><img src={`../image/workpeople`} alt="img1" /></SwiperSlide>
                <SwiperSlide><img src={`../image/workpeople`} alt="img1" /></SwiperSlide>
                <SwiperSlide><img src={`../image/workpeople`} alt="img1" /></SwiperSlide>
                <SwiperSlide><img src={`../image/workpeople`} alt="img1" /></SwiperSlide>
            </Swiper>
        </section>        
        
    )
}

export default Department;