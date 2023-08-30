import React from 'react';
import '../../scss/_main.scss';
import { NavLink } from 'react-router-dom';

function MainConts3() {
    const url = process.env.PUBLIC_URL;
    return(
        <section className='mainConts3'>
            <div className='inner'>
                <h1>Activity</h1>
            </div>
            <ul className='conts'>
                <li className='process'>
                    <div className='item'>
                        <div className='left'>
                            <div className='num'>04.</div>
                            <span className='arrow'></span>   
                        </div>
                        <div className='conts'>
                            <h2>React 클론코딩 (노마드코더)</h2>                                
                            <p>(2023.07 ~ 2023.07) React로 만든 트위터.</p>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='left'>
                            <div className='num'>03.</div>
                            <span className='arrow'></span>   
                        </div>
                        <div className='conts'>
                            <h2>flutter 클론코딩 (노마드코더)</h2>
                            <p>(2023.04 ~ 2023.05) dart, flutter로 제작한 웹툰 어플리케이션.</p>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='left'>
                            <div className='num'>02.</div>
                            <span className='arrow'></span>   
                        </div>
                        <div className='conts'>
                            <h2>구디 아카데미</h2>
                            <p>(2022.04 ~ 2022.09) java 중심 풀스택 국비학원수업.</p>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='left'>
                            <div className='num'>01.</div>
                            <span className='arrow'></span>   
                        </div>
                        <div className='conts'>
                            <h2>메가스터디 IT아카데미</h2>
                            <p>(2022.01 ~ 2022.02) 파이썬, C++ 직장인 주말 코딩교육.</p>
                        </div>
                    </div>
                </li>
                
            </ul>
            <img src={`${url}/img/rabbit.png`} alt="rabbit" className='bg3' />
        </section>
    )
}

export default MainConts3;