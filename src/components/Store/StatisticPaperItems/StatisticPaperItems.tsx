import { LinkRowIcon } from "../../Assets/LinkRowIcon/LinkRowIcon";
import { OrdersStatisticPaperIcon } from "../../Assets/OrdersStatisticPaperIcon/OrdersStatisticPaperIcon";
import { VisitorsIcon } from "../../Assets/VisitorsIcon/VisitorsIcon";

export const statisticPaperItems = [
  {
    label: "Visitors",
    labelIcon: <VisitorsIcon />,
    visitorsCount: "1824",
    link: {
      text: "Do you want more visits? Contact us!",
      icon: <LinkRowIcon />,
    },
  },
  {
      label: "Orders",
      labelIcon: <OrdersStatisticPaperIcon/>,
      ordersReceived: "156",
      earnings: "€ 1893,24",
      link: {
        text: "10 free tips to increase your sales",
      },
  }
];
export type StatisticPaperItems = typeof statisticPaperItems