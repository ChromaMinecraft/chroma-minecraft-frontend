import { extendTheme } from "@chakra-ui/react";
const config = {
  styles: {
    global: {
      body: {
        fontFamily: "'Poppins', sans-serif",
      },
    },
  },
};
const theme = extendTheme(config);
export default theme;
