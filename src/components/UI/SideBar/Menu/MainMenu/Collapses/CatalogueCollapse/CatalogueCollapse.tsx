import { Collapse, List } from "@mui/material";
import { styles } from "../../../../../../../styles/styles";
import { CollapseProps } from "../../../../../../interfaces/interfaces";
import { catalogueSubItems } from "../../../../../../Store/MainMenuItems/CatalogueSubItems/CatalogueSubItems";
import SubMenuItem from "../../SubMenuItem/SubMenuItem";

const CatalogueCollapse: React.FC<CollapseProps> = ({ open }) => {
  return (
    <Collapse in={open}>
      <List sx={styles.collapseList}>
        {catalogueSubItems.map((item) => (
          <SubMenuItem key={item.label} label={item.label} />
        ))}
      </List>
    </Collapse>
  );
};

export default CatalogueCollapse;
