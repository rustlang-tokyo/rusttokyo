import Head from "next/head";

export function Meta(props: { pageTitle?: string }) {
  return (
    <Head>
      <title>{props.pageTitle && `${props.pageTitle} | `}Rust.Tokyo 2019</title>
      <meta
        property="og:title"
        content={(() => {
          if (props.pageTitle) {
            return `${props.pageTitle} | Rust.Tokyo 2019`;
          }
          return "Rust.Tokyo 2019";
        })()}
      />
      <script
        src="https://code.jquery.com/jquery-3.1.1.slim.min.js"
        integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
        integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href="https://use.typekit.net/kkw8qgn.css" />
      <link rel="stylesheet" href="/static/2019/site.css" />
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"
        integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb"
        crossOrigin="anonymous"
      />
      <script
        src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js"
        integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn"
        crossOrigin="anonymous"
      />
      <meta name="theme-color" content="#1e50a2" />
    </Head>
  );
}
