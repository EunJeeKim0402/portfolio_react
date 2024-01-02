import StudyCategory from '../StudyCategory';
import React from 'react';

function Study1_2() {
    return(
        <section className="studyConts">
            <div className="inner">
                <StudyCategory />
                <main>
                    <div className="topConts"></div>
                    <h2 className="constTit">CSS 레이아웃</h2>
                    <div className='studyContents'>
                        <br/>
                        <h6>Floats</h6>
                        <p>텍스트 영역에 인라인 이미지를 표시할 수 있게 고안된 속성. 문서의 왼쪽에 사진이 들어가고 오른쪽에 글이 들어가는것처럼 속성을 어떻게 주느냐에 따라서 이미지 요소를 원하는 곳에 배치 가능.<br/></p>
                        <br/><br/>
                        <h6>Positioning</h6>
                        <p>
                            해당 엘리먼트가 페이지에 어떻게 위치할지를 지정하는 속성. 포지션에는 아래 속성이 있음.<br/>
                            static : 기본값. 엘리먼트에 따로 값을 지정하지 않으면 스태틱 값을 가짐. 위치가 지정되지 않았다는 의밍이기도함<br/>
                            relative : top, right과 같은 속성을 주지 않으면 스태틱이랑 동일하게 위치. top : -20px와 같은 속성부여 가능.<br/>
                            fixed : 고정 엘리먼트. 사용자에게 비춰지는 화면을 기준으로 위치가 지정됨. 페이지가 넘어가도 동일위치.<br/>
                            absolute : left, top, right, bottom 값으로 전 화면을 아무런 제약 없이 쓸 수 있는 것<br/>
                        </p>
                        <br/><br/>
                        <h6>Display</h6>
                        <p>
                            페이지의 레이아웃을 결정하는 속성. 모든 HTML 엘리먼트는 display 값을 갖고 있음.아래는 자주 사용되는 5가지.<br/>
                            block : 하나의 줄을 차지. 최대한 넓은 가로넓이. div, p, form, header, section 등...<br/>
                            inline : 특정 텍스트를 감싸는 형태. span, a 등...<br/>
                            inline-block : 줄바꿈 없이 다른 인라인 엘리먼트와 나란히 배치됨. button 등<br/>
                            flex : 화면의 비율을 기준으로 레이아웃을 구성할 수 있는 최신 레이아웃 속성.<br/>
                            none : 화면`에 표시되지 않음. 즉, 화면의 공간을 차지하지 않음. script 등...<br/>
                        </p>
                        <br/><br/>
                        <h6>Box Model</h6>
                        <img src='https://www.tcpschool.com/lectures/img_css_boxmodel.png' />
                        <p>
                            1. 내용(content) : 텍스트나 이미지가 들어있는 박스의 실질적인 내용 부분<br/>
                            2. 패딩(padding) : 내용과 테두리 사이의 간격입니다. 패딩은 눈에 보이지 않음<br/>
                            3. 테두리(border) : 내용와 패딩 주변을 감싸는 테두리<br/>
                            4. 마진(margin) : 테두리와 이웃하는 요소 사이의 간격. 마진은 눈에 보이지 않음.<br/>
                        </p>
                        <br/><br/>
                        <h6>Flex Box</h6>
                        <p>
                            레이아웃 배치 전용 기능으로 고안됨. 아이템들을 가로방향으로 배치하고, 내용물의 width만큼만 차지하게됨(inline요소처럼). height는 컨테이너 높이만큼 늘어남. flex-direction을 통해서 아이템이 배치되는 축의 방향을 변경할 수도 있음. 컨테이너가 초과되었을 때 아이템 줄바꿈 처리도 설정 가능. <br/>
                        </p>
                        <h6>Grid</h6>
                        <p>
                            flex가 한 방향 레이아웃 시스템이라면, grid는 두방향(가로-세로) 레이아웃 시스템. 내용물 간 간격도 만들 수 있고, 아이템 줄바꿈도 가능. 개별 아이템만 조정하는것도 가능. <br/>
                        </p>
                        <h5 className='from'>
                            출처 :&nbsp;&nbsp;
                            <span className='fromAddress'>
                                https://studiomeal.com/archives/282
                            </span>
                            <span className='fromAddress'>
                                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                https://joshua1988.github.io/web-development/css/layout-basic/
                            </span>
                            <span className='fromAddress'>
                                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                https://www.tcpschool.com/css/css_boxmodel_boxmodel
                            </span>
                            <span className='fromAddress'>
                                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                https://studiomeal.com/archives/533
                            </span>
                            <span className='fromAddress'>
                                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                https://studiomeal.com/archives/197
                            </span>
                        </h5>
                        <br />
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Study1_2;