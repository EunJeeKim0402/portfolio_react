import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import StudyCategory from './StudyCategory';
import Fade from 'react-reveal/Fade';
import { NavLink } from 'react-router-dom';

function Study() {
    return (
        <section className="studyConts">
            <div className="inner">
                <StudyCategory />
                <main>
                    <div className="topConts">
                    </div>
                    <h2 className="constTit">Board</h2>
                    <ul className="studyConts1">
                        {/* <NavLink to="/study" className="studyLink">Study board</NavLink> */}
                        <li className="studyWrap1-1">
                            <NavLink to="/study1_1" className="study1_1">
                                <h6>Javascript 기본지식</h6>
                                <p>
                                    - 정의
                                    - 문법 
                                </p>
                                <img src='https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_light_js_icon_130458.png'></img>
                            </NavLink>
                        </li>
                        <li className="studyWrap1-2">
                            <NavLink to="/study1_2" className="study1_2">
                                <h6>React의 특징</h6>
                                <p>
                                    - 특징
                                    - 장점
                                </p>
                                <img src='https://blog.kakaocdn.net/dn/c5yaqz/btqXXVBqHvp/SEBAeKYrkouV6xZGcWDa9k/img.webp'></img>
                            </NavLink>
                        </li>
                    </ul>
                    <div className='studyTop2'>
                        <h2>React</h2>
                        <NavLink to="/study/react" className="studyMore">
                            더보기 <FontAwesomeIcon icon={faAngleRight} />
                        </NavLink>
                    </div>
                    <ul className="studyConts2">
                        
                        <Fade bottom delay={700}>
                            <li className="studyWrap2-1">
                                <div className="tit">마바사</div>
                            </li>
                        </Fade>
                        <Fade bottom delay={500}>
                            <li className="studyWrap2-2">
                                <div className="tit">마바사</div>
                            </li>
                        </Fade>
                        <Fade bottom delay={400}>
                            <li className="studyWrap2-3">
                                <div className="tit">마바사</div>
                            </li>
                        </Fade>
                        <Fade bottom delay={300}>
                            <li className="studyWrap2-4">
                                <div className="tit">마바사</div>
                            </li>
                        </Fade>
                    </ul>
                    <br />

                    <div className='studyTop3'>
                        <h2>Computer Science</h2>
                        <NavLink to="/study/cs" className="studyMore">
                            더보기 <FontAwesomeIcon icon={faAngleRight} />
                        </NavLink>
                    </div>
                    <ul className="studyConts3">
                        <Fade bottom delay={900}>
                            <li className="studyWrap3-1">
                                <div className="tit">마바사</div>
                            </li>
                        </Fade>
                        <Fade bottom delay={800}>
                            <li className="studyWrap3-2">
                                <div className="tit">마바사</div>
                            </li>
                        </Fade>
                        <Fade bottom delay={700}>
                            <li className="studyWrap3-3">
                                <div className="tit">마바사</div>
                            </li>
                        </Fade>
                        <Fade bottom delay={600}>
                            <li className="studyWrap3-4">
                                <div className="tit">마바사</div>
                            </li>
                        </Fade>
                    </ul>
                    <br />

                    <div className='studyTop4'>
                        <h2>HTML/CSS</h2>
                        <NavLink to="/study/html" className="studyMore">
                            더보기 <FontAwesomeIcon icon={faAngleRight} />
                        </NavLink>
                    </div>
                    <ul className="studyConts4">
                        <Fade bottom delay={600}>
                            <li className="studyWrap4-1">
                                <div className="tit">마바사</div>
                            </li>
                        </Fade>
                        <Fade bottom delay={700}>
                            <li className="studyWrap4-2">
                                <div className="tit">마바사</div>
                            </li>
                        </Fade>
                        <Fade bottom delay={800}>
                            <li className="studyWrap4-3">
                                <div className="tit">마바사</div>
                            </li>
                        </Fade>
                        <Fade bottom delay={900}>
                            <li className="studyWrap4-4">
                                <div className="tit">마바사</div>
                            </li>
                        </Fade>
                    </ul>
                    <br />
                    <br />
                </main>
            </div>
        </section>
    );
}

export default Study;





