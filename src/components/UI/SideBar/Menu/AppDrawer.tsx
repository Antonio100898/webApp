import { Box, Divider, Drawer, IconButton } from "@mui/material";
import VetrinaliveLogo from "../../../Assets/VetrinaliveLogo/Vetrinalive";
import MainMenu from "./MainMenu/MainMenu";
import SecondaryMenu from "./SecondaryMenu/SecondaryMenu";
import SelectComponent from "./SecondaryMenu/SelectComponent";
import MenuIcon from "../../../Assets/MenuIcon/MenuIcon";
import { styles } from "../../../../styles/styles";
import { useState } from "react";

const AppDrawer = () => {
  const [open, setOpen] = useState<boolean>(true)

  const openDrawerHandle = () => {
    open? setOpen(false) : setOpen(true)
  }

  return (
    <Box sx={styles.drawerWrapper}>
      <Drawer
        PaperProps={{ sx: open? styles.drawerOpened : styles.drawerClosed }}
        variant="permanent"
        transitionDuration={1}
        data-testid="drawer"
      >
        <Box sx={ open? styles.drawerHeaderOpened : styles.drewerHeaderClosed}>
          {open && <Box data-testid="vetrinaLiveLogo" sx={styles.drawerHeaderLogo}>
             <VetrinaliveLogo /> 
          </Box>}
          <IconButton data-testid="menuButton" sx={styles.menuButton} onClick={openDrawerHandle}>
            <MenuIcon />
          </IconButton>
        </Box>
        <MainMenu />
        <Divider sx={styles.sideBarDivider} />
        <SecondaryMenu />
        <SelectComponent open={open}/>
      </Drawer>
    </Box>
  );
};

export default AppDrawer;
