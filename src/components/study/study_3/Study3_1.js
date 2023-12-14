import StudyCategory from '../StudyCategory';

function Study3_1() {
    return(
        <section className="studyConts">
            <div className="inner">
                <StudyCategory />
                <main>
                    <div className="topConts"></div>
                    <h2 className="constTit">Git 버전관리</h2>
                    <div className='studyContents'>
                        <br/>
                        <h6>Git 버전관리란?</h6>
                        <p>
                            버전 관리 시스템은 파일 변화를 시간에 따라 기록했다가 나중에 특정 시점의 버전을 다시 꺼내올 수 있는 시스템.<br/>
                            각 파일을 이전 상태로 되돌릴 수 있고, 프로젝트를 통째로 이전 상태로 되돌릴 수 있고, 시간에 따라 수정 내용을 비교해 볼 수 있고, 누가 문제를 일으켰는지도 추적할 수 있고, 누가 언제 만들어낸 이슈인지도 알 수 있음.<br/>
                        </p>
                        <br/><br/>
                        <h6>- 로컬버전관리</h6>
                        <img src='https://git-scm.com/book/en/v2/images/local.png' />
                        <p>Patch Set(파일에서 변경되는 부분)을 관리. 일련의 Patch Set을 적용해서 모든 파일을 특정 시점으로 되돌릴 수 있음.<br/></p>
                        <br/><br/>
                        <h6>중앙집중식 버전 관리(CVCS)</h6>
                        <img src='https://git-scm.com/book/en/v2/images/centralized.png' />
                        <p>
                            다른 개발자와 협업 시 생기는 문제를 해결하기위해 만들어짐. 같은 시스템은 파일을 관리하는 서버가 별도로 있고, 클라이언트가 중앙 서버에서 파일을 받아서 사용. 관리가 용이하다는 장점이 있으나 중앙서버에서 문제가 발생할 시 치명적이라는 문제점이 있음. 서버가 다운되면 그동안 아무도 협업할 수 없고 백업도 불가.<br/>
                        </p>
                        <br/><br/>
                        <h6>분산 버전 관리 시스템(DVCS)</h6>
                        <img src='https://git-scm.com/book/en/v2/images/distributed.png' />
                        <p>
                        단순히 파일의 마지막 스냅샷을 Checkout하지 않고, 저장소를 히스토리와 함께 전부 복제. 서버에 문제가 생길 시 이 복제물로 다시 작업. Clone은 모든 데이터를 가진 진정한 백업. 리모트 저장소가 존재. 다양한 그룹과 다양한 방법으로 협업 가능. 계층 모델같은 중앙집중식 시스템과는 달리 워크플로를 다양하게 사용 가능.<br/>
                        </p>
                        <h5 className='from'>
                            출처 :&nbsp;&nbsp;
                            <span className='fromAddress'>
                                https://git-scm.com/book/ko/v2
                            </span>
                        </h5>
                        <br />
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Study3_1;