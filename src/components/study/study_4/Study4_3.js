import StudyCategory from '../StudyCategory';

function Study4_3() {
    return(
        <section className="studyConts">
            <div className="inner">
                <StudyCategory />
                <main>
                    <div className="topConts"></div>
                    <h2 className="constTit">HTML 규약(컨벤션)</h2>
                    <div className='studyContents'>
                        <br/>
                        <h6>컨벤션?</h6>
                        <p>프로그래머들 사이의 규칙. 가독성을 높이고 유지보수에 이점이 있음.<br/></p>
                        <br/><br/>
                        <h3>1.유효하고 가독성 높은 DOM 작성</h3>
                        <p>
                            - 모든 태그는 소문자로 작성. 들여쓰기 필수. 자동 닫기 태그 닫기는 선택이지만 일반 태그는 꼭 닫기. 주석 과도사용 금지. DOM구성 시, 추가 div나 요소가 필요한 경우 항상 필요한 요소만 만들 것.<br/>
                        </p>
                        <h3>2.인라인 CSS스타일과 자바스크립트 사용X</h3>
                        <p>
                            - 항상 외부 스타일 시트 사용. 가독성 문제도 있고 문서를 더 무겁고 유지하기 어렵게 만듬.
                        </p>
                        <h3>3.인라인 크리티컬 CSS</h3>
                        <p>
                            - 중요한 CSS를 맨위에 배치.
                        </p>
                        <h3>4.스크립트 태그를 맨 아래 배치</h3>
                        <p>
                            - 본문 내용을 먼저 로드하여 사용자가 페이지를 빨리 로드되고 있다고 믿게 할 것.
                        </p>
                        <h3>5.접근성 관리</h3>
                        <p>
                            - WCAG(Web Content Accessibility Guidelines) 웹 콘텐츠 접근성 지침. 감지할 수 있고(텍스트 대안/구별용이) 실시 가능하고(키보드 모든 기능 사용 가능, 인지하기 충분한 시간 등), 이해할 수 있는(가독성, 예측 가능), 건장한(호환가능)
                        </p>
                        <h3>6.이미지에 alt태그 사용</h3>
                        <p>
                            - 이미지가 표시되지 못할 경우 대체 텍스트가 표시되도록.
                        </p>
                        <h3>7.페이지 단 하나의 h1</h3>
                        <p>
                            - 페이지의 내용을 설명하는 가장 중요한 텍스트
                        </p>
                        <h3>8.제목 및 메타 태그 사용</h3>
                        <h3>9.압축</h3>
                        <p>
                            - 문서를 작게 만들어 페이지 로드 속도 향상. 서버 측에서 brotli 또는 gzip 압축 활성화
                        </p>
                        <h3>10.HTML 확인</h3>
                        <p>
                            - html의 유효성을 검사. w3c 유효성 검사기를 이용해서 결함이나 잘못된 코드 발견 가능.
                        </p>
                        <h5 className='from'>
                            출처 :&nbsp;&nbsp;
                            <span className='fromAddress'>
                                https://velog.io/@jhs000123
                            </span>
                        </h5>
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Study4_3;