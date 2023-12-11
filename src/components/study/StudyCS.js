import React from 'react';
import StudyCategory from './StudyCategory';
import Fade from 'react-reveal/Fade';
import { NavLink } from 'react-router-dom';

function StudyCS() {
    return(
        <section className="studyConts">
            <div className="inner">
                <StudyCategory />
                <main>
                <div>
                        <h1>CS페이지임</h1>
                    </div>
                    <br />
                    <Fade>
                        <NavLink to="/" className="">
                            <div className="boardConts">
                                <div>
                                    <h6>CS</h6>
                                </div>
                            </div>
                        </NavLink>
                    </Fade>
                    <Fade delay={50}>
                        <NavLink to="/" className="">
                            <div className="boardConts">
                                <div>
                                    <h6>CS</h6>
                                </div>
                            </div>
                        </NavLink>
                    </Fade>
                    <Fade delay={100}>
                        <div className="boardConts">
                            <div>
                                <h6>호호</h6>
                            </div>
                        </div>
                    </Fade>
                    <Fade delay={150}>
                        <div className="boardConts">
                            <div>
                                <h6>호호</h6>
                            </div>
                        </div>
                    </Fade>
                    <Fade delay={200}>
                        <div className="boardConts">
                            <div>
                                <h6>호호</h6>
                            </div>
                        </div>
                    </Fade>
                    <Fade delay={250}>
                        <div className="boardConts">
                            <div>
                                <h6>호호</h6>
                            </div>
                        </div>
                    </Fade>
                    <Fade delay={300}>
                        <div className="boardConts">
                            <div>
                                <h6>호호</h6>
                            </div>
                        </div>
                    </Fade>
                    <Fade delay={350}>
                        <div className="boardConts">
                            <div>
                                <h6>호호</h6>
                            </div>
                        </div>
                    </Fade>
                    <Fade delay={400}>
                        <div className="boardConts">
                            <div>
                                <h6>호호</h6>
                            </div>
                        </div>
                    </Fade>
                </main>
            </div>
        </section>
    )
}

export default StudyCS;