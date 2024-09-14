export function Outline() {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h2 className="top">OUTLINE</h2>
        </div>
      </div>

      <div className="container">
        <ul className="nav nav-pills justify-content-end">
          <li className="nav-item">
            <a href="/2019/outline/en/" className="nav-link">
              EN
            </a>
          </li>
          <li className="nav-item">
            <a href="/2019/outline/" className="nav-link active">
              JA
            </a>
          </li>
        </ul>
      </div>

      <div id="outline" className="jumbotron-white jumbotron-fluid">
        <div className="container">
          <h2>Rust.Tokyo 概要</h2>
          <p>
            Rust.Tokyo は日本で初開催される、プログラミング言語 Rust
            に関するカンファレンスです。
          </p>
          <ul>
            <li>開催日: 2019年10月26日 (土)</li>
            <li>
              会場: リクルートホールディングスカンファレンスルーム,{" "}
              <a href="https://www.google.com/maps/place/%E3%82%B0%E3%83%A9%E3%83%B3%E3%83%88%E3%82%A6%E3%82%AD%E3%83%A7%E3%82%A6+%E3%82%B5%E3%82%A6%E3%82%B9%E3%82%BF%E3%83%AF%E3%83%BC/@35.6786336,139.7673735,15z/data=!4m2!3m1!1s0x0:0xf8d9490ce543b963?sa=X&ved=2ahUKEwjOxK-F4PvhAhUDXbwKHT7EBWYQ_BIwCnoECAsQCA">
                グラントウキョウサウスタワー
              </a>
            </li>
          </ul>
          <iframe
            title="アクセス"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.9335937622013!2d139.76518591525277!3d35.67863708019476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfb66dca6e7%3A0xe5617e38e31a5853!2s1-ch%C5%8Dme-9-2+Marunouchi%2C+Chiyoda+City%2C+T%C5%8Dky%C5%8D-to+100-0005!5e0!3m2!1sen!2sjp!4v1560333015728!5m2!1sen!2sjp"
            height="300"
            style={{ width: "100%", border: 0, filter: "grayscale(50%)" }}
            allowFullScreen
          />
        </div>
      </div>

      <div id="venue-guide" className="jumbotron-white jumbotron-fluid">
        <div className="container">
          <h2>会場情報</h2>
          <h3>グラントウキョウサウスタワーへのアクセスについて</h3>
          <ul>
            <li>
              <strong>東京駅八重洲南口</strong>が、もっとも近い出口です。
            </li>
            <li>八重洲ブックセンターの通りを挟んだ反対側に建物はあります。</li>
          </ul>

          <h3>カンファレンス会場までの入り方について</h3>
          <ol>
            <li>1階の入り口よりエスカレーターを上り、2階に向かいます。</li>
            <li>
              <strong>2階に受付の者がおります</strong>
              ので、チケットをお見せください。
            </li>
            <li>
              入場カードを受け取り、エレベータに乗って<strong>23階</strong>
              に上がってください。
            </li>
            <li>
              23階に上がったあと、さらに<strong>41階</strong>
              に上がってください。
            </li>
            <li>
              <strong>会場は41階です。</strong>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
