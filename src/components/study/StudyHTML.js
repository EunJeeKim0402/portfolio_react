import React from 'react';
import StudyCategory from './StudyCategory';
import Fade from 'react-reveal/Fade';
import { NavLink } from 'react-router-dom';

function StudyHTML() {
    return(
        <section className="studyConts">
            <div className="inner">
                <StudyCategory />
                <main>
                    <div>
                        <h1>HTML페이지임</h1>
                    </div>
                    <br />
                    <Fade>
                        <NavLink to="/study4_1" className="/study4_1">
                            <div className="boardConts">
                                <div>
                                    <h6>HTML기초</h6>
                                </div>
                            </div>
                        </NavLink>
                    </Fade>
                    <Fade delay={50}>
                        <NavLink to="/study4_2" className="/study4_2">
                            <div className="boardConts">
                                <div>
                                    <h6>HTML 폼/유효성 검사</h6>
                                </div>
                            </div>
                        </NavLink>
                    </Fade>
                    <Fade delay={100}>
                        <NavLink to="/study4_3" className="/study4_3">
                            <div className="boardConts">
                                <div>
                                    <h6>HTML 규약(컨벤션)</h6>
                                </div>
                            </div>
                        </NavLink>
                    </Fade>
                    <Fade delay={150}>
                        <NavLink to="/study4_4" className="/study4_4">
                            <div className="boardConts">
                                <div>
                                    <h6>CSS 기초</h6>
                                </div>
                            </div>
                        </NavLink>
                    </Fade>
                    <Fade delay={200}>
                        <NavLink to="/" className="/">
                            <div className="boardConts">
                                <div>
                                    <h6>호호</h6>
                                </div>
                            </div>
                        </NavLink>
                    </Fade>
                    <Fade delay={250}>
                        <NavLink to="/" className="/">
                            <div className="boardConts">
                                <div>
                                    <h6>호호</h6>
                                </div>
                            </div>
                        </NavLink>
                    </Fade>
                    <Fade delay={300}>
                        <NavLink to="/" className="/">
                            <div className="boardConts">
                                <div>
                                    <h6>호호</h6>
                                </div>
                            </div>
                        </NavLink>
                    </Fade>
                    <Fade delay={350}>
                        <NavLink to="/" className="/">
                            <div className="boardConts">
                                <div>
                                    <h6>호호</h6>
                                </div>
                            </div>
                        </NavLink>
                    </Fade>
                    <Fade delay={400}>
                        <NavLink to="/" className="/">
                            <div className="boardConts">
                                <div>
                                    <h6>호호</h6>
                                </div>
                            </div>
                        </NavLink>
                    </Fade>
                </main>
            </div>
        </section>
    )
}

export default StudyHTML;