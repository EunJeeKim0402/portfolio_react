import React from 'react';
import '../scss/_main.scss';

function Main() {

    const url = process.env.PUBLIC_URL;

    return(
        <>
            <section className="mainConts1">
                <div className="inner">
                    <div className="topText">안녕하세요! 김은지의 portfolio입니다.</div>
                    <h2>매일 발전해나가는 <br></br>주니어 개발자입니다.</h2>
                    <div className="bottomText">어쩌구저쩌구</div>
                    <a href="#test" className="btn">see my project</a>
                    <div className="imgWrap">
                        <img src={`${url}/img/eunjeeKim.jpg`} alt="eunjee" />
                        <h3>이름~정보~~</h3>
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
                            <p>jQuery Javascript...</p>                        
                        </li>
                    </ul>
                </div>                
            </section>
        </>

    )
}

export default Main;