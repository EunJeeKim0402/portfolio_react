import StudyCategory from '../StudyCategory';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Study2_1() {
    const codeExample = 
    `function App() {
        return (
            <div>
                <h2>Hello World!</h2>
            </div>
        );
    }

    export default App;`;

    const declarativProgramming = 
    `-- SQL
    SELECT *
      FROM user_table
     WHERE country = 'Korea';`;

    const declarativProgramming2 = 
    `<!-- HTML -->
    <article>   
        <header>
            <h1>Declarative Programming</h1>
            <p>Sprinkle Declarative in your verbiage to sound smart</p>
        </header>
    </article>`;

    const imperativeProgramming = 
    `// Java - 모든 원소를 더한 값을 반환하는 add함수 작성
    public static int add (int[] arr) {
        int result = 0;
       for (int i = 0; i < arr.length; i++){
           result += arr[i];
       }
       return result;
   }`;

    return(
        <section className="studyConts">
            <div className="inner">
                <StudyCategory />
                <main>
                    <div className="topConts"></div>
                    <h2 className="constTit">JSX와 선언형 프로그래밍</h2>
                    <div className='studyContents'>
                        <br/>
                        <h6>JSX</h6>
                        <p>
                            JavaScript 안에 있는 HTML코드를 볼 수 있음(JSX란, 자바스크립트 XML.)<br/>
                        </p>
                        <SyntaxHighlighter language="javascript" style={prism}>
                            {codeExample}
                        </SyntaxHighlighter>
                        <p>
                            개발자 모드에서 JSX코드가 HTML코드로 변환되어 렌더링되어있는 것을 확인할 수 있음.<br/>
                            React가 자동적으로 브라우저에서 작동하는 코드로 변환해줌.<br/>
                        </p>
                        <br/><br/>

                        <h6>리액트의 작동원리와 선언적 프로그래밍</h6>
                        <p>
                            리액트는 컴포넌트가 전부임.<br/>
                            명령적 방식, 선언적 방식 중 리액트는 선언적 방식을 사용하고 있음.<br/><br/>

                            선언형 프로그래밍 : What(무엇을) 할 것인가? ex-SQL, HTML / 집주소는 서울 무슨 구야.<br/>
                            명령형 프로그래밍 : How(어떻게) 할 것인가? ex-C, C++, JAVA / 주차장 북쪽에서 좌회전, 신호등을 통과하고 첫 번째 신호등에서 우회전...<br/><br/>
                            
                            선언형 프로그래밍 예제<br/>
                            <SyntaxHighlighter language="sql" style={prism}>
                                {declarativProgramming}
                            </SyntaxHighlighter>
                            <SyntaxHighlighter language="html" style={prism}>
                                {declarativProgramming2}
                            </SyntaxHighlighter><br/>

                            명령형 프로그래밍 예제<br/>
                            <SyntaxHighlighter language="java" style={prism}>
                                {imperativeProgramming}
                            </SyntaxHighlighter>
                        </p>

                        <h5 className='from'>
                            출처 :&nbsp;&nbsp;
                            <span className='fromAddress'>
                                https://velog.io/@dlsdk0601
                            </span>
                            <span className='fromAddress'>
                                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                https://dev-handbook.tistory.com/13
                            </span>
                        </h5>
                        <br />
                        {/* <h6></h6>
                        <p>
                            
                        </p> 
                        <img src='https://images.velog.io/images/magnoliarfsit/post/52dfd378-8395-4776-923d-cdd480359bf5/function.png' />
                        */}
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Study2_1;