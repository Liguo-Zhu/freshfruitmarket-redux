import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { Box, Container } from "@mui/material";
import CheckOut from "./pages/CheckOut";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { BrowserRouter } from "react-router-dom";
import { ShoppingCart } from "./components/ShoppingCart.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <ShoppingCart />
        <Container sx={{ minWidth: "500px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/checkout" element={<CheckOut />} />
          </Routes>
          <Box
            sx={{
              marginTop: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "GrayText",
            }}
          >
            <p>&copy; 2024 Fresh Fruit Market. All rights reserved.</p>
          </Box>
        </Container>
      </Provider>
    </BrowserRouter>
  );
}
