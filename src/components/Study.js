function Study() {
    return(
        <section className="studyConts">
            <aside>
                <h1>Study board</h1>
                <ul className="menu">
                    <li className="tit">MENU</li>
                    <li className="item">
                        <span>아이콘</span>
                        Topic
                    </li>
                    <li className="tit">MENU</li>
                    <li className="item">
                        <span>아이콘</span>
                        Topic
                    </li>
                    <li className="tit">MENU</li>
                    <li className="item">
                        <span>아이콘</span>
                        Topic
                    </li>
                </ul>
                <ul className="category">
                    <li className="tit">CATEGORY</li>
                    <li className="item">
                        <span>아이콘</span>
                        Topic
                    </li>
                    <li className="tit">MENU</li>
                    <li className="item">
                        <span>아이콘</span>
                        Topic
                    </li>
                    <li className="tit">MENU</li>
                    <li className="item">
                        <span>아이콘</span>
                        Topic
                    </li>
                </ul>
            </aside>
            <main>
                <div className="topConts">
                    <label htmlFor="studySearch">
                        Study Search button
                        <input type="text" name="studySearch" id="studySearch" placeholder="Search" />
                        <input type="button" value="" />
                    </label>
                </div>
                <h2>Board</h2>
                <ul className="studyConts1">
                    <li>
                        <div className="studyWrap">
                            <iframe src="test" frameborder="0" title="board"></iframe>
                        </div>
                        <div className="tit">가나다라</div>
                    </li>
                    <li>
                        <div className="studyWrap">
                            <iframe src="test" frameborder="0" title="board"></iframe>
                        </div>
                        <div className="tit">가나다라</div>
                    </li>
                </ul>
                <h2>Board</h2>
                <ul className="studyConts1">
                    <li>
                        <div className="studyWrap">
                            <iframe src="test" frameborder="0" title="board"></iframe>
                        </div>
                        <div className="tit">가나다라</div>
                    </li>
                    <li>
                        <div className="studyWrap">
                            <iframe src="test" frameborder="0" title="board"></iframe>
                        </div>
                        <div className="tit">가나다라</div>
                    </li>
                </ul>
            </main>
        </section>
    )
}

export default Study;