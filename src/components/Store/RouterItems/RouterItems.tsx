import CustomersPage from "../../UI/Content/Customers/CustomersPage/CustomersPage";
import Dashboard from "../../UI/Content/Dashboard/Dashboard";
import DeliveryPage from "../../UI/Content/Delivery/DeliveryPage";
import ExtensionsPage from "../../UI/Content/Extensions/ExtensionsPage";
import IntegrationsPage from "../../UI/Content/Integrations/IntegrationsPage";
import OrdersPage from "../../UI/Content/Orders/OrdersPage";
import PaymentPage from "../../UI/Content/Payment/PaymentPage";
import SettingsPage from "../../UI/Content/Settings/SettingsPage";
import StoreDesignPage from "../../UI/Content/StoreDisign/StoreDesignPage";
import SubscriptionPage from "../../UI/Content/Subscription/SubscriptionPage";

export const routerItems = [
    {
      id: 1,
      path: "/",
      element: <Dashboard />,
    },
    {
      id: 2,
      path: "/orders",
      element: <OrdersPage />,
    },
    {
      id: 3,
      path: "/customers",
      element: <CustomersPage />,
    },
    {
      id: 4,
      path: "/extensions",
      element: <ExtensionsPage />,
    },
    {
      id: 5,
      path: "/settings",
      element: <SettingsPage />,
    },
    {
      id: 6,
      path: "/integrations",
      element: <IntegrationsPage />,
    },
    {
      id: 7,
      path: "/payment_options",
      element: <PaymentPage />,
    },
    {
      id: 8,
      path: "/delivery_options",
      element: <DeliveryPage />,
    },
    {
      id: 9,
      path: "/subscription",
      element: <SubscriptionPage />,
    },
    {
      id: 10,
      path: "/store_design",
      element: <StoreDesignPage />,
    },
  ];