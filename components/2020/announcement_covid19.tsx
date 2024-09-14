export function Announcement() {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h2 className="top">
            Rust.Tokyo 2020 中止のお知らせ
            <br />
            Rust.Tokyo 2020 has been canceled.
          </h2>
        </div>
      </div>
      <div className="container announcement-text">
        <p>English version below.</p>
        <h3>Rust.Tokyo 2020 の開催を中止します</h3>
        <p>
          新型コロナウイルス感染症（COVID-19）に関する状況を鑑みて、
          <strong>イベント参加者が安心して参加できない</strong>だろうことから
          2020 年の Rust.Tokyo の開催を取りやめることとしました。
        </p>

        <h4>経緯と理由</h4>
        <p>
          2019 年の成功を受けて、早くから 2020
          年のカンファレンスに向けて計画と準備を進めてきました。
        </p>
        <p>
          他の Rust カンファレンスとかぶらないように調整しつつ、開催日を
          11/7（土）に決定し、会場の選定を行っていました。またティザーサイトの準備も始めていました。これが
          1 月終わりころの状態です。
        </p>
        <p>
          一方、
          1月下旬から新型コロナウィルスのニュースが世間を賑わし始めました。2
          月には多くの勉強会が中止に追い込まれ、3月中旬からは被害が全世界的に拡大していきます。COVID19
          の終息に関する予測はなされていません。7 -
          8月ごろの終息というアメリカ政府からの予測もありましたが、これも確実なものではくなっているでしょう。
        </p>
        <p>
          このような状況の中で、11
          月にカンファレンスを開けるのか、準備は予定通り進められるのか、参加者 /
          スピーカー /
          スポンサーが安心して参加できるのか、という点について、スタッフ内で議論を重ねました。そして
          4 月に中止の結論にいたりました。
          <strong>イベント参加者が安心して参加できない</strong>
          と判断したためです。
        </p>
        <p>
          運営として、今年も必ずイベントを実施したいという思いがありましたが、参加者の安全を優先しイベントを中止することにいたしました。
        </p>

        <h4>これからについて</h4>
        <p>
          Rust.Tokyo を 2021
          年に開催することを目標にしています。具体的な日程は、新型コロナウィルスの流行
          が落ち着いたタイミングで調整します。おそらく秋口での開催になるかと思います。
        </p>
        <p>
          Rust.Tokyo
          の代替イベントは予定していませんが、オンライン上でコミュニケーションする場を用意できないか検討しています。具体的なプランが決まり次第、
          Twitter 等でお知らせいたします。
        </p>

        <h4>最後に</h4>
        <p>
          まだまだ厳しい時期が続くと思いますが、この困難を乗り越え次の
          Rust.Tokyo を一緒に楽しめる日が来ることを固く信じています。
        </p>

        <p>Rust JP 高尾 知秀( Tomohide Takao )</p>
      </div>

      <div className="container announcement-text">
        <h3>Rust.Tokyo is canceled</h3>
        <p>
          Considering the recent situation of the COVID-19, we have decided to
          cancel Rust.Tokyo 2020. We contemplated that{" "}
          <strong>
            we will not be able to preserve safety and health of attendees.
          </strong>
        </p>

        <h4>How it happened and why</h4>
        <p>
          Following the last year{"'"}s success, we were planning and preparing
          for the 2020 conference early on.
        </p>
        <p>
          We planned to happen the conference on November 7th. That was the
          result we make sure the day didn{"'"}t conflict with other Rust
          conferences.
        </p>
        <p>
          We also tried to select the venue and started to prepare our teaser
          site. This was what we did at the end of January.
        </p>
        <p>
          Meanwhile, the COVID-19 updates were widely reported in late January,
          loads of tech events were cancelled in February, the situation got
          more serious in mid-March.
        </p>
        <p>
          We have no hopeful predictions of getting resolved the disease right
          now. The US government stated that it will get resolved around summer
          but is less certain.
        </p>
        <p>
          In the midst of all this, we had discussed a lot about whether the
          conference could do in November with keeping
          attendees/speakers/sponsors safe, healthy and comfortable and whether
          the preparation could be right on schedule. Then, we came to the
          conclusion to cancel the conference in April. We concluded{" "}
          <strong>we can{"'"}t ensure to keep attendees comfortable</strong>.
        </p>

        <h4>About the Future</h4>
        <p>
          Our aim is now to have Rust.Tokyo in 2021 normally. When the disease
          calms down, we will post the specific schedule about the event. I
          suppose it would be probably happen in early fall.
        </p>
        <p>
          We have no plan to have alternative events for Rust.Tokyo right now,
          but we{"'"}re looking for a chance to communicate with Rust users
          online. We{"'"}ll post updates on our Twitter account when the plans
          concreted.
        </p>

        <h4>Conclusion</h4>
        <p>
          It will be a difficult phase, but we firmly believe that we can
          overcome this difficulty and enjoy the next Rust.Tokyo together.
        </p>

        <p>Tomohide Takao (Rust JP)</p>
      </div>
    </>
  );
}
