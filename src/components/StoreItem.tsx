import {
  Card,
  CardActions,
  CardMedia,
  Button,
  Typography,
  Box,
  Grid,
} from "@mui/material";

import { formatCurrency } from "../utilities/formatCurrency";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  decreaseCartQuantity,
  increaseCartQuantity,
  removeFromCart,
} from "../redux/cartSlice";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

// store item: show all the items
export default function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart);
  const quantity = cartItems.find((item) => item.id === id)?.quantity || 0;

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ marginBottom: 5 }}>
        {/* image url */}
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={imgUrl}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 1,
          }}
        >
          {/* name */}
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              paddingLeft: 1,
              color: "text.primary",
              fontSize: 20,
              fontWeight: "medium",
            }}
          >
            {name}
          </Typography>
          {/* price */}
          <Typography
            variant="h6"
            sx={{
              paddingRight: 1,
              color: "text.primary",
              fontSize: 20,
              fontWeight: "medium",
            }}
          >
            {formatCurrency(price)}
          </Typography>
        </Box>
        {/* item action: increase, decrease, and remove */}
        <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
          {quantity === 0 ? (
            <Button
              variant="contained"
              fullWidth
              sx={{ height: 40 }}
              onClick={() => {
                dispatch(increaseCartQuantity(id));
              }}
            >
              Add to cart
            </Button>
          ) : (
            <Box>
              <IconButton
                aria-label="delete"
                color="primary"
                onClick={() => {
                  dispatch(increaseCartQuantity(id));
                }}
              >
                <AddCircleIcon />
              </IconButton>
              <Button
                variant="contained"
                startIcon={<DeleteIcon />}
                onClick={() => {
                  dispatch(removeFromCart(id));
                }}
              >
                Remove
              </Button>
              <IconButton
                aria-label="delete"
                color="error"
                onClick={() => {
                  dispatch(decreaseCartQuantity(id));
                }}
              >
                <RemoveCircleIcon />
              </IconButton>
            </Box>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
}
