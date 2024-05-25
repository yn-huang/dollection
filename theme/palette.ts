import type { ColorSystemOptions } from "@mui/material/styles";

import type { ColorScheme } from "./types";

export const colorSchemes = {
  dark: {
    palette: {
      primary: {
        main: "#5D87FF",
        light: "#ECF2FF",
        dark: "#4570EA",
      },
      secondary: {
        main: "#49BEFF",
        light: "#E8F7FF",
        dark: "#23afdb",
      },
      success: {
        main: "#13DEB9",
        light: "#E6FFFA",
        dark: "#02b3a9",
        contrastText: "#ffffff",
      },
      info: {
        main: "#539BFF",
        light: "#EBF3FE",
        dark: "#1682d4",
        contrastText: "#ffffff",
      },
      error: {
        main: "#FA896B",
        light: "#FDEDE8",
        dark: "#f3704d",
        contrastText: "#ffffff",
      },
      warning: {
        main: "#FFAE1F",
        light: "#FEF5E5",
        dark: "#ae8e59",
        contrastText: "#ffffff",
      },
      grey: {
        100: "#F2F6FA",
        200: "#EAEFF4",
        300: "#DFE5EF",
        400: "#7C8FAC",
        500: "#5A6A85",
        600: "#2A3547",
      },
      text: {
        primary: "#2A3547",
        secondary: "#5A6A85",
      },
      action: {
        disabledBackground: "rgba(73,82,88,0.12)",
        hoverOpacity: 0.02,
        hover: "#f6f9fc",
      },
      divider: "#e5eaef",
    },
  },
  light: {
    palette: {
      primary: {
        main: "#5D87FF",
        light: "#ECF2FF",
        dark: "#4570EA",
      },
      secondary: {
        main: "#49BEFF",
        light: "#E8F7FF",
        dark: "#23afdb",
      },
      success: {
        main: "#13DEB9",
        light: "#E6FFFA",
        dark: "#02b3a9",
        contrastText: "#ffffff",
      },
      info: {
        main: "#539BFF",
        light: "#EBF3FE",
        dark: "#1682d4",
        contrastText: "#ffffff",
      },
      error: {
        main: "#FA896B",
        light: "#FDEDE8",
        dark: "#f3704d",
        contrastText: "#ffffff",
      },
      warning: {
        main: "#FFAE1F",
        light: "#FEF5E5",
        dark: "#ae8e59",
        contrastText: "#ffffff",
      },
      grey: {
        100: "#F2F6FA",
        200: "#EAEFF4",
        300: "#DFE5EF",
        400: "#7C8FAC",
        500: "#5A6A85",
        600: "#2A3547",
      },
      text: {
        primary: "#2A3547",
        secondary: "#5A6A85",
      },
      action: {
        disabledBackground: "rgba(73,82,88,0.12)",
        hoverOpacity: 0.02,
        hover: "#f6f9fc",
      },
      divider: "#e5eaef",
    },
  },
} satisfies Partial<Record<ColorScheme, ColorSystemOptions>>;
