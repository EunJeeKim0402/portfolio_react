import StudyCategory from '../StudyCategory';

function Study1_2() {
    return(
        <section className="studyConts">
            <div className="inner">
                <StudyCategory />
                <main>
                    <div className="topConts"></div>
                    <h2 className="constTit">React의 특징</h2>
                    <div className='studyContents'>
                        <br/>
                        <h6>React란?</h6>
                        <p>
                            React란 Facebook(현재 Meta)에서 만든 Javascript 사용자인터페이스(UI) 라이브러리.<br/>
                            UI를 자동으로 업데이트해주기 때문에 UI를 빠르게 업데이트할 수 있음.<br/>
                            가상 돔(Virtual Dom)을 통해 재사용이 필요한 기능을 언제든지 필요한 곳에서 호출하여, 반복적인 코드 작성 없이 사용할 수 있도록 해줌.<br/><br/>
                            * 프레임워크와 라이브러리의 차이 : 둘 다 개발을 도와주는 도구이나 제어의 주체가 누구인가 하는 점에 차이가 있음.<br/>
                            &nbsp;&nbsp;프레임워크는 개발자가 어떻게 개발을 해야 하는지에 대한 지침을 제공하므로 개발자는 프레임워크의 규칙을 따라야 하고, <br/>
                            &nbsp;&nbsp;라이브러리는 개발자가 필요한 라이브러리를 활용하는 방식으로 개발자에게 제어권이 주어짐.<br/>
                        </p>    
                        <br/><br/>
                        <h6>React의 특징</h6>
                        <p>
                            - 자바스크립트 기반의 문법을 사용(앵글러/뷰는 자신들만의 문법 사용)<br/>
                            - 필요한 부분에만 적용 가능해서 가볍고 유연함.<br/>
                            &nbsp;&nbsp;다른 프레임워크나 라이브러리와도 혼용 가능.<br/>                            
                            - 웹 뿐 아니라 다른 플랫폼에서도 활용 가능.<br/>
                            &nbsp;&nbsp;리액트 네이티브에서 안드로이드와 아이폰 둘 다 혼용 가능.<br/>
                            - 가상 DOM을 사용하여 신속한 UI업데이트/성능 최적화 가능.<br/>
                            - 단반향 데이터 흐름. 때문에 성능 저하 없이 DOM을 렌더링시켜줌.<br/><br/>
                            <img src='https://ems.elancer.co.kr/99_upload/Append/T_Blog/editor/2023071901390716012.jpg' /><br/><br/>
                            - 컴포넌트 기반 아키텍처를 채택하고 있음.<br/>
                            &nbsp;&nbsp;컴포넌트 기반이란, 독립적인 컴포넌트를 레고 블록처럼 만들어가는 구조.<br/>
                            - 자바스크립트와 XML을 조합한 JSX 문법을 사용. 컴포넌트를 선언적으로 작성.<br/>
                            &nbsp;&nbsp;명령형은 How(어떻게), 선언적 프로그래밍은 What(무엇)을 해야하는지를 지정하는 방식.<br/><br/><br/>
                        </p>
                        <h6>React로 얻을 수 있는 이점</h6>
                        <p>
                        - 크로스 플랫폼 개발 가능.<br/>
                        - 가상 DOM과 최적화 기법을 활용하여 성능 향상 가능.<br/>
                        - 컴포넌트 기반 개발을 지원하여 코드의 가독성이 높아지고 유지보수 용이. 대규모 프로젝트에 용이함.<br/>
                        </p>
                        <h5 className='from'>
                            출처 :&nbsp;&nbsp;
                            <span className='fromAddress'>
                                https://www.elancer.co.kr/blog/view?seq=167
                            </span>
                            <span className='fromAddress'>
                                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                            <span className='fromAddress'>
                                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                            <span className='fromAddress'>
                                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                            <span className='fromAddress'>
                                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                        </h5>
                        <br />
                        {/* <h6></h6>
                        <p>
                            
                        </p> */}
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Study1_2;