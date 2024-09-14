import { SponsorLogo } from "./sponsor_logo";

const sponsors = [
  {
    name: "フォルシア株式会社",
    image: "forcia.jpg",
    url: "https://www.forcia.com/",
  },
  {
    name: "mozilla",
    image: "mozilla.png",
    url: "https://www.mozilla.org/en-US/",
  },
];

export function SilverSponsors() {
  return (
    <div id="silverSponsors" className="jumbotron-white jumbotron-fluid">
      <div id="silverSponsors" className="container">
        <h2>Silver Sponsors</h2>
        <div className="silver-sponsors-area">
          {sponsors.map((s) => (
            <div key={`silver_sponsor_${s.name}`} style={{ padding: 30 }}>
              <SponsorLogo
                name={s.name}
                image={`/static/2019/sponsors/silver/${s.image}`}
                url={s.url}
                className="silver-sponsors"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
