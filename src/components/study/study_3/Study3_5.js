import StudyCategory from '../StudyCategory';
import React from 'react';
import { Table } from 'react-bootstrap';

function Study3_5() {
    return(
        <section className="studyConts">
            <div className="inner">
                <StudyCategory />
                <main>
                    <div className="topConts"></div>
                    <h2 className="constTit">라이센스</h2>
                    <div className='studyContents'>
                        <br/>
                        <h6>라이센스란?</h6>
                        <p>
                            오픈소스 사용 및 배포 시 지켜야할 규칙. 저작권자/사용자 간의 이용방법 및 조건범위를 명시해둔 사용 허가권.<br/>
                            이 아니기 때문에, 외부에 배포해야할 때 규칙을 지켜야 함(내부 사용만을 목적으로할 때는 적용되지 않음). 보통 README나 LICENSE파일에 따로 명시.<br/>
                        </p>
                        <br/><br/>
                        <h6>라이센스 종류</h6>
                        <Table striped bordered hover className='table'>
                            <thead>
                                <tr>
                                    <th>개념</th>
                                    <th>종류</th>
                                    <th>내용</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={2}>
                                        Permissive<br/>
                                        (비교적 준수하기 쉬움)
                                    </td>
                                    <td>Apache Licnese</td>
                                    <td>
                                        아파치 소프트웨어 재단에서 자체적으로 만든 소프트웨어 라이센스 규정. 아파치 재단의 모든 소프트웨어에 적용되고, 소스코드 공개 등의 의무는 없으나 Apache라는 상표권을 침해하면 안됨.
                                    </td>
                                </tr>
                                <tr>
                                    <td>MIT License</td>
                                    <td>미국 매사추세츠공과대학교(MIT)에서 해당 대학 소프트웨어 공학도를 돕기위해 개발한 라이센스. 라이센스와 저작권 관련 명시만 지켜주면 됨. 누구라도 소프트웨어 제한없이 무상 취급 가능.</td>
                                </tr>
                                <tr>
                                    <td rowSpan={3}>
                                        Copyleft<br/>
                                        (비교적 의무사항 많음)
                                    </td>
                                    <td>GNU General Public License(GPL) 2.0</td>
                                    <td>현재 가장 많은 오픈소스 소프트웨어가 채택하고있는 라이센스. 소프트웨어 배포의 경우 저작권 표시, 보증책임이 없다는 표시 및 GPL에 의해 배포된다는 사실 명시. 수정/병합의 경우 GPL에 의해 소스코드 제공. GPL소프트웨어 배포의 경우 소스코드 자체를 배포하거나 코드를 제공받을 수 있는 방법 제공.</td>
                                </tr>
                                <tr>
                                    <td>GNU Lesser GPL(LGPL) 2.1</td>
                                    <td>GPL라이센스를 사용하기만해도 소스코드를 공개하는 부담때문에 단순한 라이브러리와 모듈로의 링크를 허용한 라이센스.한정된 라이브러리에 적용. 소프트웨어 배포의 경우 저작권표시, 보증책임이 없다는 표시 및 LGPL에 의해 배포된다는 사실 명시.</td>
                                </tr>
                                <tr>
                                    <td>Mozilla Public License(MPL)</td>
                                    <td>Netscape브라우저의 소스코드를 공개하기위해 개발된 라이센스. 링크 등 여부와 상관없이, 원래의 소스코드가 아닌 새로운 파일에 작성된 소스코드에 대해서는 공개의무X. 소프트웨어 배포의 경우 저작권표시, 보증책임이 없다는 표시 및 MPL에 의해 배포된다는 사실 명시. MPL코드와 다른코드를 결합하여 프로그램 제작할 경우, MPL코드를 제외한 결합프로그램의 소스코드는 공개할 필요가 없음.</td>
                                </tr>
                            </tbody>
                        </Table>
                        <h5 className='from'>
                            출처 :&nbsp;&nbsp;
                            <span className='fromAddress'>
                                https://wooono.tistory.com/379
                            </span>
                        </h5>
                        <br />
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Study3_5;