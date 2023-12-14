import StudyCategory from '../StudyCategory';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Table } from 'react-bootstrap';

function Study4_6() {
    const css = 
    `@media screen and (사이즈조건){
        // 데스크톱은 (min-width: 1024px), 태블릿은 1023px 등...
        // 모바일은 (max-width: 767px)등.
        //조건에 맞는 기기에 적용할 CSS
        body{ background-color: pink; }
    }`;

    return(
        <section className="studyConts">
            <div className="inner">
                <StudyCategory />
                <main>
                    <div className="topConts"></div>
                    <h2 className="constTit">CSS 반응형디자인/미디어쿼리</h2>
                    <div className='studyContents'>
                        <br/>
                        <h6>반응형 디자인?</h6>
                        <p>디바이스 종류에 따라 웹페이지의 크기가 자동적으로 재조정되는 것.​<br/></p>
                        <br/><br/>
                        <h6>미디어쿼리?(Media Query)</h6>
                        <p>
                            특정 조건이 true인 겨우에만 코드 블록{} 내부의 CSS코드를 실행해주는 구문. 다른 매체 유형/장치에 대해 서로 다른 스타일을 적용하는데 사용함(데스크톱, 랩톱, 휴대폰 등...). 특정 스타일이 인쇄된 문서 또는 화면 판독기에서만 사용되도록도 할 수 있음.<br/>
                        </p>
                        <br/><br/>
                        <h6>뷰포트 width에 맞춘 미디어 쿼리</h6>
                        <SyntaxHighlighter language="css" style={prism}>
                            {css}
                        </SyntaxHighlighter>
                        <p>
                            위와 같이 사용하면 창 너비가 달라지거나 기기가 바뀔 때 배경색이 바뀌도록 할 수 있음. <br/>
                        </p>
                        <br/><br/>
                        <h6>화면방향전환</h6>
                        <p>
                            태블릿과 모바일은 가로모드/세로모드가 가능. 일단 기본은 세로모드이고, (orientation: landscape)에서 변경하여 가로모드도 사용할 수 있음<br/>
                        </p>
                        <br/><br/>
                        <h6>미디어 유형</h6>
                        <p>
                            @media 뒤에 붙는 것이 미디어 유형임.<br/>
                        </p>
                        <Table striped bordered hover className='table'>
                            <thead>
                                <tr>
                                    <th>값</th>
                                    <th>설명</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>all</td>
                                    <td>기본값, 모든 미디어 유형 장치에 사용</td>
                                </tr>
                                <tr>
                                    <td>print</td>
                                    <td>프린터 장치에 사용. 인쇄용 CSS</td>
                                </tr>
                                <tr>
                                    <td>screen</td>
                                    <td>컴퓨터화면/태블릿/폰 등에 사용하는 뷰포트 사이즈 설정</td>
                                </tr>
                                <tr>
                                    <td>speech</td>
                                    <td>스크린리더기가 페이지를 소리내어 읽을 때 사용</td>
                                </tr>
                            </tbody>
                        </Table>
                        <h5 className='from'>
                            출처 :&nbsp;&nbsp;
                            <span className='fromAddress'>
                                https://ossam5.tistory.com/308
                            </span>
                        </h5>
                        <br />
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Study4_6;