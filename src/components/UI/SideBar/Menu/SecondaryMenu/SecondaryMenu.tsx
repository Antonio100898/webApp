import { List } from "@mui/material";
import { Fragment } from "react";
import { styles } from "../../../../../styles/styles";
import { secondaryMenuItems } from "../../../../Store/SecondaryMenuItems/SecondaryMenuItems";
import MenuListItem from "../MenuListItems/MenuListItem";
import NavMenuItem from "../MenuListItems/NavMenuItem";

const SecondaryMenu = () => {
  return (
    <Fragment>
      <List sx={styles.secondaryMenu}>
        {secondaryMenuItems.map((item) => (
          item.path? <NavMenuItem path={item.path} key={item.label} label={item.label} icon={item.icon} /> : <MenuListItem  label={item.label}/>
        ))}
      </List>
    </Fragment>
  );
};

export default SecondaryMenu;
