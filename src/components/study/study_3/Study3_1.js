import StudyCategory from '../StudyCategory';

function Study1_1() {
    return(
        <section className="studyConts">
            <div className="inner">
                <StudyCategory />
                <main>
                    <div className="topConts"></div>
                    <h2 className="constTit">Javascript 기본지식</h2>
                    <div className='studyContents'>
                        <br/>
                        <h6>JavaScript?</h6>
                        <p>HTML과 CSS로 구성된 웹 페이지를 특정 상황에 따라 동적으로 만들어주는 언어.</p>
                        <br/><br/>
                        <img src='https://images.velog.io/images/magnoliarfsit/post/52dfd378-8395-4776-923d-cdd480359bf5/function.png' />
                        <br/><br/>
                        <h6>JavaScript의 문법</h6>
                        <p>
                            예시- let 변수이름 = 할당할값;<br/>
                            let : 선언할 때 사용하는 키워드<br/>
                            변수이름 : 데이터를 담는 바구니<br/>
                            할당할 값 : 바구니에 담은 물건<br/>
                            변수를 할당할 때는 타입을 정할 수 있는데, 숫자인 Number, 문자열인 String, 참/거짓인 Boolean등이 있음.<br/><br/>
                            입력에 따라 그에 걸맞은 작업을 하는 하나의 단위. 표현식과 선언식이 있는데, 선언식을 주로 사용.<br/>
                            예시 - function name(parameter) { }<br/>
                            함수를 만들 때, return 키워드가 반드시 있어야 값 반환 가능.<br/><br/><br/>
                        </p>
                        <h6>자바스크립트의 특징</h6>
                        <p>
                        1.인터프리터 언어 : 프로그램 소스를 한줄씩 기계어로 번역해서 실행. 소스코드를 실행하는동안 인터프리터가 필요함. 소스코드 수정 후 즉시 실행 결과를 확인할 수 있고, 플랫폼에 종속되지 않고 여러 플랫폼에서 실행할 수 있다는 장점이 있으나 실행 속도가 컴파일언어보다 상대적으로 느리다는 단점이 있음.<br/>
                        * 인터프리터는 프로그래밍 언어의 실행방식 중 하나임. 소스코드를 한줄씩 읽어들여 실시간으로 해석/실행하는 프로그램. <br/>
                        2. 동적 프로토타입 기반의 객체지향 언어 : 프로토타입 기반 언어. 동적 프로토타입이므로 개체가 생성된 이후에도 프로퍼티와 메소드를 변경 가능.<br/>
                        3. 동적타입 언어 : 변수의 타입이 코드 실행중에 결정되며 필요에 따라 변경될 수 있음.<br/>
                        4. 일급 객체인 함수 : 함수를 객체취급하며, 함수를 인수로 넘길 수 있음.<br/>
                        5. 함수가 클로저를 정의: 영속적이고 비공개적인 변수를 만들 수 있음. 즉, 클로저 내부에서 선언된 변수가 클로저 외부에서 접근할 수 없으며(비공개적) 함수 호출이 끝나더라도 변수의 값이 유지될 수 있다는 의미(영속적). 클로저가 외부 함수의 환경을 '캡처'하고 그 상태를 유지하는 것이라고도 할 수 있음.<br/>
                        * 동적 타입 언어 장단점 - 런타임까지 타입에 대한 결정을 끌고갈 수 있어 유연성이 높음. 타입 관련 규칙이 적어 코드가 짧음. 다만 실행 도중 예상치 못한 자료형이 들어와 타입에러 발생 가능성이 있고, 타입 관련 에러는 런타임 시 확인할 수 밖에 없어 코드가 복잡할 경우 에러 찾기가 힘들어짐. 이를 방지하기 위해 TypeScript나 Flow등 사용 가능.<br/>
                        * 컴파일언어 장단점 - 소스코드를 컴파일러를 사용하여 기계어로 번역하는 과정을 거침. 소스코드 전체를 한번에 분석하고, 기계어로 변환한 후 실행파일을 생성. 실행파일은 컴퓨터에서 직접 실행됨. C언어, 자바 등... 실행속도가 빠르고 컴파일된 실행파일을 다른 시스템에서도 사용할 수 있다는 장점이 있으나, 컴파일 과정이 필요하고 소스코드 수정 시 다시 컴파일을 해야한다는 단점이 있음(컴파일 언어는 하드웨어에 가까운 저수준 연산 수행 -> 실행속도 향상. 인터프리터 언어는 일반적으로 고수준 연산 수행 - 추가적인 추상화와 해석 필요).
                        </p>
                        <h5 className='from'>
                            출처 :&nbsp;&nbsp;
                            <span className='fromAddress'>
                                https://www.codestates.com/
                            </span>
                            <span className='fromAddress'>
                                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                https://avodev.tistory.com/
                            </span>
                            <span className='fromAddress'>
                                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                https://tiboy.tistory.com/663
                            </span>
                            <span className='fromAddress'>
                                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                https://webclub.tistory.com/373
                            </span>
                            <span className='fromAddress'>
                                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                https://velog.io/@eunnbi/
                            </span>
                        </h5>
                        <br />
                        {/* <h6></h6>
                        <p>
                            
                        </p> */}
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Study1_1;