import StudyCategory from '../StudyCategory';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Table } from 'react-bootstrap';

function Study3_3() {
    const example = 
    `자료구조 예) score[8, 70, 90, ...]
    알고리즘 예) tmp <-score[0];
                for i <- 1 to n do
                if score[i]>tmp then tmp<-score[i];`;

    return(
        <section className="studyConts">
            <div className="inner">
                <StudyCategory />
                <main>
                    <div className="topConts"></div>
                    <h2 className="constTit">자료구조/알고리즘</h2>
                    <div className='studyContents'>
                        <br/>
                        <h6>프로그램 = 자료구조 + 알고리즘</h6>
                        <SyntaxHighlighter language="javascript" style={prism}>
                            {example}
                        </SyntaxHighlighter>
                        <Table striped bordered hover className='table'>
                            <thead>
                                <tr>
                                    <th>자료구조</th>
                                    <th>알고리즘</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>프로그램에서 처리하는 자료를 저장하는 구조</td>
                                    <td>문제를 처리하는 단계적 절차</td>
                                </tr>
                                <tr>
                                    <td>데이터의 집합, 관계</td>
                                    <td>데이터의 연산을 정의</td>
                                </tr>
                                <tr>
                                    <td>중요 특성 : 조직화(자료의 특성에 맞게 조직화되어야 빠르게 처리 가능)</td>
                                    <td>중요 특성 : 효율화</td>
                                </tr>
                            </tbody>
                        </Table>
                        <br/><br/>
                        <h6>자료구조?</h6>
                        <p>
                            Stack : 책이 쌓이는 것처럼, 가장 마지막 요소부터 처리하는 LIFO(Last In First Out)<br/>
                            Queue : 계산대의 줄처럼 먼저 입력된 요소부터 처리하는 FIFO(First In First Out)<br/>
                            Array : 정적이고 동일한 데이터 유형의 요소를 순차적으로 저장하며, 크기가 고정되어 있음. 순차적으로 저장된 데이터를 참조할 때 index사용. 메모리 상 데이터가 순차적으로 저장되어 Cache Hit Rate가 높음.<br/>
                            List : List는 동적이고 다양한 데이터 유형의 요소를 가변적으로 저장할 수 있으며, 크기가 동적으로 조정됨. 메모리 주소가 랜덤으로 지정되기 때문에 Cache Hit Rate가 낮음.<br/>
                            Dictionary : hashmap, hashtable이라고도 함. 키-밸류가 쌍으로 저장되는 자료구조.<br/>
                            Graph : 지도처럼 노드 사이에 엣지가 있고 서로 연결되어있음.<br/>
                            Tree : 그래프가 계층적 구조를 가지고 있음. 최상위 노드를 시작으로 하위 노드들이 자식처럼 생성됨.<br/>
                            ​<br/>
                            * Cache Hit Rate : CPU가 참조하고자하는 메모리가 캐시에 존재하는 경우를 말함. 이 비율이 높을수록 좋은 성능을 가짐. 메모리의 개념에 참조 지역성 원리라는 것이 있는데, 특정 값의 스토리지 위치가 자주 액세스되는 특성이 있음. 즉 배열은 공간 지역성이 좋아 Cache Hit Rate를 높게 가질 수 있는 것.<br/>
                        </p>
                        <br/><br/>
                        <h6>배열(Array)을 선택하면 좋은 경우</h6>
                        <p>
                            - 요소에 빠른 접근이 필요한 경우 : 배열은 인덱스를 통해 요소에 직접 접근할 수 있어 빠른 접근이 가능.<br/>
                            - 메모리 효율이 중요한 경우 : 연속된 메모리 공간에 요소를 저장. 추가적인 메타데이터나 포인터를 사용X<br/>
                            - 다차원 데이터를 처리해야하는 경우 : 이차원 이상의 배열을 사용하여 행렬, 이미지 등을 표현하고 조작할 때.<br/>
                            - 데이터 크기가 변경되지 않거나 사전에 알려진 경우 : 배열의 크기조정, 삽입/삭제가 가능하나 비효율적임.<br/>
                            * 메타데이터란 데이터에 대한 정보를 설명하고 식별하는 데이터. 제목/아티스트/트랙 번호 등...<br/>
                            * 다차원데이터란 여러 차원 또는 축으로 구성된 데이터. 예를 들어 2차월 데이터는 행과 열로 구성된 행렬데이터(컬러 이미지 - 픽셀의 행과 열). 3차원 데이터는 동영상데이터, 센서데이터 등... 동영상은 연속된 프레임으로 구성된 3차원 데이터인데 각 프레임은 2차원 이미지. 4차원데이터는 추가적인 차원을 가진 배열로 표현될 수 있음.<br/>
                        </p>
                        <br/><br/>
                        <h6>알고리즘?</h6>
                        <p>
                            문제를 해결하기 위한 단계적 절차. 특정 작업을 수행하는 유한한 명령어들의 집합.<br/>
                            입력 : 0개 이상의 입력 필요<br/>
                            출력 : 1개 이상의 출력 필요<br/>
                            명백성 : 명령어가 명확해야함<br/>
                            유한성 : 한정된 수의 단계 후 종료<br/>
                            유효성 : 각 명령어들은 실행 가능한 연산이어야 함.<br/>
                        </p>
                        <br/><br/>
                        <h6>알고리즘 기술 방법</h6>
                        <p>
                            1.자연어로 표기 : 영어, 한국어 등...<br/>
                            2.흐름도로 표기 : 직관적이고 이해하기 쉬움. <br/>
                            3.유사 코드(Pseude-code) : 알고리즘 기술에 가장 많이 사용되며, 프로그래밍 언어보다는 덜 구체적임.<br/>
                            4.프로그래밍 언어 : 자바, C언어, 파이썬 등...<br/>
                        </p>
                        <br/><br/>
                        <h5 className='from'>
                            출처 :&nbsp;&nbsp;
                            <span className='fromAddress'>
                                https://roi-data.com/entry
                            </span>
                            <span className='fromAddress'>
                                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                https://bnzn2426.tistory.com/115
                            </span>
                            <span className='fromAddress'>
                                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                https://ongveloper.tistory.com/403
                            </span>
                        </h5>
                        <br />
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Study3_3;