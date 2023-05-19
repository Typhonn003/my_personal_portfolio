import { createStitches, createTheme, globalCss } from "@stitches/react";
import { ReactNode } from "react";
import { styled } from "./stitches.config";

interface GlobalStyleProps {
  children: ReactNode;
}

export const Container = styled("div", {
  maxWidth: "$container",
  margin: "0 auto",
  padding: "0 1rem",

  "@tablet": {
    maxWidth: "$containerTablet",
  },
});

export const Flex = styled("div", {
  display: "flex",
  gap: "$1",
  alignItems: "center",
});

export const Box = styled("div", {
  maxWidth: "100%",
});

export const colors = {
  color: {
    brand1: {
      color: "$violet1",
    },
    brand2: {
      color: "$violet2",
    },
    brand3: {
      color: "$violet3",
    },
    brand4: {
      color: "$violet4",
    },
    brand5: {
      color: "$violet5",
    },
    brand6: {
      color: "$violet6",
    },
    brand7: {
      color: "$violet7",
    },
    brand8: {
      color: "$violet8",
    },
    brand9: {
      color: "$violet9",
    },
    brand10: {
      color: "$violet10",
    },
    brand11: {
      color: "$violet11",
    },
    brand12: {
      color: "$violet12",
    },
  },
};

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    fontFamily: "'Inter', sans-serif",
    boxSizing: "border-box",
  },
  html: {
    scrollBehavior: "smooth",
  },
  a: { textDecoration: "none" },
});

export const GlobalStyle = ({ children }: GlobalStyleProps): JSX.Element => {

  const theme = createTheme({
    colors: {
      socialInstagram: "#CF50AC",
      socialFacebook: "#506CCF",
      socialLinkedin: "#0E76A8",

      whiteFixed: "#ffffff",
      mode: "#ffffff",
    },
    sizes: {
      container: "75rem",
      containerTablet: "40rem",
    },
    space: {
      1: "0.5rem",
      2: "1rem",
      3: "2rem",
      4: "3rem",
      5: "4rem",
      section: "10rem",
      sectionMobile: "4rem",
    },
    fonts: {
      titles: '"IBM Plex Sans", sans-serif;',
      texts: '"Inter", sans-serif',
    },
    fontSizes: {
      title1: "2.75rem",
      title2: "1.75rem",
      title3: "1.50rem",
      title4: "1.25rem",
      text1: "1rem",
      text2: "0.875rem",

      // Mobile
      title1Mobile: "$title2",
      title2Mobile: "$title3",
    },
    lineHeights: {
      title1: "3.8rem",
      title2: "2.75rem",
      title3: "2.5rem",
      title4: "1.25rem",
      text1: "1.75rem",
      text2: "1.75rem",

      // Mobile
      title1Mobile: "$title2",
      title2Mobile: "$title3",
    },

    radii: {
      1: "0.5rem",
      2: "0.25rem",
    },
  });

  globalStyles();

  const App = styled("div", {
    minHeight: "100vh",
  });

  return <App className={theme}>{children}</App>;
};
