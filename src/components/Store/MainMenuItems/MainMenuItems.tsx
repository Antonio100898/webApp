import CatalogueIcon from "../../Assets/CatalogueIcon/CatalogueIcon";
import OrdersIcon from "../../Assets/OrdersIcon/OrdersIcon";
import CustomerIcon from "../../Assets/CustomersIcon/CustomerIcon";
import MarketingIcon from "../../Assets/MarketingIcon/MarketingIcon";
import DeliveryIcon from "../../Assets/DeliveryIcon/DeliveryIcon";
import PaymentIcon from "../../Assets/PaymentIcon/PaymentIcon";
import StoreDesignIcon from "../../Assets/StoreDesignIcon/StoreDesignIcon";
import SubscriptionIcon from "../../Assets/SubscriptionIcon/SubscriptionIcon";
import IntegrationsIcon from "../../Assets/IntegrationsIcon/IntegrationsIcon";
import SettingsIcon from "../../Assets/SettingsIcon/SettingsIcon";
import LogOutIcon from "../../Assets/LogOutIcon/LogOutIcon";
import ExtensionsIcon from "../../Assets/ExtensionsIcon/ExtensionsIcon";
import { MenuListItem } from "../../interfaces/interfaces";

export const mainMenuItems: Array<MenuListItem> = [
    {
      label: "Catalogue",
      icon: <CatalogueIcon />,
      collapsible: true,
    },
    {
      label: "Orders",
      icon: <OrdersIcon />,
      orders: true,
      path: "/orders"
    },
    {
      label: "Customers",
      icon: <CustomerIcon />,
      path: "/customers"
    },
    {
      label: "Marketing",
      collapsible: true,
      icon: <MarketingIcon />,
    },
    {
      label: "Delivery Options",
      icon: <DeliveryIcon />,
      path: "/delivery_options"
    },
    {
      label: "Payment Options",
      icon: <PaymentIcon />,
      path: "/payment_options"
    },
    {
      label: "Store Design",
      icon: <StoreDesignIcon />,
      path: "/store_design"
    },
    {
      label: "Subsription",
      icon: <SubscriptionIcon />,
      path: "/subscription"
    },
    {
      label: "Integrations",
      icon: <IntegrationsIcon />,
      path: "/integrations"
    },
    {
      label: "Extensions",
      icon: <ExtensionsIcon />,
      path: "/extensions"
    },
    {
      label: "Settings",
      icon: <SettingsIcon />,
      path: "/settings"
    },
    {
      label: "Log Out",
      icon: <LogOutIcon />,
      path: "/logout"
    },
  ];