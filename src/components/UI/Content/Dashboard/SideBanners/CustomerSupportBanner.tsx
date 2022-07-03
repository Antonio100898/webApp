import { Paper, Stack, Box, Typography, Button } from "@mui/material";
import { styles } from "../../../../../styles/styles";
import { ContactUsLabel } from "../../../../Assets/ContuctUsLabel/ContactUsLabel";
import { HeadphonesIcon } from "../../../../Assets/HeadphonesIcon/HeadphonesIcon";
import { SimoneAvatar } from "../../../../Assets/SimoneAvatar/SimoneAvatar";
import CardLabel from "../Card/CardLabel/CardLabel";

const CustomerSupportBanner = () => {
  return (
    <Paper sx={styles.customerSupportBannerPaper}>
      <Stack
        sx={styles.verticalStack}
        direction="column"
        justifyContent="space-between"
      >
        <CardLabel icon={<HeadphonesIcon />} label="Customer support" />
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={styles.customerSupportBannerContent}
        >
          <SimoneAvatar />
          <Typography fontSize={18} variant="body1">
            Simone is here to help you.
          </Typography>
        </Stack>
        <Button sx={styles.supportButtonFont} style={styles.supportButton} variant="text">
          <ContactUsLabel/>
        </Button>
      </Stack>
    </Paper>
  );
};

export default CustomerSupportBanner;
