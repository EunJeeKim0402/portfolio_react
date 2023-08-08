//import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/scrollbar';
import 'swiper/scss/pagination';

import SwiperCore, { Autoplay, Navigation, Pagination, A11y, Keyboard } from 'swiper';
//import { HashLink } from "react-router-hash-link";
SwiperCore.use([Autoplay, Keyboard, Navigation, Pagination, A11y]);

function Department() {
    return(

        <section className="departmentConts">
            <h1 className="tit">
                <span>the</span> Eunjee's <br/> Portfolio
            </h1>
            <img src="../image/workpeople" alt="Work People" />
            {/* <img src={workpeopleImage} alt="Work People" /> */}

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, Ally]}
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
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slice change')}
            >
                <SwiperSlide>1</SwiperSlide>
                <SwiperSlide>2</SwiperSlide>
                <SwiperSlide>3</SwiperSlide>
                <SwiperSlide>4</SwiperSlide>
            </Swiper>
        </section>        
        
    )
}

export default Department;