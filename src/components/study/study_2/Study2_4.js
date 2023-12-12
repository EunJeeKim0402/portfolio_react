import StudyCategory from '../StudyCategory';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Study2_4() {
    const react7 = 
    `import React, { useState } from "react";
    import "./App.css";
    import Title from "./Title";

    export default function App() {
        const [title, setTitle] = useState("Hello Korea");
        const [text, setText] = useState(""); //  이렇게만 사용하면 웹상에서는 아무일도 일어나지 않음.
        // setText와 onChange를 사용해야됨. useState("")만으로는 아무리 타자를 쳐도 ""에서 변하지 않음.

        const clickHandler = (e) => {
            //console.log("press");
            setText(e.target.value);
        };

        return (
            <div className="wrapper">
                <Title title={title} />
                <input type="text value={text} onChange={changeHandler} /> 
                // 이런 식으로 onChange를 같이 써주어야만 제대로 입력됨.
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
                    <h2 className="constTit">input과 state/props와 state</h2>
                    <div className='studyContents'>
                        <br/>
                        <h6>input과 state</h6>
                        <p>
                            input 사용 시 리액트에서는 값의 변화를 감지하여 해당 컴포넌트를 리렌더링해야하기 때문에 useState를 사용해야 함.<br/>
                        </p>
                        <SyntaxHighlighter language="javascript" style={prism}>
                            {react7}
                        </SyntaxHighlighter>
                        <p>
                            위와 같이 하면 정상작동되나, 텍스트를 입력할 때마다 리렌더링되기 때문에 컴포넌트 분할에 신경을 많이 써야함!<br/>
                            최적화를 위해 굳이 함수를 정의하지 않고 익명함수로 처리할 수도 있음.<br/>
                        </p>
                        <br/><br/>
                        <h6>props와 state</h6>
                        <p>
                            props란 부모의 컴포넌트가 감싸고 있는 자식 컴포넌트에게 전달해주는 data.<br/>
                            또한 자식이 부모에게 전달할 수 없음.<br/>
                            다만, 자식 컴포에서 부모 컴포로 데이터를 꼭 끌어와야한다면 props함수를 이용해야 함.<br/>
                            형제 컴포넌트끼리의 data도 부모를 통한다면 가능.<br/>
                        </p>
                        <br/><br/>
                        <h6>Stateless 컴포넌트 / Stateful 컴포넌트</h6>
                        <p>
                            컴포넌트의 장점은 기능단위로 쪼갤 수 있다는 것.<br/>
                            무조건 작게 쪼개는 것보다 리렌더링이 일어나는 컴포넌트와 리렌더링이 필요없는 컴포넌트로 나누는게 좋음.
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

export default Study2_4;