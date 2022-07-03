import { Box } from "@mui/material";
import Content from "./Content/Content";
import "../../App.css";
import { styles } from "../../styles/styles";
import AppDrawer from "./SideBar/Menu/AppDrawer";

const AppContainer = () => {
  return (
    <Box sx={styles.appContainer}>
      <AppDrawer />
      <Content />
    </Box>
  );
};

export default AppContainer;
