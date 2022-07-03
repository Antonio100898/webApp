import { List } from "@mui/material";
import DashboardMenuItem from "../MenuListItems/DashboardMenuItem";
import MenuListItem from "../MenuListItems/MenuListItem";
import { mainMenuItems } from "../../../../Store/MainMenuItems/MainMenuItems";
import NavMenuItem from "../MenuListItems/NavMenuItem";
import { styles } from "../../../../../styles/styles";

const MainMenu = () => {
  
  return (
    <List sx={styles.drawerMainMenu}>
      <DashboardMenuItem
        label="Dashboard"
      />
      {mainMenuItems.map((item) => (
        item.path? <NavMenuItem key={item.label} icon={item.icon} path={item.path} label={item.label} orders={item.orders} /> : <MenuListItem key={item.label} collapsible={item.collapsible} label={item.label} icon={item.icon} />
      ))}
    </List>
  );
};
export default MainMenu;
