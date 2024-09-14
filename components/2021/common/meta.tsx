import Head from "next/head";

export function Meta(props: { pageTitle?: string }) {
  return (
    <Head>
      <title>{props.pageTitle && `${props.pageTitle} | `}Rust.Tokyo 2021</title>
      <meta
        property="og:title"
        content={(() => {
          if (props.pageTitle) {
            return `${props.pageTitle} | Rust.Tokyo 2021`;
          }
          return "Rust.Tokyo 2021";
        })()}
      />
    </Head>
  );
}
