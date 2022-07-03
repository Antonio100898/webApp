import { Box, Paper, Stack, Typography } from "@mui/material";
import { styles } from "../../../../../styles/styles";
import { AppStoreIcon } from "../../../../Assets/AppStoreIcon/AppStoreIcon";
import { ExtensionsMarketplaceIcon } from "../../../../Assets/ExtensionsMarketplaceIcon/ExtensionsMarketplaceIcon";
import { GooglePlayIcon } from "../../../../Assets/GooglePlayIcon/GooglePlayIcon";
import { IPhoneImage } from "../../../../Assets/iPhoneImage/IPhoneImage";
import { LinkRowIcon } from "../../../../Assets/LinkRowIcon/LinkRowIcon";
import { WhiteArrowRight } from "../../../../Assets/WhiteArrowRight/WhiteArrowRight";
import { MainBannersProps } from "../../../../interfaces/interfaces";
import { carouselItems } from "../../../../Store/CarouselItems/CarouselItems";
import CardLabel from "../Card/CardLabel/CardLabel";
import BluePaperLink from "../DashboardLinks/BluePaperLink";
import News from "./News/News";
import StatisticPaper from "../StatisticPaper/StatisticPaper";
import SlidesCarousel from "./Carousel/SlidesCarousel";

const MainBanners: React.FC<MainBannersProps> = ({ items }) => {
  return (
    <Box sx={styles.mainBannersBox}>
      {items.map((item) => (
        <StatisticPaper
          ordersReceived={item.ordersReceived}
          earnings={item.earnings}
          key={item.label}
          visitorsCount={item.visitorsCount}
          link={item.link}
          label={item.label}
          labelIcon={item.labelIcon}
        />
      ))}
      <Paper sx={styles.mainBannerPaper}>
        <Box sx={styles.sellBannerTextBox}>
          <Typography fontSize={26} variant="h4" component="div">
            Sell your products on your exclusive APP published on the stores
          </Typography>
        </Box>
        <Box sx={styles.showMoreButton}>
          <Typography
            sx={styles.showMoreButtonText}
            fontSize={20}
            variant="h5"
            component="div"
          >
            Show more
          </Typography>
          <Box sx={styles.showMoreButtonIcon}>
            <WhiteArrowRight />
          </Box>
        </Box>
        <Box sx={styles.mobileStoreIconsBox}>
          <AppStoreIcon />
          <GooglePlayIcon />
        </Box>
        <Box sx={styles.iPhoneImageBox}>
          <IPhoneImage />
        </Box>
      </Paper>
      <Paper sx={styles.extensionsMarketPlacePaper}>
        <Stack
          direction="column"
          justifyContent="space-between"
          sx={styles.verticalStack}
        >
          <CardLabel
            label="Extensions Marketplace"
            icon={<ExtensionsMarketplaceIcon />}
          />
          <SlidesCarousel items={carouselItems} />
          <BluePaperLink
            text="Discover all extensions"
            icon={<LinkRowIcon />}
          />
        </Stack>
      </Paper>
      <Paper sx={styles.newsPaper}>
        <News />
      </Paper>
    </Box>
  );
};

export default MainBanners;
