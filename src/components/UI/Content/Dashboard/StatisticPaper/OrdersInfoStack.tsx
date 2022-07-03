import { Stack, Typography } from "@mui/material"
import { OrderInfoStackProps } from "../../../../interfaces/interfaces"

const OrdersInfoStack: React.FC<OrderInfoStackProps> = ({label, ordersReceived, earnings}) => {
    return <Stack justifyContent="space-between" direction="row">
    <Typography color="#6C7C8C" fontSize={20} variant="h5">
      {label}
    </Typography>
    <Typography variant="h4" fontSize={20} color="#103B66">{ordersReceived || earnings}</Typography>
  </Stack>
}

export default OrdersInfoStack