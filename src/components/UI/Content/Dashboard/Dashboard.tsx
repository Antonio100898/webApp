import { Box, Typography } from "@mui/material";
import { styles } from "../../../../styles/styles";
import { statisticPaperItems } from "../../../Store/StatisticPaperItems/StatisticPaperItems";
import DashboardLink from "./DashboardLinks/DashboardLink";
import MainBanners from "./MainBanners/MainBanners";
import SideBanners from "./SideBanners/SideBanners";

const Dashboard = () => {
  return (
    <Box sx={styles.dashboardWrapper}>
      <Box sx={styles.dashboardBlueBox}>
        <Box sx={styles.blueBoxContent}>
          <Typography fontSize={42} variant="h3">
            Welcome Mario!
          </Typography>
          <DashboardLink />
        </Box>
      </Box>
       <Box sx={styles.bannersContainer}>
        <MainBanners items={statisticPaperItems} />
        <SideBanners />
      </Box> 
    </Box>
  );
};
export default Dashboard;
