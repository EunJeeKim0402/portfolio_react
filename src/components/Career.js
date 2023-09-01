function Career() {
    const url = process.env.PUBLIC_URL;
    return(
        <section className='career'>
            <div className='inner'>
                <h1>IT Career</h1>
            </div>
            <div className="inner1">
                <ul className='conts'>
                    <li className='process'>
                        <div className='item'>
                            <div className='left'>
                                <div className='num'>01.</div>
                            </div>
                            <div className='conts'>
                                <h2>메가스터디 IT아카데미</h2>
                                <p>(2022.01 ~ 2022.02) 파이썬, C++ 직장인 주말 코딩교육.</p>
                            </div>
                        </div>
                    </li>                
                </ul>
            </div>

            <div className="inner2">
                <ul className='conts'>
                    <li className='process' id="process2">
                        <div className='item'>
                            <div className='conts'>
                                <h2>React 클론코딩 (노마드코더)</h2>                                
                                <p>(2023.07 ~ 2023.07) React로 만든 트위터.</p>
                            </div>
                            <div className='left'>
                                <div className='num'>04.</div>
                                <span className='arrow'></span>   
                            </div>
                        </div>
                        <div className='item'>
                            <div className='conts'>
                                <h2>React 클론코딩 (노마드코더)</h2>                                
                                <p>(2023.07 ~ 2023.07) React로 만든 트위터.</p>
                            </div>
                            <div className='left'>
                                <div className='num'>04.</div>
                                <span className='arrow'></span>   
                            </div>
                        </div>
                        <div className='item'>
                            <div className='conts'>
                                <h2>React 클론코딩 (노마드코더)</h2>                                
                                <p>(2023.07 ~ 2023.07) React로 만든 트위터.</p>
                            </div>
                            <div className='left'>
                                <div className='num'>04.</div>
                                <span className='arrow'></span>   
                            </div>
                        </div>
                        <div className='item'>
                            <div className='conts'>
                                <h2>React 클론코딩 (노마드코더)</h2>                                
                                <p>(2023.07 ~ 2023.07) React로 만든 트위터.</p>
                            </div>
                            <div className='left'>
                                <div className='num'>04.</div>
                                <span className='arrow'></span>   
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='inner' id="nonIt">
                <h1>Non IT Career</h1>
            </div>
            {/* <img src={`${url}/img/rabbit.png`} alt="rabbit" className='bg3' /> */}
        </section>
    )
}

export default Career;