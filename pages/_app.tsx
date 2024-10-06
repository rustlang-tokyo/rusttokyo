import { theme2022 } from "@/constants/2022/css/theme";
import { theme2023 } from "@/constants/2023/css/theme";
import { theme2024 } from "@/constants/2024/css/theme";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";

const rustTokyoOriginal = extendTheme({
  colors: {
    ivy: {
      100: "#1E0A5F",
    },
    ivory: {
      100: "#F3EFE7",
    },
    coral: {
      100: "#F00A0A",
    },
    purple: {
      100: "#3F16C7",
    },
    vampireBlack: {
      100: "#03000F",
    },
    lightCobaltBlue: {
      100: "#9292FF",
    },
    winterWizard: {
      100: "#A0D6FF",
    },
    cream: {
      100: "#FFFCCF",
    },
    cottonCandy: {
      100: "#FFBBDE",
    },
  },
});

const App = ({ Component, pageProps, router }: AppProps) => {
  // biome-ignore lint/suspicious/noExplicitAny: CSS theme は動的なため any を許容する
  let theme: Record<string, any>;
  if (
    router.route === "/" ||
    router.route.startsWith("/scta") ||
    router.route.startsWith("/sponsors") ||
    router.route.startsWith("/en")
  ) {
    theme = theme2024;
  } else if (router.route.startsWith("/2023")) {
    theme = theme2023;
  } else if (router.route.startsWith("/2022")) {
    theme = theme2022;
  } else {
    theme = rustTokyoOriginal;
  }

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width,initial-scale=1" name="viewport" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Rust.Tokyo is a conference for Rustaceans."
        />
        <meta
          property="og:image"
          content="/static/logo/rust_tokyo_rectangle_ogp.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="/static/logo/rust_tokyo_rectangle_ogp.png"
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
