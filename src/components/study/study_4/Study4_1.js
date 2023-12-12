import StudyCategory from '../StudyCategory';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Study4_1() {
    const html = 
    `<p>My cat is cute</p>`;

    const html2 = 
    `<p>My cat is <strong>very</strong> cute</p>`;

    const html3 = 
    `<img src="images/cat.png" alt="test image">`;

    return(
        <section className="studyConts">
            <div className="inner">
                <StudyCategory />
                <main>
                    <div className="topConts"></div>
                    <h2 className="constTit">HTML 기초</h2>
                    <div className='studyContents'>
                        <br/>
                        <h6>HTML이란?</h6>
                        <p>콘텐츠의 구조를 정의하는 마크업 언어. 콘텐츠를 태그로 감싸는 등 특정한 방식으로 동작하는 일련의 요소로 이루어져 있음.</p>
                        <br/><br/>
                        <h6>구문 예시</h6>
                        <SyntaxHighlighter language="html" style={prism}>
                            {html}
                        </SyntaxHighlighter>
                        <p>
                            여는태그, 닫는태그, 콘텐츠, 요소(이 모든것들이 요소)<br/>
                            요소는 p class="editor-note"처럼 속성도 가질 수 있음. <br/>
                            속성에는 요소 이름, 속성 이름 뒤 등호(=), 속성 값 앞뒤 열고닫는 인용부호("또는')가 있어야 함.<br/>
                        </p>
                        <br/><br/>
                        <h6>요소 중첩</h6>
                        <SyntaxHighlighter language="html" style={prism}>
                            {html2}
                        </SyntaxHighlighter>
                        <p>
                            위처럼 요소를 중첩시킬 수도 있음.<br/>
                        </p>
                        <br/><br/>
                        <h6>빈 요소</h6>
                        <p>
                        특정 요소는 내용을 갖지 않음. 아래 img가 그 예시.<br/>
                        </p>
                        <SyntaxHighlighter language="html" style={prism}>
                            {html3}
                        </SyntaxHighlighter>
                        <p>
                            src : source속성. 이미지 파일의 경로<br/>
                            alt : 대안 속성. 무언가 잘못되어서 이미지를 표시할 수 없는 경우, 'test image'가 보여질 것임.<br/>
                        </p>
                        <br/><br/>
                        <h6>그 밖의 기본 태그</h6>
                        <p>
                            !DOCTYPE html : 필수 서문.<br/>
                            html : 페이지 전체의 콘텐츠를 감쌈. root요소라고도 함.<br/>
                            head :  HTML페이지에 포함하고싶은 모든 재료를 위한 컨테이너 역할. 페이지 설명, CSS, 문자 집합선언 등...<br/>
                            meta charset="utf-8" : 문서가 사용해야 할 문자 집합을 utf-8로 설정. 대부분의 문자가 포함된 기록언어임.<br/>
                            meta name="viewport" content="width=device-width" : 뷰포트 요소. 뷰포트의 너비에서 페이지가 렌더링하도록하고, 모바일 브라우저가 뷰포트보다 넓은 페이지를 렌더링한 후 축소하는 것을 방지.<br/>
                            title : 페이지의 제목 설정<br/>
                            body : 페이지에 방문한 웹 사용자들에게 보여주길 원하는 컨텐츠를 담고 있음.<br/>
                            h1 : 제목 요소. 1~6까지 존재.<br/>
                            p : 문단<br/>
                            ul : 순서없는 목록<br/>
                            ol : 순서 있는 목록<br/>
                            li : 목록의 각 항목<br/>
                            a : 링크. a href="http://~"로 웹주소 연결 가능.<br/>
                        </p>
                        <h5 className='from'>
                            출처 :&nbsp;&nbsp;
                            <span className='fromAddress'>
                            https://developer.mozilla.org/ko/docs/Learn/Getting_started_with_the_web/HTML_basics
                            </span>
                        </h5>
                        <br />
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Study4_1;