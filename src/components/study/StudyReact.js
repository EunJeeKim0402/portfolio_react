import React from 'react';
import StudyCategory from './StudyCategory';
import Fade from 'react-reveal/Fade';
import { NavLink } from 'react-router-dom';

const studies = [
  { to: '/study2_1', title: 'JSX와 선언형 프로그래밍' },
  { to: '/study2_2', title: '스타일링, props' },
  { to: '/study2_3', title: '이벤트와 useState' },
  { to: '/study2_4', title: 'input과 state/props와 state' },
  { to: '/study2_5', title: '호호' },
  { to: '/study2_6', title: '호호' },
  { to: '/study2_7', title: '호호' },
  { to: '/study2_8', title: '호호' },
  { to: '/study2_9', title: '호호' },
];

function StudyReact() {
  const sortedStudies = [...studies].sort((a, b) => a.to.localeCompare(b.to));

  return (
    <section className="studyConts">
      <div className="inner">
        <StudyCategory />
        <main>
          <div>
            <h1>React</h1>
          </div>
          <br />
          {sortedStudies.map((study, index) => (
            <Fade key={index} delay={50 * index}>
              <NavLink to={study.to} className={study.to.replace('/', '')}>
                <div className="boardConts">
                  <div>
                    <h6>{study.title}</h6>
                  </div>
                </div>
              </NavLink>
            </Fade>
          ))}
        </main>
      </div>
    </section>
  );
}

export default StudyReact;
