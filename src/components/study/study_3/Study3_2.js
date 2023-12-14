import StudyCategory from '../StudyCategory';

function Study3_2() {
    return(
        <section className="studyConts">
            <div className="inner">
                <StudyCategory />
                <main>
                    <div className="topConts"></div>
                    <h2 className="constTit">터미널 사용</h2>
                    <div className='studyContents'>
                        <br/>
                        <h6>터미널을 사용하는 이유</h6>
                        <p>
                            터미널은 컴퓨터에 대한 모든 액세스 권한을 주는데, 보통은 접근이 금지되어있는 다양할 설정이나 운영체제 일부에대한 접근이 가능해짐<br/>
                        </p>
                        <br/><br/>
                        <h6>터미널 명령어&용어</h6>
                        <p>
                            ~ : 홈<br/>
                            홈 : /Users/사용자이름 폴더 이하를 칭함<br/>
                            탭 : 해당 철자로 시작하는 폴더 혹은 파일명이 자동완성으로 붙음<br/>
                            cd : 폴더이동(폴더 더블클릭 개념).홈으로 이동 $cd~ / 다운로드 폴더로 이동 $cd~/Downloads/<br/>
                            pwd : 현재위치 확인<br/>
                            history : 커맨드 히스토리 확인<br/>
                            grep : 검색. 앞의 커맨드 | grep [검색어]. 예) history | grep ssh (히스토리중 ssh란 단어가 포함된 결과 출력)<br/>
                            cp : 복사. 예) cp a.txt a_copy.txt (현재경로의 a.txt파일을 a_copy.txt파일로 복사)<br/>
                            mv : 이동. 예) mv a.txt b.txt (현재경로의 a.txt를 b.txt로 이동. 예시의 경우 이름을 바꾼다고도 볼 수 있음.)<br/>
                            ls : 현재 디렉토리의 파일 확인 (숨김파일은 뜨지 않음)<br/>
                            chmod : 권한변경. 예) chmod 777 cache         <br/>
                            chown : 소유자변경. 예) chown root:root mail (mail이라는 폴더&파일의 소유자 및 그룹을 root로 바꿈)<br/>
                            less : 파일내용 확인(수정불가). 예) less a.txt (a.txt라는 파일이 열리고, 숫자를 입력 시 해당 숫자의 행으로 이동, q를 누르면 나가짐)<br/>
                            cat : 파일 내용 출력(검색불가). 예) cat a.txt<br/>
                            tail : 파일 내용 출력(파일 내용을 뒤에서부터 출력). 로그를 출력할 때 많이 씀. 종료는 ctrl+c. 예) tail -f a.log (a.log가 실시간으로 출력됨)<br/>
                        </p>
                        <br/><br/>
                        <h6>터미널 권한변경</h6>
                        <p>
                            파일의 권한은 읽기(4) / 쓰기(2) / 실행(1) 으로 분류되고, 각 숫자의 합에 따라 권한이 결정됨. 예를 들어 7은 모든 권한, 5는 읽기/실행 권한이라는 뜻. 또한 각 자릿수마다 의미가 다름. 첫 번째는 소유자(user)권한 / 두번째는 그룹사용자(group) 권한 / 세번째는 기타 사용자(other)권한.<br/>
                            예시 : chmod 777 cache (cache라는 폴더&파일에 777권한을 부여하는것)<br/>
                            * 777 : user, group, other 모두에게 모든 권한을 준다는 뜻. <br/>
                            * 755 : user에게 모든 권한을 부여하고, group, other에게는 읽기와 실행 기능만 준다는 뜻.<br/>
                        </p>
                        <br/><br/>
                        <h5 className='from'>
                            출처 :&nbsp;&nbsp;
                            <span className='fromAddress'>
                                https://study-roppi.tistory.com/14
                            </span>
                            <span className='fromAddress'>
                                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                https://wotres.tistory.com/entry
                            </span>
                        </h5>
                        <br />
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Study3_2;