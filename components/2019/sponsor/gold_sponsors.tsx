import { SponsorLogo } from "./sponsor_logo";

const sponsors = [
  {
    name: "キャディ株式会社",
    image: "caddi.jpg",
    url: "https://caddi.jp/",
    text: "Harnessing the power of technology to unleash the potential of manufacturing",
  },
  {
    name: "株式会社オプティム",
    image: "optim.png",
    url: "https://www.optim.co.jp/",
    text: `OPTiMは農業、医療、建設をはじめ様々な産業の課題、私達の身の回りにある課題解決に取組むテクノロジー企業です。
自社のAI・IoTプラットフォーム「OPTiM Cloud IoT OS」、AI・IoT・Robot/Hardware技術を活用したソリューションの開発・提供を行っています。`,
  },
  {
    name: "Holochain",
    image: "holochain.png",
    url: "https://holochain.org/",
    text: "HolochainはRustで開発された分散型アプリを作るためのフレームワークを提供しています。そのアプリをRustで作成するるための開発キットもあります。これを利用することで、分散型ハッシュテーブルを用いたスケーラブルな分散アプリが構築できます。",
  },
];

export function GoldSponsors() {
  return (
    <div id="goldSponsors" className="jumbotron-white jumbotron-fluid">
      <div className="container">
        <h2>Gold Sponsors</h2>
        <div className="gold-sponsors-area">
          {sponsors.map((s) => (
            <div key={`gold_sponsor_${s.name}`} className="gold-sponsors">
              <SponsorLogo
                name={s.name}
                image={`/static/2019/sponsors/gold/${s.image}`}
                url={s.url}
                className="gold-sponsors"
              />
              <p style={{ fontFamily: "din-2014, sans-serif" }}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
