import StudyCategory from '../StudyCategory';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Study2_2() {
    const reactCssImport = 
    `import "./App.css";

    function App() {
        return (
            <div>
                <h2>Hello World!</h2>
            </div>
        );
    }

    export default App;`;

    const reactCssImport2 = 
    `.wrapper {
        width: 80%;
        margin: 0 auto;
    }
    .title {
        width: 100%;
        color: red;
    }
    `;

    const reactCssImport3 = 
    `import "./App.css";

    function App() {
        return (
            <div className="wrapper">
                <h2 className="title">Hello World!</h2>
            </div>
        );
    }

    export default App;`;

    const reactCssImport4 = 
    `// Title.js
    import React from "react";

    export default function Title({ title }) {
        return <h2>{title}</h2>;
    }
    
    ////////////////////////////////////////////////////////////////////////////////////////
    
    // App.js
    import "./App.css";
    import Title from "./Title";

    function App() {
        const TITLE = "Hello Korea";

        return (
            <div className="wrapper">
                <Title title={TITLE} />
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
                    <h2 className="constTit">스타일링, props</h2>
                    <div className='studyContents'>
                        <br/>
                        <h6>스타일링 </h6>
                        <p>
                            React에서 css 파일을 다운받는 방법
                        </p>
                        <SyntaxHighlighter language="javascript" style={prism}>
                            {reactCssImport}
                        </SyntaxHighlighter>
                        <SyntaxHighlighter language="css" style={prism}>
                            {reactCssImport2}
                        </SyntaxHighlighter>
                        <br/>
                        <p>className으로 css를 적용시켜준 모습.</p>
                        <SyntaxHighlighter language="javascript" style={prism}>
                            {reactCssImport3}
                        </SyntaxHighlighter>
                        <p>export default한 파일을 다른 곳에서 import하여 사용할 수도 있음. 이게 바로 컴포넌트화.</p>
                        <br/><br/>

                        <h6>props 넘기기</h6>
                        <p>
                            컴포넌트의 재사용성을 좋게하기 위해 부분 요소를 변경할 수도 있음.<br/>
                            props : 부모의 컴포넌트가 자식 컴포넌트에게 넘겨주는 data<br/>

                        </p>
                        <SyntaxHighlighter language="javascript" style={prism}>
                            {reactCssImport4}
                        </SyntaxHighlighter>
                        <p>
                            props로 배열, 객체 number, string, boolean 어떤 타입이든 갯수 상관없이 다 props로 넘겨줄 수 있음.
                        </p>
                        <br />
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

export default Study2_2;