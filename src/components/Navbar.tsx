import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  styled,
  BadgeProps,
  Badge,
  IconButton,
  Container,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { openCart } from "../redux/onOffSlice";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

//  navigation bar
export default function Navbar() {
  const cartItems = useAppSelector((state) => state.cart);
  const onOffStatus = useAppSelector((state) => state.onOffStatus);
  const dispatch = useAppDispatch();
  const cartQuantity = cartItems.reduce(
    (quantity, item) => quantity + item.quantity,
    0
  );

  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: "4px",
            }}
          >
            <img src="/images/logo.png" width={"20px"}></img>
            <Typography
              variant="inherit"
              style={{ textTransform: "uppercase", paddingLeft: "5px" }}
            >
              Fresh Fruit Market
            </Typography>
          </Box>

          <Box>
            {/* navigate to home page */}
            <Button
              component={NavLink}
              to="/"
              color="inherit"
              sx={{
                color: "inherit",
                position: "relative",
                "&.active": {
                  fontWeight: "bold",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "2px",
                    backgroundColor: "currentColor",
                  },
                },
              }}
            >
              Home
            </Button>

            {/* navigate to store page */}
            <Button
              component={NavLink}
              to="/store"
              color="inherit"
              sx={{
                color: "inherit",
                position: "relative",
                "&.active": {
                  fontWeight: "bold",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "2px",
                    backgroundColor: "currentColor",
                  },
                },
              }}
            >
              Store
            </Button>

            {/* navigate to about page */}
            <Button
              component={NavLink}
              to="/about"
              color="inherit"
              sx={{
                color: "inherit",
                position: "relative",
                "&.active": {
                  fontWeight: "bold",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "2px",
                    backgroundColor: "currentColor",
                  },
                },
              }}
            >
              About
            </Button>
          </Box>

          {/* cart  */}
          <Box color="inherit">
            {"Cart"}
            <IconButton
              aria-label="cart"
              color="inherit"
              onClick={() => {
                dispatch(openCart());
              }}
            >
              <StyledBadge badgeContent={cartQuantity} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
