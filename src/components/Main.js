import React from 'react';
import '../scss/_main.scss';
import { NavLink } from 'react-router-dom';

function Main() {

    const url = process.env.PUBLIC_URL;

    return(
        <>
            <section className="mainConts1">
                <div className="inner">
                    <div className="topText">안녕하세요! 김은지의 portfolio입니다.</div>
                    <h2>매일 발전해나가는 <br></br>주니어 개발자입니다.</h2>
                    <div className="bottomText">
                        저는 직장인 코딩 취미반을 듣다가 큰 매력을 느껴 개발자를 꿈꾸게 되었습니다.<br/>
                        구디아카데미에서 풀스택 수업을 듣고 8개월간 erp개발자로 근무하였습니다만,<br/>
                        좀 더 폭넓은 개발을 하고 싶어 새롭게 프론트엔드로 도전하게 되었습니다.<br/><br/>

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
            <section className='mainConts2'>
                <div className='inner'>
                    <h1 className='tit'>My Skills</h1>
                    <ul className='conts'>
                        <li className='item'>
                            <div className='top'>
                                <span className='num'></span>
                            </div>
                            <h2>Frontend</h2>
                            <hr />
                            <p className='skills'>
                                <img src={`${url}/img/html5.svg`} alt="html" />
                                <img src={`${url}/img/css3.svg`} alt="css" />
                                <img src={`${url}/img/javascript.svg`} alt="javascript" />
                                <img src={`${url}/img/react.svg`} alt="react" />
                                <img src={`${url}/img/vuejs.svg`} alt="vuejs" />
                                <img src={`${url}/img/dart.svg`} alt="dart" />
                                <img src={`${url}/img/flutter.svg`} alt="flutter" />
                                <img src={`${url}/img/jquery.svg`} alt="jquery" />
                                <img src={`${url}/img/jsp.svg`} alt="jsp" />
                                <img src={`${url}/img/ajax-icon.svg`} alt="ajax" />
                                <img src={`${url}/img/bootstrap.svg`} alt="bootstrap" />
                            </p>                        
                        </li>
                        <li className='item'>
                            <div className='top'>
                                <span className='num'></span>
                            </div>
                            <h2>Backend</h2>
                            <hr />
                            <p>
                                <img src={`${url}/img/java.svg`} alt="java" />
                                <img src={`${url}/img/Spring_Boot.svg`} alt="spring" />
                                <img src={`${url}/img/firebase.svg`} alt="firebase" />
                            </p>                                          
                        </li>
                        <li className='item'>
                            <div className='top'>
                                <span className='num'></span>
                            </div>
                            <h2>Database</h2>
                            <hr />
                            <p>
                                <img src={`${url}/img/oracle.svg`} alt="oracle" />
                                <img src={`${url}/img/mssql.svg`} alt="mssql" />
                                <img src={`${url}/img/mysql.svg`} alt="mysql" />
                            </p> 
                        </li>
                        <li className='item'>
                            <div className='top'>
                                <span className='num'></span>
                            </div>
                            <h2>Version Control</h2>
                            <hr />
                            <p>
                                <img src={`${url}/img/git.svg`} alt="git" />
                                <img src={`${url}/img/github.svg`} alt="github" />
                            </p> 
                        </li>
                    </ul>
                </div>                
                <img src={`${url}/img/rabbit.png`} alt="rabbit" className='bg2' />
            </section>
            <section className='mainConts3'>
                <div className='inner'>
                    <h1>Activity</h1>
                </div>
                <ul className='conts'>
                    <li className='process'>
                        <div className='left'>
                            <div className='num'>01.</div>
                            <div className='conts'>
                                <h2>제일 최신 활동</h2>
                                <p>최신최신</p>
                            </div>
                        </div>
                    </li>
                    <li className='process'>
                        <div className='left'>
                            <div className='num'>01.</div>
                            <div className='conts'>
                                <h2>제일 최신 활동</h2>
                                <p>최신최신</p>
                            </div>
                        </div>
                    </li>
                    <li className='process'>
                        <div className='left'>
                            <div className='num'>01.</div>
                            <div className='conts'>
                                <h2>제일 최신 활동</h2>
                                <p>최신최신</p>
                            </div>
                        </div>
                    </li>
                    <li className='process'>
                        <div className='left'>
                            <div className='num'>01.</div>
                            <div className='conts'>
                                <h2>제일 최신 활동</h2>
                                <p>최신최신</p>
                            </div>
                        </div>
                    </li>
                    <li className='process'>
                        <div className='left'>
                            <div className='num'>01.</div>
                            <div className='conts'>
                                <h2>제일 최신 활동</h2>
                                <p>최신최신</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </>

    )
}

export default Main;