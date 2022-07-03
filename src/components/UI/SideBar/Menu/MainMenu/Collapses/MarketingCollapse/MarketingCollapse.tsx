import { Collapse, List } from "@mui/material";
import { styles } from "../../../../../../../styles/styles";
import { CollapseProps } from "../../../../../../interfaces/interfaces";
import { marketingSubItems } from "../../../../../../Store/MainMenuItems/MarketingSubItems/MarketingSubItems";
import SubMenuItem from "../../SubMenuItem/SubMenuItem";

const MarketingCollapse: React.FC<CollapseProps> = ({ open }) => {
  return (
    <Collapse in={open}>
      <List sx={styles.collapseList}>
        {marketingSubItems.map((item) => (
          <SubMenuItem key={item.label} label={item.label} />
        ))}
      </List>
    </Collapse>
  );
};
export default MarketingCollapse;
