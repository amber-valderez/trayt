import { extendTheme, ThemeProvider as Provider } from "@mui/joy/styles";
import { createElement, ReactNode } from "react";

/**
 * Customized Joy UI theme.
 * @see https://mui.com/joy-ui/customization/approaches/
 */
export const theme = extendTheme({
  components: {
    JoyListItem: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
  },
  colorSchemes: {
    light: {},
    dark: {},
  },
  shadow: {},
  fontFamily: {
    display: "Roboto, sans-serif",
  },
  typography: {
    h1: {
      fontSize: "96px",
    },
    h2: {
      color: "#004990;",
      fontSize: "40px",
      fontWeight: 400,
      wordWrap: "break-word",
    },
  },
});

export function ThemeProvider(props: ThemeProviderProps): JSX.Element {
  return createElement(Provider, { theme, ...props });
}

export type ThemeProviderProps = {
  children: ReactNode;
};
