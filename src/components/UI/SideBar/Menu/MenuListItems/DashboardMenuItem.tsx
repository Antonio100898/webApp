import { ListItemIcon, ListItem, Box, Typography, Link } from "@mui/material";
import { NavLink } from "react-router-dom";
import { styles } from "../../../../../styles/styles";
import HomeIcon from "../../../../Assets/HomeIcon/HomeIcon";
import Rectangle from "../../../../Assets/Rectangle/Rectangle";
import { DashboardMenuItemProps } from "../../../../interfaces/interfaces";

const DashboardMenuItem: React.FC<DashboardMenuItemProps> = ({
  label,
}) => {
  return (
    <NavLink style={styles.navLink} to="/">
      <ListItem
        sx={styles.dashboardMenuItem}
        button
      >
        <Box sx={styles.dashboardRectangle}>
          <Rectangle />
        </Box>
        <ListItemIcon sx={styles.menuIcon}>
          <HomeIcon />
        </ListItemIcon>
        <Typography
        data-testid="dashboardText"
        variant="body1"
        fontSize={18}
          sx={styles.dashboardMenuItemText}
        >{label}</Typography>
      </ListItem>
    </NavLink>
  );
};

export default DashboardMenuItem;
