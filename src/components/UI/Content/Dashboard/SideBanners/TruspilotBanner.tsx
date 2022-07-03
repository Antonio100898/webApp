import { Paper, Stack, Box, Typography } from "@mui/material";
import { styles } from "../../../../../styles/styles";
import { GreenLinkRowIcon } from "../../../../Assets/GreenLinkRowIcon/GreenLinkRowIcon";
import { LinkRowIcon } from "../../../../Assets/LinkRowIcon/LinkRowIcon";
import { TrustpilotLogo } from "../../../../Assets/TrustpilotLogo/TrustpilotLogo";
import BluePaperLink from "../DashboardLinks/BluePaperLink";

const TruspilotBanner = () => {
  return (
    <Paper sx={styles.trustpilotBannerPaper}>
      <Stack
        sx={styles.verticalStack}
        direction="column"
        justifyContent="space-between"
      >
        <TrustpilotLogo />
        <Typography
          sx={styles.trustpilotPrimaryText}
          variant="body1"
          fontWeight={300}
          fontSize={22}
        >
          Show us your love by leaving a positive review on trust pilot and
          receive the extension of{" "}
          <Typography fontSize={21} variant="body2" component="span">
            50 additional products
          </Typography>
        </Typography>
        <Box sx={styles.bluePaperLinkWrapper}>
          <Typography sx={styles.greenPaperLinkText} fontSize={20} variant="h2">
            Write a review on Trustpilot
          </Typography>
          <Box sx={styles.bluePaperLinkIcon}>
            <GreenLinkRowIcon />
          </Box>
        </Box>
      </Stack>
    </Paper>
  );
};

export default TruspilotBanner;
