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
            <a href="/2019/outline/en/" className="nav-link active">
              EN
            </a>
          </li>
          <li className="nav-item">
            <a href="/2019/outline/" className="nav-link">
              JA
            </a>
          </li>
        </ul>
      </div>

      <div id="outline" className="jumbotron-white jumbotron-fluid">
        <div className="container">
          <h2>Conference Outline</h2>
          <ul>
            <li>Date: October 26th, 2019</li>
            <li>
              Venue: Conference room of Recruit Holdings,{" "}
              <a href="https://www.google.com/maps/place/%E3%82%B0%E3%83%A9%E3%83%B3%E3%83%88%E3%82%A6%E3%82%AD%E3%83%A7%E3%82%A6+%E3%82%B5%E3%82%A6%E3%82%B9%E3%82%BF%E3%83%AF%E3%83%BC/@35.6786336,139.7673735,15z/data=!4m2!3m1!1s0x0:0xf8d9490ce543b963?sa=X&ved=2ahUKEwjOxK-F4PvhAhUDXbwKHT7EBWYQ_BIwCnoECAsQCA">
                GranTokyo South Tower
              </a>
            </li>
          </ul>
          <iframe
            title="access"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.9335937622013!2d139.76518591525277!3d35.67863708019476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfb66dca6e7%3A0xe5617e38e31a5853!2s1-ch%C5%8Dme-9-2+Marunouchi%2C+Chiyoda+City%2C+T%C5%8Dky%C5%8D-to+100-0005!5e0!3m2!1sen!2sjp!4v1560333015728!5m2!1sen!2sjp"
            height="300"
            style={{ width: "100%", border: 0, filter: "grayscale(50%)" }}
            allowFullScreen
          />
        </div>
      </div>

      <div id="venue-guide" className="jumbotron-white jumbotron-fluid">
        <div className="container">
          <h2>About the Venue</h2>
          <h3>Access to the venue</h3>
          <ul>
            <li>
              Approx. 2 minutes&apos; walk from Tokyo Station (東京駅). Yaesu
              South Ticket Gate (八重洲南口) is the nearest.
            </li>
          </ul>

          <h3>How to reach the conference hall</h3>
          <ol>
            <li>Use the escalater and go up to the 2nd floor.</li>
            <li>Show your ticket to the front desk.</li>
            <li>
              Get an admission card from the front desk. After that, take the
              elevator and go up to the 23rd floor.
            </li>
            <li>Take another elevator and go up to the 41st floor.</li>
            <li>The conference hall is the 41st floor.</li>
          </ol>
        </div>
      </div>
    </>
  );
}
