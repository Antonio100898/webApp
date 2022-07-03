import { Box, Typography } from "@mui/material"
import { styles } from "../../../../../styles/styles"
import { BluePaperLinkProps } from "../../../../interfaces/interfaces"

const BluePaperLink: React.FC<BluePaperLinkProps> = ({text, icon}) => {
    return <Box sx={styles.bluePaperLinkWrapper}>
        <Typography sx={styles.bluePaperLinkText} fontSize={22} variant="h2">{text}</Typography>
        <Box sx={styles.bluePaperLinkIcon}>{icon}</Box>
    </Box>
}

export default BluePaperLink