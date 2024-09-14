import { SponsorLogo } from "./sponsor_logo";

const sponsors = [
  {
    name: "ウォンテッドリー株式会社",
    image: "wantedly.png",
    url: "https://wantedlyinc.com/ja",
  },
  {
    name: "Nervos",
    image: "nervos.png",
    url: "https://www.nervos.org/",
  },
  {
    name: "ZeniQ",
    image: "zeniq.png",
    url: "https://zeniq.co/",
  },
  {
    name: "Elastic",
    image: "elastic.png",
    url: "https://www.elastic.co",
  },
  {
    name: "DeNA",
    image: "dena.png",
    url: "https://dena.com/jp/",
  },
];

export function BronzeSponsors() {
  return (
    <div id="bronzeSponsors" className="jumbotron-white jumbotron-fluid">
      <div className="container">
        <h2>Bronze Sponsors</h2>
        <div className="bronze-sponsors-area">
          {sponsors.map((s) => (
            <div key={`bronze_sponsor_${s.name}`} className="bronze-sponsors">
              <SponsorLogo
                name={s.name}
                image={`/static/2019/sponsors/bronze/${s.image}`}
                url={s.url}
                className=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
