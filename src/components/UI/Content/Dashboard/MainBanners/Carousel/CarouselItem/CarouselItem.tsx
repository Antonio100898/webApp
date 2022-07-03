import { Box, Paper, Typography } from "@mui/material";
import { styles } from "../../../../../../../styles/styles";
import { CarouselItemProps } from "../../../../../../interfaces/interfaces";

const CarouselItem: React.FC<CarouselItemProps> = ({
  logo,
  text,
  background,
}) => {
  return (
    <Box sx={styles.carouselItem}>
      <Paper style={{ background: background }} sx={styles.carouselItemPaper}>
        {logo}
      </Paper>
      <Typography sx={styles.carouselItemText} fontSize={20} variant="h2">{text}</Typography>
    </Box>
  );
};

export default CarouselItem;
