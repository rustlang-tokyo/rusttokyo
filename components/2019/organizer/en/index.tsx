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
    text: `I'm organizing #rustjp.
I want to make Rust more exciting.
My favorite ones are cherry blossoms🌸 and sushi🍣.
I want to hold a conference when cherry blossoms are beautiful.`,
  },
  {
    image: "/static/2019/organizers/makino.jpeg",
    name: "Misaki Makino",
    twitter: {
      id: "@T5uku5hi",
      url: "https://twitter.com/T5uku5hi",
    },
    jobTitle: "",
    text: `Misaki Makino is a Cyber Security Engineer (an Application Engineer before.)
I'm interested in WebAssembly + Rust and addicted to workout and shape up 💪`,
  },
  {
    image: "/static/2019/organizers/chikoski.jpeg",
    name: "chikoski@",
    twitter: {
      id: "@chikoski",
      url: "https://twitter.com/chikoski",
    },
    jobTitle: "",
    text: "chikoski@ is driving several tech communities in Tokyo, such as #wejs (JavaScript) / #emsn (WebAssembly) and #rustjp (Rust). Former Rust-samurai organizer. Huge football (i.e. soccer) fan. Minimal-techno lover. Native-Japanese speaker.",
  },
  {
    image: "/static/2019/organizers/yuki.png",
    name: "Yuki Toyoda",
    twitter: {
      id: "@helloyuki_",
      url: "https://twitter.com/helloyuki_",
    },
    jobTitle: "",
    text: "Yuki Toyoda is a Tech Lead at CyberAgent. Yuki is interested in programming language systems, distributed systems and theoretical computer science. Also passionate about the creative arts and Splatoon. Responsible for designing Rust.Tokyo web site and branding.",
  },
];

export function Orgs() {
  return (
    <div id="orgs" className="jumbotron-white jumbotron-fluid">
      <div className="container">
        <h2>ORGANIZERS</h2>
      </div>
      <div className="container profile_area">
        {profiles.map((p) => {
          return <Profile key={`profile_${p.twitter.id}`} {...p} />;
        })}
      </div>
    </div>
  );
}
