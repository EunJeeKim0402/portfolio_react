import React from 'react';
import StudyCategory from './StudyCategory';
import Fade from 'react-reveal/Fade';
import { NavLink } from 'react-router-dom';

const studies = [
  { to: '/study3_1', title: 'Git 버전관리' },
  { to: '/study3_2', title: '터미널 사용' },
  { to: '/study3_3', title: '자료구조/알고리즘' },
  { to: '/study3_4', title: 'Git/Github' },
  { to: '/study3_5', title: '라이센스' },
  { to: '/study3_6', title: '유의적 버전' },
  { to: '/study3_7', title: '호호' },
  { to: '/study3_8', title: '호호' },
  { to: '/study3_9', title: '호호' },
];

function StudyCS() {
  const sortedStudies = [...studies].sort((a, b) => a.to.localeCompare(b.to));

  return (
    <section className="studyConts">
      <div className="inner">
        <StudyCategory />
        <main>
          <div>
            <h1>CS페이지임</h1>
          </div>
          <br />
          {sortedStudies.map((study, index) => (
            <Fade key={index} delay={50 * index}>
              <NavLink to={study.to} className="">
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

export default StudyCS;
