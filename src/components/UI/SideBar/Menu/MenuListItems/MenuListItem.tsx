import { ListItem, ListItemIcon, Typography } from "@mui/material";
import { useState } from "react";
import { styles } from "../../../../../styles/styles";
import ChevronDownIcon from "../../../../Assets/ChevronDownIcon/ChevronDownIcon";
import ChevronUpIcon from "../../../../Assets/ChevronUpIcon/ChevronUpIcon";
import { MenuListItemProps } from "../../../../interfaces/interfaces";
import CatalogueCollapse from "../MainMenu/Collapses/CatalogueCollapse/CatalogueCollapse";
import MarketingCollapse from "../MainMenu/Collapses/MarketingCollapse/MarketingCollapse";

const MenuListItem: React.FC<MenuListItemProps> = ({
  label,
  icon,
  collapsible,
}) => {
  const [open, setOpen] = useState(false);

  const collapseOpenHandler = () => {
    open ? setOpen(false) : setOpen(true);
    return;
  };

  return (
    <>
      <ListItem sx={styles.menuListItem} button onClick={collapseOpenHandler}>
        {icon && <ListItemIcon sx={styles.menuIcon}>{icon}</ListItemIcon>}
        <Typography fontSize={18} variant="body1" sx={styles.menuItemText}>{label}</Typography>
        {collapsible && (
          <div style={{ position: "absolute", left: "280px", top: "11px" }}>
            {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </div>
        )}
      </ListItem>
      {collapsible && label === "Marketing" && (
        <MarketingCollapse open={open} />
      )}
      {collapsible && label === "Catalogue" && (
        <CatalogueCollapse open={open} />
      )}
    </>
  );
};

export default MenuListItem;
