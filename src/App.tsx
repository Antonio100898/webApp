import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import AppContainer from "./components/UI/AppContainer";
import { theme } from "./themes/Themes";

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <AppContainer />
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
