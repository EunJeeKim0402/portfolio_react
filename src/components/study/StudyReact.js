import React from 'react';
import StudyCategory from './StudyCategory';
import Fade from 'react-reveal/Fade';
import { NavLink } from 'react-router-dom';

function StudyReact() {
  return (
    <section className="studyConts">
      <div className="inner">
        <StudyCategory />
        <main>
            <div>
                <h1>React</h1>
            </div>
            <br />
            <Fade>
                <NavLink to="/study2_1" className="study2_1">
                    <div className="boardConts">
                        <div>
                            <h6>JSX와 선언형 프로그래밍</h6>
                        </div>
                    </div>
                </NavLink>
            </Fade>
            <Fade delay={50}>
                <NavLink to="/study2_2" className="study2_2">
                    <div className="boardConts">
                        <div>
                            <h6>스타일링, props</h6>
                        </div>
                    </div>
                </NavLink>
            </Fade>
            <Fade delay={100}>
                <NavLink to="/study2_3" className="study2_3">
                    <div className="boardConts">
                        <div>
                            <h6>이벤트와 useState</h6>
                        </div>
                    </div>
                </NavLink>
            </Fade>
            <Fade delay={150}>
                <NavLink to="/study2_4" className="study2_4">
                    <div className="boardConts">
                        <div>
                            <h6>input과 state/props와 state</h6>
                        </div>
                    </div>
                </NavLink>
            </Fade>
            <Fade delay={200}>
                <NavLink to="/study2_5" className="study2_5">
                    <div className="boardConts">
                        <div>
                            <h6>호호</h6>
                        </div>
                    </div>
                </NavLink>
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
  );
}

export default StudyReact;
