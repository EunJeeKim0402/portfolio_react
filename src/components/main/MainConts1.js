import React from 'react';
import '../../scss/_main.scss';
import { NavLink } from 'react-router-dom';

function MainConts1() {
    const url = process.env.PUBLIC_URL;
    return(
        <section className="mainConts1">
                <div className="inner">
                    <div className="topText">안녕하세요! 김은지의 portfolio입니다.</div>
                    <h2>매일 발전해나가는 <br></br>주니어 개발자입니다.</h2>
                    <div className="bottomText">
                        저는 직장인 코딩 취미반을 듣다 개발에 큰 매력을 느껴 개발자를 꿈꾸었습니다.<br/>
                        구디아카데미에서 8개월간 수업을 듣고 erp개발자로 근무하였습니다만,<br/>
                        좀 더 폭넓은 개발을 하고 싶어 프론트엔드에 도전하게 되었습니다.<br/><br/>

                        저는 꾸준하게 공부하는 스타일이며 팀원들과의 협업을 중시합니다.<br/>
                        넘어지는 것을 두려워하지 않고 계속 발전해나가는 프론트엔드 개발자로 성장하겠습니다.
                    </div>
                    <br />
                    <div className='icons'>
                        <a href="https://github.com/EunJeeKim0402"><i className="fa-brands fa-github"></i></a>&nbsp;&nbsp;&nbsp;
                        <a href="https://blog.naver.com/adserina"><i className="fa-brands fa-blogger-b"></i></a>&nbsp;&nbsp;&nbsp;
                        <a href="https://www.notion.so/Clean-Code-4b55cc0e9cea42edb8b728c9ae5e202f"><i className="fa-regular fa-note-sticky"></i></a>
                    </div>
                    <br/>
                    <NavLink to="/portfolio" className="btn">see my project</NavLink>
                    <div className="imgWrap">
                        <img src={`${url}/img/eunjeeKim.jpg`} alt="eunjee" />
                    </div>
                </div>
            </section>
    )
}

export default MainConts1;