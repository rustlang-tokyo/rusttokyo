import Head from "next/head";

export function Meta(props: { pageTitle?: string }) {
  return (
    <Head>
      <title>
        {props.pageTitle != null
          ? `${props.pageTitle} | Rust.Tokyo 2023`
          : "Rust.Tokyo 2023"}
      </title>
      <meta
        property="og:title"
        content={(() => {
          if (props.pageTitle) {
            return `${props.pageTitle} | Rust.Tokyo 2023`;
          }
          return "Rust.Tokyo 2023";
        })()}
      />
    </Head>
  );
}
