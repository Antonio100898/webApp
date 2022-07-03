import { ListItem, Typography } from "@mui/material"
import { styles } from "../../../../../../styles/styles"
import { SubMenuItemProps } from "../../../../../interfaces/interfaces"

const SubMenuItem: React.FC<SubMenuItemProps> = ({label}) => {
    return <ListItem button sx={styles.subMenuItem}>
        <Typography fontSize={18} variant="body1" sx={styles.subMenuText}>{label}</Typography>
    </ListItem>
}

export default SubMenuItem