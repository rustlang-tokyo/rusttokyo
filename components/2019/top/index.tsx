export function Top() {
  return (
    <>
      <div className="site-wrapper">
        <div className="site-wrapper-inner">
          <div className="header">
            <div className="container">
              <div className="row">
                <div className="col-3 logo">
                  <h1>
                    <a href="/2019/">
                      <img
                        alt=""
                        src="/static/logo/rust-tokyo-logo.png"
                        style={{ width: "100%" }}
                      />
                    </a>
                  </h1>
                </div>
                <div className="col-3" />
                <div className="col-9">
                  <ul className="nav justify-content-end site-nav">
                    <li className="nav-item">
                      <a className="nav-link active" href="/2019/outline/">
                        OUTLINE
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/2019/sessions/">
                        SESSIONS
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/2019/sponsorship/">
                        SPONSORSHIP
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/2019/coc/">
                        CODE OF CONDUCT
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        href="https://ti.to/rust-tokyo/2019"
                      >
                        TICKET
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container subtitle">
            <p className="date">2019-10-26</p>
            <p className="location">日本 - 東京</p>
          </div>
        </div>
      </div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h2 className="top">Rust.Tokyoとは?</h2>
          <p>
            Rust.Tokyo
            は200名以上の参加者を予定する、プログラミング言語Rustのカンファレンスです。
          </p>
        </div>
      </div>
    </>
  );
}
