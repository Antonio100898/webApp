import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import { styles } from "../../../../../../styles/styles";
import { NewsCardProps } from "../../../../../interfaces/interfaces";

const NewsCard: React.FC<NewsCardProps> = ({ item }) => {
  return (
    <Card sx={styles.newsCard}>
      <CardMedia sx={styles.newsCardImage} component="img" image={item.urlToImage? item.urlToImage : "https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=612x612&w=0&h=jPhUdbj_7nWHUp0dsKRf4DMGaHiC16kg_FSjRRGoZEI="} />
      <Box >
        <CardContent sx={styles.newsCardContent}>
          <Typography color="#103B66" variant="h4" fontSize={16}>{item.title}</Typography>
          <Typography color="#103B66" variant="h2" fontSize={14}><Link target="_blank" href={item.url}>
            read more
          </Link></Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default NewsCard;
