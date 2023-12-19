import React from 'react';
import StudyCategory from './StudyCategory';
import Fade from 'react-reveal/Fade';
import { NavLink } from 'react-router-dom';

function StudyHTML() {
    const items = [
        { to: "/study4_1", title: "HTML기초" },
        { to: "/study4_2", title: "HTML 폼/유효성 검사" },
        { to: "/study4_3", title: "HTML 규약(컨벤션)" },
        { to: "/study4_4", title: "CSS 기초" },
        { to: "/study4_5", title: "CSS 레이아웃" },
        { to: "/study4_6", title: "CSS 반응형디자인/미디어쿼리" },
    ];

    // to 값을 기준으로 항목을 오름차순으로 정렬
    items.sort((a, b) => b.to.localeCompare(a.to));

    return (
        <section className="studyConts">
            <div className="inner">
                <StudyCategory />
                <main>
                    <div>
                        <h1>HTML/CSS</h1>
                    </div>
                    <br />
                    {items.map((item, index) => (
                        <Fade key={index} delay={50 * index}>
                            <NavLink to={item.to} className={item.to}>
                                <div className="boardConts">
                                    <div>
                                        <h6>{item.title}</h6>
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

export default StudyHTML;
