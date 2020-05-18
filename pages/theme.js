import React from 'react'
import { theme, CSSReset } from "@chakra-ui/core";
import { ThemeProvider } from "emotion-theming"

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const customTheme = {
    ...theme,
    breakpoints,
    colors: {
      ...theme.colors,
      brand: {
        900: "#1a365d",
        800: "#153e75",
        700: "#2a69ac",
      },
    },
  };

export default function Theme({children}) {
    return (
        <ThemeProvider theme={customTheme}>
            <CSSReset />
            {children}
        </ThemeProvider>
    )
}
