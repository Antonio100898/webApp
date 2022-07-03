import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { styles } from "../../../../../styles/styles";
import { ExternalLinkIcon } from "../../../../Assets/ExternalLinkIconWhite/ExternalLinkIconWhite";

const DashboardLink = () => {
  return (
    <Box sx={styles.storeLinkBox}>
      <Typography fontSize={18} variant="h4" sx={styles.storeLink} component="a">
        app.vetrinalive.it/fenoh-store
      </Typography>
      <Box><ExternalLinkIcon/></Box>
    </Box>
  );
};

export default DashboardLink;
