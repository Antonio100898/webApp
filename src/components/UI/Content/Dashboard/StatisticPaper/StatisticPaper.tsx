import { Box, Paper, Stack, Typography } from "@mui/material";
import { styles } from "../../../../../styles/styles";
import { ThisMonthRowIcon } from "../../../../Assets/ThisMonthRowIcon/ThisMonthRowIcon";
import { StatisticPaperProps } from "../../../../interfaces/interfaces";
import CardLabel from "../Card/CardLabel/CardLabel";
import BluePaperLink from "../DashboardLinks/BluePaperLink";
import OrdersInfoStack from "./OrdersInfoStack";

const StatisticPaper: React.FC<StatisticPaperProps> = ({
  label,
  labelIcon,
  visitorsCount,
  link,
  earnings,
  ordersReceived,
}) => {
  return (
    <Paper sx={styles.statisticPaper}>
      <Stack
        sx={styles.verticalStack}
        direction="column"
        justifyContent="space-between"
      >
        <Stack justifyContent="space-between" direction="row">
          <Box>
            <CardLabel label={label} icon={labelIcon} />
          </Box>
          <Box sx={styles.thisMonthStatisticPaper}>
            <Typography sx={styles.statisticPaperThisMonth} variant="body1">
              This month
            </Typography>
            <Box sx={styles.thisMonthStatisticPaperIcon}>
              <ThisMonthRowIcon />
            </Box>
          </Box>
        </Stack>
        {visitorsCount && (
          <Typography
            component="div"
            color="#103B66"
            fontSize={50}
            variant="h4"
          >
            {visitorsCount}
          </Typography>
        )}
        {label === "Orders" && (
          <Box sx={styles.ordersInfoBox}>
            {ordersReceived && (
              <OrdersInfoStack
                label="Orders received"
                ordersReceived={ordersReceived}
              />
            )}
            {earnings && (
              <OrdersInfoStack label="Earnings" earnings={earnings} />
            )}
          </Box>
        )}
        <BluePaperLink text={link.text} icon={link.icon} />
      </Stack>
    </Paper>
  );
};

export default StatisticPaper;
