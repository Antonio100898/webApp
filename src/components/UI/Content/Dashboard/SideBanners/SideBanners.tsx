import { Stack} from "@mui/material";
import { styles } from "../../../../../styles/styles";
import ConfigureStoreBanner from "./ConfigureStoreBanner";
import CustomerSupportBanner from "./CustomerSupportBanner";
import InviteFriendBanner from "./InviteFriendBanner";
import TruspilotBanner from "./TruspilotBanner";

const SideBanners = () => {
  return (
    <Stack sx={styles.sideBannersBox} direction="column" spacing={5}>
      <ConfigureStoreBanner />
      <TruspilotBanner />
      <InviteFriendBanner />
      <CustomerSupportBanner />
    </Stack>
  );
};

export default SideBanners;
