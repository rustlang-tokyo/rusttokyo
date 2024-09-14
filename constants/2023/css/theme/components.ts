import { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  sizes: {
    md: {
      fontSize: "md",
    },
  },
  variants: {
    outline: {
      border: "2px solid",
      color: "cottonCandy.100",
      bgColor: "vampireBlack.100",
      borderColor: "cottonCandy.100",
      _hover: {
        color: "vampireBlack.100",
        bgColor: "cottonCandy.100",
      },
      borderRadius: "40px",
    },
  },
  defaultProps: {
    size: "md",
    variant: "outline",
  },
};

export const Heading: ComponentStyleConfig = {
  sizes: {
    "2xl": {
      py: 4,
    },
    md: {
      fontSize: "24px",
      py: 4,
    },
  },
};

export const Divider: ComponentStyleConfig = {
  baseStyle: {
    bgColor: "lightCobaltBlue.100",
    borderColor: "lightCobaltBlue.100",
    border: "1px",
    opacity: 1,
  },
};
