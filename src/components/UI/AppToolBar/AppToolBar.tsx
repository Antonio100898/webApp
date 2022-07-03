import { AppBar, Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { styles } from "../../../styles/styles";
import { WhatsNew } from "../../Assets/WhatsNewIcon/WhatsNew";
import { ZapIcon } from "../../Assets/ZapIcon/ZapIcon";

const AppToolBar = () => {
  const [label, setLabel] = useState("Dashboard");

  const location = useLocation();

  const { pathname } = location;

  useEffect(() => {
    switch (pathname) {
      case "/":
        setLabel("Dashboard");
        break;
      case "/orders":
        setLabel("Orders");
        break;
      case "/customers":
        setLabel("Customers");
        break;
      case "/orders":
        setLabel("Orders");
        break;
      case "/delivery_options":
        setLabel("Delivery Options");
        break;
      case "/payment_options":
        setLabel("Payment Options");
        break;
      case "/store_design":
        setLabel("Store Design");
        break;
      case "/subscription":
        setLabel("Subscription");
        break;
      case "/integrations":
        setLabel("Integrations");
        break;
      case "/extensions":
        setLabel("Extensions");
        break;
      case "/settings":
        setLabel("Settings");
        break;
      case "/logout":
        setLabel("Logout");
        break;
      case "/support":
        setLabel("Customer Support");
        break;
      case "/share_shop":
        setLabel("Share your shop");
        break;
      case "/view_shop":
        setLabel("View your shop");
        break;
      case "/catalogue/digital":
        setLabel("Digital");
        break;
      case "/catalogue/clothes":
        setLabel("Clothes");
        break;
      case "/catalogue/sport":
        setLabel("Sport");
        break;
      case "/marketing/discount_codes":
        setLabel("Discount codes");
        break;
      case "/marketing/exit_intent":
        setLabel("Exit intent");
        break;
      case "/marketing/checkout_features":
        setLabel("Checkout Features");
        break;
      case "/marketing/post_purchase_conversion":
        setLabel("Post-purchase conversion");
        break;
      case "/marketing/cart_abandonment":
        setLabel("Cart abandonment");
        break;
      case "/marketing/timer_checkout":
        setLabel("Timer checkout");
        break;
      case "/marketing/special_offer":
        setLabel("Special Offer");
        break;
      case "/marketing/sell_on_social":
        setLabel("Sell on Social");
        break;
      case "/marketing/seasonal_offer":
        setLabel("Seasonal Offer");
        break;
    }
  }, [pathname]);
  return (
    <AppBar position="static" sx={styles.topAppBar}>
      <Box sx={styles.topAppBarItem}>
        <Typography fontSize={24} variant="h4">
          {label}
        </Typography>
        <Box sx={styles.appBarBadgeWrapper}>
          <Box>
            <ZapIcon />
          </Box>
          <Typography sx={styles.appBarBadgeText} fontSize={18} variant="h2">
            What's new
          </Typography>
          <Box sx={styles.whatNewBadge}>
            <WhatsNew />
          </Box>
        </Box>
      </Box>
    </AppBar>
  );
};

export default AppToolBar;
