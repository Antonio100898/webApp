import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { styles } from "../../../../../styles/styles";
import { SelectComponentProps } from "../../../../interfaces/interfaces";

const SelectComponent: React.FC<SelectComponentProps> = ({ open }) => {
  return (
    <Box display={open? "block" : "none"} sx={styles.selectWrapper}>
      <Typography sx={styles.selectLabel}>Select your shop</Typography>
      <FormControl>
        <InputLabel sx={styles.inputLabel}>Fenoh Store</InputLabel>
        <Select sx={styles.select} label="Fenoh Store">
          <MenuItem>Fenoh Store</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectComponent;
