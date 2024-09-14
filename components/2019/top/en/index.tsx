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
                    <a aria-label="to top" href="/2019/en/">
                      <img
                        alt=""
                        src="/static/logo/rust-tokyo-logo.png"
                        style={{ width: "13vw" }}
                      />
                    </a>
                  </h1>
                </div>
                <div className="col-3" />
                <div className="col-9">
                  <ul className="nav justify-content-end site-nav">
                    <li className="nav-item">
                      <a className="nav-link active" href="/2019/outline/en/">
                        OUTLINE
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/2019/sessions/en/">
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
            <p className="date">OCTOBER 26th, 2019</p>
            <p className="location">TOKYO, JAPAN</p>
          </div>
        </div>
      </div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h2 className="top">What&#39;s Rust.Tokyo?</h2>
          <p>
            Rust.Tokyo is a one-day conference for Rustaceans with 200+
            attendees.{" "}
          </p>
        </div>
      </div>
    </>
  );
}
