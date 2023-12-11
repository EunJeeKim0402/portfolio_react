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
                <SwiperSlide className="swiperImg">
                    {/*<img src={`${url}/img/reactPortfolio.jpg`} alt="img1" className="img1" />*/}
                    <img src={`${url}/img/reactPortfolio.JPG`} alt="img1" className="img1" />
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
                        <span>·Design ·Frontend</span><br/><br/><br/> 
                        <a href="https://github.com/EunJeeKim0402/portfolio_react">source code</a>
                        <br/><br/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiperImg">
                    <img src={`${url}/img/React클론코딩.JPG`} alt="img2" className="img2" />
                    <br />
                    <h2>React 클론코딩 (노마드코더)</h2>
                    <div className="swiperText">
                        <span>노마드코더 트위터 클론코딩입니다.</span><br/>   
                        <span>React와 firebase 이용하여 제작했습니다.</span><br/><br/>                       
                        <b># Period</b>&nbsp;&nbsp;
                        <span>2023.07~2023.07</span><br/>    
                        <b># Tech</b>&nbsp;&nbsp;
                        <span>React HTML CSS firebase</span><br/> 
                        <b># My Work</b>&nbsp;&nbsp;  
                        <span>·Frontend</span><br/><br/> <br/>
                        <a href="https://github.com/EunJeeKim0402/nwitter">source code</a>
                        <br/><br/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiperImg">
                    <img src={`${url}/img/dart클론코딩.JPG`} alt="img3" className="img3" />
                    <br />
                    <h2>Flutter 클론코딩 (노마드코더)</h2>
                    <div className="swiperText">
                        <span>노마드코더 웹툰앱 클론코딩입니다.</span><br/>   
                        <span>flutter와 dart를 이용하여 제작했습니다.</span><br/><br/>                       
                        <b># Period</b>&nbsp;&nbsp;
                        <span>2023.02~2023.03</span><br/>    
                        <b># Tech</b>&nbsp;&nbsp;
                        <span>Flutter Dart</span><br/> 
                        <b># My Work</b>&nbsp;&nbsp;  
                        <span>·Frontend</span><br/><br/><br/>
                        <a href="https://github.com/EunJeeKim0402/toonflix3">source code</a>
                        <br/><br/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiperImg">
                    <img src={`${url}/img/workpeople.jpg`} alt="img4" className="img4" />
                    <br />
                    <h2>WorkPeople</h2>
                    <div className="swiperText">
                        <span>파이널프로젝트로 제작한 사내 인트라넷입니다.</span><br/>   
                        <span>'프로젝트' 파트의 프론트/백을 담당했습니다.</span><br/><br/>                       
                        <b># Period</b>&nbsp;&nbsp;
                        <span>2022.08~2022.09</span><br/>    
                        <b># Tech</b>&nbsp;&nbsp;
                        <span>Javascript Java jQuery Ajax SQL SpringFramework</span><br/> 
                        <b># My Work</b>&nbsp;&nbsp;  
                        <span>·Frontend ·Backend</span><br/><br/><br/>
                        &nbsp;<a className="img4a" href="https://github.com/EunJeeKim0402/workpeopleProject">source code</a>
                        <br/><br/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiperImg">
                    <img src={`${url}/img/Leer.JPG`} alt="img5" className="img5" />
                    <br />
                    <h2>Leer</h2>
                    <div className="swiperText">
                        <span>세미프로젝트로 제작한 잡지 쇼핑몰입니다.</span><br/>   
                        <span>admin파트를 담당했습니다.</span><br/><br/>                       
                        <b># Period</b>&nbsp;&nbsp;
                        <span>2022.06~2022.07</span><br/>    
                        <b># Tech</b>&nbsp;&nbsp;
                        <span>Javascript Java jQuery Ajax SQL</span><br/> 
                        <b># My Work</b>&nbsp;&nbsp;  
                        <span>·Frontend ·Backend</span><br/><br/><br/>
                        <a href="https://github.com/EunJeeKim0402/leerProject-1">source code</a>
                        <br/><br/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>        
    )
}

export default Portfolio;