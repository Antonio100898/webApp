import { Paper, Stack, Box, Typography } from "@mui/material";
import { styles } from "../../../../../styles/styles";
import { ConfigureIcon } from "../../../../Assets/ConfigureIcon/Configureicon";
import { LinkRowIcon } from "../../../../Assets/LinkRowIcon/LinkRowIcon";
import CardLabel from "../Card/CardLabel/CardLabel";
import BluePaperLink from "../DashboardLinks/BluePaperLink";

const ConfigureStoreBanner = () => {
  return (
    <Paper sx={styles.configureShopBannerPaper}>
      <Stack
        sx={styles.verticalStack}
        direction="column"
        justifyContent="space-between"
      >
        <CardLabel icon={<ConfigureIcon />} label="Configure your shop" />
        <Box sx={styles.configureStoreOrangeText}>
          <Typography variant="h6" fontSize={34}>
            45%
          </Typography>
          <Typography variant="h4" fontSize={20}>
            Completed
          </Typography>
        </Box>
        <Typography
          sx={styles.configureStorePrimaryText}
          variant="body1"
          fontSize={20}
        >
          Complete all the steps to have a complete shop to best present to your
          customers.
        </Typography>
        <BluePaperLink text="Complete the setup!" icon={<LinkRowIcon />} />
      </Stack>
    </Paper>
  );
};

export default ConfigureStoreBanner;
