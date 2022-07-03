import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { styles } from "../../../styles/styles";
import { routerItems } from "../../Store/RouterItems/RouterItems";
import AppToolBar from "../AppToolBar/AppToolBar";

const Content = () => {
  
  return (
    <Box sx={styles.contentWrapper}>
      <AppToolBar />
      <Routes>
        {routerItems.map((item) => (
          <Route key={item.id} path={item.path} element={item.element} />
        ))}
      </Routes>
    </Box>
  );
};

export default Content;
