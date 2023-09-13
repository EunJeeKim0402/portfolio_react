import React, { useState } from 'react';
import { Flip, Fade, Slide, Reveal } from 'react-reveal';

function Career() {
    const url = process.env.PUBLIC_URL;
    return(
        <section className='career'>
            <div className='inner'>
                <h1>IT Career</h1>
            </div>
            <div className="inner1">
                <ul className='conts'>
                    <li className='process'>
                        <div className='item'>
                            <div className='left'>
                                <div className='num'>01.</div>
                            </div>
                            <div className='conts'>
                                <Reveal cascade>
                                    <Flip top>
                                        <h2>혜인</h2>
                                        <p>(2022.12 ~ 2023.07) 무역회사 전산팀, ERP 개발</p>
                                    </Flip>
                                </Reveal>
                            </div>
                        </div>
                    </li>                
                </ul>
            </div>

            <div className="inner2">
                <ul className='conts'>
                    <li className='process2'>
                        <div className='item'>
                            <div className='conts'>
                                <Reveal cascade>
                                    <Flip top delay={100}>
                                        <h2>효성첨단소재</h2>                                
                                        <p>(2021.04 ~ 2022.04) 수출입 사무담당</p>
                                    </Flip>
                                </Reveal>
                            </div>
                            <div className='left'>
                                <div className='num'>03.</div>
                                <span className='arrow'></span>   
                            </div>
                        </div>
                        <div className='item'>
                            <div className='conts'>
                                <Reveal cascade>
                                    <Flip top delay={200}>
                                        <h2>히타치하이테크코리아</h2>                                
                                        <p>(2019.06 ~ 2020.09) 수출입 사무담당</p>
                                    </Flip>
                                </Reveal>
                            </div>
                            <div className='left'>
                                <div className='num'>02.</div>
                                <span className='arrow'></span>   
                            </div>
                        </div>
                        <div className='item'>
                            <div className='conts'>
                                <Reveal cascade>
                                    <Flip top delay={300}>
                                        <h2>서울시관광협회</h2>                                
                                        <p>(2016.08 ~ 2018.08) 일본어 관광안내사(움직이는 안내소)</p>
                                    </Flip>
                                </Reveal>
                            </div>
                            <div className='left'>
                                <div className='num'>01.</div>
                                <span className='arrow'></span>   
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='inner' id="nonIt">
                <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Non</h1>
                <h1>IT Career</h1>
            </div>
            {/* <img src={`${url}/img/rabbit.png`} alt="rabbit" className='bg3' /> */}
        </section>
    )
}

export default Career;