import React, { useEffect, useRef } from 'react';
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
                            가나다라
                        </li>
                    </ul>
                    <h2>React</h2>
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

                    <h2>Computer Science</h2>
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

                    <h2>HTML/CSS</h2>
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





