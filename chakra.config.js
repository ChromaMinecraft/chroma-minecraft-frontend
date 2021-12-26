import { extendTheme } from "@chakra-ui/react";
const config = {
  styles: {
    global: {
      body: {
        fontFamily: "'Inter', sans-serif",
      },
    },
  },
};
const theme = extendTheme(config);
export default theme;
