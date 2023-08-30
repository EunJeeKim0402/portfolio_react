import React from 'react';
import '../../scss/_main.scss';
import { NavLink } from 'react-router-dom';

function MainConts2() {
    const url = process.env.PUBLIC_URL;
    return(
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
    )
}

export default MainConts2;