import { Profile } from "@/components/2019/common/profile";

const profiles = [
  {
    image: "/static/2019/organizers/dorayaki.jpeg",
    name: "Tomohide Takao",
    twitter: {
      id: "@dorayaki_kun",
      url: "https://twitter.com/dorayaki_kun",
    },
    jobTitle: "",
    text: `#rustjpのオーガナイザーをしています。
もっともっとRustを盛り上げて行きたいなーと思っています。
好きなものは桜の花と🌸お寿司🍣。
いつか桜の綺麗な時期にカンファレンスしたいですねー`,
  },
  {
    image: "/static/2019/organizers/makino.jpeg",
    name: "Misaki Makino",
    twitter: {
      id: "@T5uku5hi",
      url: "https://twitter.com/T5uku5hi",
    },
    jobTitle: "",
    text: `セキュリティエンジニアをしています。(少し前まではアプリエンジニアでした。)
WebAssembly + Rustに興味があります。趣味は筋トレとボディメイクです 💪`,
  },
  {
    image: "/static/2019/organizers/chikoski.jpeg",
    name: "chikoski@",
    twitter: {
      id: "@chikoski",
      url: "https://twitter.com/chikoski",
    },
    jobTitle: "",
    text: `いくつかのコミュニティを主催してます。

#wejs (JavaScript) / #emsn (WebAssembly) / #rustjp (Rust)の運営メンバーです。Rust-samuraiというイベントをやっていたこともありました。Tweetの半分はサッカーネタで、もう半分は技術ネタです。`,
  },
  {
    image: "/static/2019/organizers/yuki.png",
    name: "Yuki Toyoda",
    twitter: {
      id: "@helloyuki_",
      url: "https://twitter.com/helloyuki_",
    },
    jobTitle: "",
    text: "CyberAgent の某プロダクトでテックリードをしています。プログラミング言語処理系と分散システム、理論計算機科学に興味があります。また、美術鑑賞やスプラトゥーンが好きです。Rust.Tokyo では Web デザインやクリエイティブ周りを担当しています。",
  },
];

export function Orgs() {
  return (
    <div id="orgs" className="jumbotron-white jumbotron-fluid">
      <div className="container">
        <h2>主催者</h2>
      </div>
      <div className="container profile_area">
        {profiles.map((p) => {
          return <Profile key={`profile_${p.twitter.id}`} {...p} />;
        })}
      </div>
    </div>
  );
}
