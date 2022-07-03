import { Box, Link, ListItem, ListItemIcon, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { styles } from "../../../../../styles/styles";
import OrdersNumber from "../../../../Assets/OrdersNumber/OrderNumber";
import { NavMenuItemProps } from "../../../../interfaces/interfaces";

const NavMenuItem: React.FC<NavMenuItemProps> = ({
  path,
  icon,
  orders,
  label,
}) => {
  return (
    <NavLink style={styles.navLink} to={path}>
      <ListItem sx={styles.menuListItem} button>
        {icon && <ListItemIcon sx={styles.menuIcon}>{icon}</ListItemIcon>}
        <Typography fontSize={18} variant="body1" sx={styles.menuItemText}>{label}</Typography>
        {orders && (
          <Box sx={styles.menuOrdersNumberIcon}>
            <OrdersNumber />
          </Box>
        )}
      </ListItem>
    </NavLink>
  );
};

export default NavMenuItem;
