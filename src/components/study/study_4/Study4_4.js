import StudyCategory from '../StudyCategory';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Study1_2() {
    const css1 = 
    `    1.link 태그 이용 : <link hred="style.css" rel="stylesheet" type="text/css">
    2.import 선언 : <style type="text/css"> @import url(style.css); </style>
    3.head 태그 이용 : <style type="text/css"> .logo {color: #eeeeee;} </style>
    4.HTML에 인라인 스타일로 삽입 : <p style="height:100px; color:blue">`;

    return(
        <section className="studyConts">
            <div className="inner">
                <StudyCategory />
                <main>
                    <div className="topConts"></div>
                    <h2 className="constTit">CSS 기초</h2>
                    <div className='studyContents'>
                        <br/>
                        <h6>CSS?(Cascading Style Sheet)</h6>
                        <p>
                            문서의 콘텐츠와 레이아웃, 글꼴 및 시각적 요소로 표현되는 문서의 외관을 분리하기 위한 목적으로 만들어짐.<br/>
                            CSS는 세 개의 주 레벨이 있고, 현재 CSS1,2,3이 정의되어 있다.<br/>
                        </p>
                        <br/><br/>
                        <h6>CSS속성</h6>
                        <p>
                            - 여러 속성 값은 반드시 공백으로 구분<br/>
                            - 축약 표현 속성은 여러 속성 값을 하나의 간소화된 선언으로 적용할 수 있음<br/>
                            - 속성이 명시되지 않으면 해당 속성의 기본 값이 적용됨<br/>
                        </p>
                        <br/><br/>
                        <h6>CSS속성의 주요 위치</h6>
                        <SyntaxHighlighter language="html" style={prism}>
                            {css1}
                        </SyntaxHighlighter>
                        <br/><br/>
                        <h6>CSS기본문법</h6>
                        <p>
                            선택자 / 선언부로 나뉜다. 선언부는 다시 속성과 속성값으로 나뉜다.<br/>
                            h1 (color:blue; font-size:12px;)<br/>
                            선택자   선언부 : 속성/속성값<br/>
                        </p>
                        <br/><br/>
                        <h6>CSS우선순위</h6>
                        <p>
                            !important &gt; 인라인 스타일 &gt; 아이디 선택자 &gt; 클래스/속성/가상 선택자 &gt; 태그 선택자 &gt; 전체 선택자<br/>
                        </p>
                        <br/><br/>
                        <h6>삽입 위치 우선순위</h6>
                        <p>
                            1.head 요소안의 style 요소<br/>
                            2.style 요소안의 @import 문<br/>
                            3.link 요소로 연결된 CSS 파일<br/>
                            4.link 요소로 연결한 CSS 파일 안의 @import 문<br/>
                            5.최종 사용자가 연결한 CSS 파일<br/>
                            6.브라우저의 기본 스타일시트<br/>
                        </p>
                        <br/><br/>

                        <h5 className='from'>
                            출처 :&nbsp;&nbsp;
                            <span className='fromAddress'>
                                https://webdir.tistory.com/338
                            </span>
                        </h5>
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Study1_2;