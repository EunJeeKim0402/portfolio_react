import StudyCategory from '../StudyCategory';
import React from 'react';

function Study3_6() {
    return(
        <section className="studyConts">
            <div className="inner">
                <StudyCategory />
                <main>
                    <div className="topConts"></div>
                    <h2 className="constTit">유의적 버전</h2>
                    <div className='studyContents'>
                        <br/>
                        <h6>유의적 버전?</h6>
                        <p>
                            소프트웨어 버전이라고도 불림. 버전마다 의미를 부여하여 나타내는 약속된 규칙같은 것. 소프트웨어 규모가 커지고 외부라이브러리를 많이 사용할수록 의존성 지옥에 빠짐. 적절한 의존성을 위해 버전 번호를 어떻게 정하고 올려야하는지를 명시하는 규칙과 요구사항을 반영한 유의적 버전이 나오게 됨.<br/>
                        </p>
                        <br/><br/>
                        <h6>^Major.Minor.Patch</h6>
                        <p>
                            Major : 기존 버전과 호환되지 않는 새로운 버전<br/>
                            Minor : 기존 버전과 호환되는 새로운 기능이 추가된 버전<br/>
                            Patch : 기존 버전과 호환되는 버그 및 오타 등이 수정된 버전<br/>
                            ^ : Major버전 안에서 가장 최신 버전으로 업데이트 가능함을 의미<br/>
                        </p>
                        <h5 className='from'>
                            출처 :&nbsp;&nbsp;
                            <span className='fromAddress'>
                                https://mu-mu-syo.tistory.com/47
                            </span>
                        </h5>
                        <br />
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Study3_6;