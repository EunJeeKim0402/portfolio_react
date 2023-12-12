import StudyCategory from '../StudyCategory';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Study4_2() {
    const html2 = 
    `<body>
        <form action="" method="" enctype="">
            <input type="text" name="test"> <br><br>
            <input type="submit">
        </form>
    </body>`;

    const html3 = 
    `<label for="email">이메일:</label> 
    <input type="email" id="email" name="email" required>`;

    return(
        <section className="studyConts">
            <div className="inner">
                <StudyCategory />
                <main>
                    <div className="topConts"></div>
                    <h2 className="constTit">HTML 폼/유효성 검사</h2>
                    <div className='studyContents'>
                        <br/>
                        <h6>HTML 폼이란?</h6>
                        <p>
                            입력 폼은 웹 프로그래밍의 기술 중 하나.<br/>
                            클라이언트가 정보를 입력/선택하고, 웹 서버 등의 폼을 처리하는 에이전트로 제출하기 위한 기구.<br/>
                        </p>
                        <SyntaxHighlighter language="html" style={prism}>
                            {html2}
                        </SyntaxHighlighter>
                        <br/><br/>
                        <h6>form 태그 속성</h6>
                        <p>
                            action : 데이터를 받아서 보낼 url주소<br/>
                            method : 데이터를 GET,POST,PUT 등 어떤 방식으로 보낼지 결정<br/>
                            enctype : 데이터의 인코딩 방식 결정<br/><br/>

                            form은 자신의 태그 안에 있는 input태그들의 정보를 모아 action에 설정된 url로 method에 정의된 방식으로 데이터를 enctype에 따라 보내게 됨.<br/>
                        </p>
                        <br/><br/>
                        <h6>사용자 입력 유효성 검사란?</h6>
                        <p>
                            서버로 데이터를 제출하기 전, 포함되어야 할 정보들이 올바른 형식이고, 입력 조건에 맞게 잘 입력되었는지 확인하는 것. 예를 들어, 이메일 주소를 입력받는 필드를 아래와 같이 작성할 수 있음.<br />
                        </p>
                        <SyntaxHighlighter language="html" style={prism}>
                            {html3}
                        </SyntaxHighlighter>
                        <p>
                        type 속성이 email이기 때문에 이메일 주소 형식을 따르는 것을 강제함. required속성으로 공란 제출 불가.<br />
                        </p>
                        <h5 className='from'>
                            출처 :&nbsp;&nbsp;
                            <span className='fromAddress'>
                                https://velog.io/@goban
                            </span>
                            <span className='fromAddress'>
                                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                https://velog.io/@jhy979
                            </span>
                            <span className='fromAddress'>
                                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                https://2toy.tistory.com/entry
                            </span>
                        </h5>
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Study4_2;