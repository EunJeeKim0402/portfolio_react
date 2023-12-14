import StudyCategory from '../StudyCategory';

function Study3_4() {
    return(
        <section className="studyConts">
            <div className="inner">
                <StudyCategory />
                <main>
                    <div className="topConts"></div>
                    <h2 className="constTit">Git/Github</h2>
                    <div className='studyContents'>
                        <br/>
                        <h6>Git이란?</h6>
                        <p>
                            버전 관리 시스템(VCS, Version Control System). 로컬 컴퓨터에서 작업하며, 소스 코드의 변경 내역을 추적하고 이를 저장소(repository)에 저장함. 변경 내역을 커밋이라는 단위로 관리하며, 버전 간에 변경 내역을 비교하고 병합할 수 있음.<br/>
                            <br/>
                            장점 : 소스코드를 따로 주고 받을 필요 없이, git을 사용하면 하나의 프로젝트, 같은 파일을 여러 사람이 동시에 작업하는 병렬 개발이 가능<br/>
                            <br/>
                            * Git과 클라우드의 작업이 결과적으로는 동일할 수 있으나 목적과 방식에 차이가 있음. Git의 Merge는 코드 변경 사항을 통합하면서 변경 이력을 관리하고 충돌을 처리하는 과정까지 포함됨. 변경 내역의 이력을 추적하고 개별적인 작업을 분리된 브랜치에서 수행하므로, 복잡한 코드 통합 시나리오에서도 효율적으로 작동할 수 있음. 반면에 클라우드에서의 다운로드-수정-업로드 작업은 주로 파일 공유와 협업을 위한 간단한 작업 흐름을 제공하지만   코드 변경 이력을 추적하거나 충돌을 처리하는 기능은 제공하지 않음.<br/>
                        </p>
                        <br/><br/>
                        <h6>Github란?</h6>
                        <p>
                            깃허브(Github)는 분산 버전 관리 툴인 깃(Git)를 사용하는 프로젝트를 지원하는 웹호스팅 서비스. 협업 프로젝트를 쉽게 진행할 수 있음.<br/>
                            <br/>
                            1.Repository : 저장소 / 말 그대로 파일이나 폴더를 저장해두는 저장소<br/>
                            2.Commit : 파일을 추가, 변경한 내용을 저장소에 저장하는 작업<br/>
                            3.push : 추가, 변경한 내용을 원격 저장소에 업로드하는 작업<br/>
                        </p>
                        <h5 className='from'>
                            출처 :&nbsp;&nbsp;
                            <span className='fromAddress'>
                                https://velog.io/@jini_eun
                            </span>
                        </h5>
                        <br />
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Study3_4;