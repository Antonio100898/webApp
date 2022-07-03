import CustomerSupportIcon from "../../Assets/CustomerSupportIcon/CustomerSupportIcon";
import ShareIcon from "../../Assets/ShareIcon/ShareIcon";
import ViewIcon from "../../Assets/ViewIcon/ViewIcon";
import { MenuListItem } from "../../interfaces/interfaces";

export const secondaryMenuItems: Array<MenuListItem> = [
    {
      label: "Customer Support",
      icon: <CustomerSupportIcon />,
      path: "/support"
    },
    {
      label: "Share your shop",
      icon: <ShareIcon />,
      path: "/share_shop"
    },
    {
      label: "View your shop",
      icon: <ViewIcon />,
      path: "/view_shop"
    }
  ]