import Head from "next/head";

export function Meta(props: { pageTitle?: string }) {
  return (
    <Head>
      <title>
        {props.pageTitle != null
          ? `${props.pageTitle} | Rust.Tokyo 2024`
          : "Rust.Tokyo 2024"}
      </title>
      <meta
        property="og:title"
        content={(() => {
          if (props.pageTitle) {
            return `${props.pageTitle} | Rust.Tokyo 2024`;
          }
          return "Rust.Tokyo 2024";
        })()}
      />
    </Head>
  );
}
