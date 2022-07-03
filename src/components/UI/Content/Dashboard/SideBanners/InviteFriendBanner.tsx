import { Paper, Stack, Box, Typography } from "@mui/material";
import { styles } from "../../../../../styles/styles";
import { LinkRowIcon } from "../../../../Assets/LinkRowIcon/LinkRowIcon";
import { UsersIcon } from "../../../../Assets/UsersIcon/UsersIcon";
import CardLabel from "../Card/CardLabel/CardLabel";
import BluePaperLink from "../DashboardLinks/BluePaperLink";

const InviteFriendBanner = () => {
  return (
    <Paper sx={styles.inviteFriendBannerPaper}>
      <Stack
        sx={styles.verticalStack}
        direction="column"
        justifyContent="space-between"
      >
        <CardLabel icon={<UsersIcon />} label="Invite friend" />
        <Box sx={styles.configureStorePrimaryText}>
          <Typography variant="body1" fontSize={20}>
            <Typography sx={styles.greenText} variant="h6" component="span">Receive 50 products</Typography> by inviting a friend
            who subscribes to a plan. Your friend will receive a 30% discount
            coupon valid for any plan.
          </Typography>
        </Box>
        <BluePaperLink text="Start inviting friends!" icon={<LinkRowIcon />} />
      </Stack>
    </Paper>
  );
};

export default InviteFriendBanner;
