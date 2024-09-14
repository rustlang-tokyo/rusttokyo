import Image from "next/image";

export function SubMenu() {
  return (
    <div className="individual-site-wrapper">
      <div className="individual-header">
        <div className="container">
          <div className="row">
            <div className="col-3 individual-logo">
              <h1>
                <a aria-label="to top page" href="/2019/">
                  <Image
                    alt="logo"
                    src="/static/logo/rust_tokyo_logo_horizon.png"
                    width={316}
                    height={71}
                  />
                </a>
              </h1>
            </div>
            <div className="col-9">
              <ul className="nav justify-content-end site-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/2019/outline/">
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
                  <a className="nav-link active" href="/2019/coc/">
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
    </div>
  );
}
