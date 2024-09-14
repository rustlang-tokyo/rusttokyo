import { extendTheme } from "@chakra-ui/react";
import { Button, Divider, Heading } from "./components";

// See default in https://chakra-ui.com/docs/styled-system/theme
export const theme2023 = extendTheme({
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
  components: {
    Button,
    Heading,
    Divider,
  },
  styles: {
    global: {
      body: {
        color: "white",
      },
    },
  },
});
