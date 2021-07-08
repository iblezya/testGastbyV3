import { ThemeProvider } from "styled-components";
import Theme from "./src/themes/theme";

export const wrapRootElemnt = ({ element }) => (
  <ThemeProvider theme={Theme}>
    {element}
  </ThemeProvider>
)