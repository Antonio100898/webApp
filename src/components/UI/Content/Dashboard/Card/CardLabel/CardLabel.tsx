import { Box, Typography } from "@mui/material"
import { styles } from "../../../../../../styles/styles"
import { CardLabelProps } from "../../../../../interfaces/interfaces"

const CardLabel: React.FC<CardLabelProps> = ({label, icon}) => {
    return <Box sx={styles.cardLabel}>
    <Box sx={styles.cardLabelIcon}>
      {icon}
    </Box>
    <Typography sx={styles.cardLabelText} variant="h4" fontSize={26}>
      {label}
    </Typography>
  </Box>
}

export default CardLabel