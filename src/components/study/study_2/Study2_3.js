import StudyCategory from '../StudyCategory';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Study2_3() {
    const reactCssImport5 = 
    `import "./App.css";
    import Title from "./Title";

    export default function App() {
        let TITLE = "Hello Korea";

        const clickHandler = () => {
            console.log("클릭했음");
        };

        return (
            <div className="wrapper">
                <Title title={TITLE} />
                <button onClick={clickHandler}>change Title</button>
            </div>
        );
    }

    export default App;`;

    const reactCssImport6 = 
    `import React, { useState } from "react";
    import "./App.css";
    import Title from "./Title";

    export default function App() {
        const [title, setTitle] = useState("Hello Korea");

        const clickHandler = () => {
            setTitle("one more Hello");
            // setTitle(prev => prev + "plus string"); 처럼 초기값에 하드코딩으로 더한 문자열이 합쳐서 리렌더링되게 할 수도 있음.
        };

        return (
            <div className="wrapper">
                <Title title={title} />
                <button onClick={clickHandler}>change Title</button>
            </div>
        );
    }

    export default App;`;

    return(
        <section className="studyConts">
            <div className="inner">
                <StudyCategory />
                <main>
                    <div className="topConts"></div>
                    <h2 className="constTit">이벤트와 useState</h2>
                    <div className='studyContents'>
                        <br/>
                        <h6>이벤트</h6>
                        <p>
                            HTML태그에 이벤트를 주는 명령어들이 있음. click, mouseenter, mouseleave 등...<br/>
                            react에서 클릭 이벤트를 만들고 싶을 때 보통은 onClick을 사용하여 함수를 전달함.<br/>
                        </p>
                        <SyntaxHighlighter language="javascript" style={prism}>
                            {reactCssImport5}
                        </SyntaxHighlighter>
                        <p>
                            이상태에서 button을 클릭하면 console에는 정상출력되나 DOM에는 반영되지 않음.<br/>
                            리액트는 모든 컴포넌트를 읽은 후 DOM에 렌더링하게 되는데, 로직이 다 실행되더라도 컴포넌트를 호출하지 않으면 JSX가 return되지 않는 것임.<br/>
                        </p>
                        <br/><br/>
                        <h6>state</h6>
                        <p>
                            즉 리렌더링이 되어야하는 상황인데, 리렌더링을 명령하기 위해 useState라는 함수가 필요함.<br/>
                            useState란 리액트에서 제공하는 함수로, 컴포넌트가 다시 호출되는 곳에서 변경된 값을 반영하기 위해 state로 값을 정의할 수 있게 해주는 함수.<br/>
                        </p>
                        <SyntaxHighlighter language="javascript" style={prism}>
                            {reactCssImport6}
                        </SyntaxHighlighter>
                        <p>
                            useState는 함수이고 return값은 배열.<br/>
                            배열의 첫 번째 인자는 값을 저장하는 변수 / 두 번째 인자는 리렌더링 시키는 함수를 반환함.<br/>
                            암묵적으로, 변수의 이름이 있다면 변화를 감지하는 함수는 set으로 시작하고 낙타표기법으로 표현<br/>
                            리액트에서 use가 붙은 함수를 hook이라고 표현함(useState도 react hook)<br/>
                            hook은 컴포넌트 안에서 실행되어야하며, 그렇지 않으면 오류가 뜸.<br/>
                        </p>
                        <br/>
                        <h5 className='from'>
                            출처 :&nbsp;&nbsp;
                            <span className='fromAddress'>
                                //https://velog.io/@dlsdk0601
                            </span>
                        </h5>
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Study2_3;