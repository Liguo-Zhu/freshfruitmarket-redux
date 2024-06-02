import { Box, Typography, Divider, Container } from "@mui/material";

export default function Home() {
  return (
    <Container>
      <Box sx={{ margin: "20px" }}>
        <Typography
          fontSize={30}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "@media (max-width: 500px)": { fontSize: "1.3rem" },
          }}
        >
          Fresh Fruit Market
        </Typography>
        <Typography
          fontSize={20}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "GrayText",
            "@media (max-width: 500px)": { fontSize: "1rem" },
          }}
        >
          Your Ultimate Destination for Freshness!
        </Typography>
        <Divider sx={{ marginTop: "10px" }}></Divider>
        <Typography
          sx={{
            marginTop: "20px",
            color: "GrayText",
            "@media (max-width: 500px)": { fontSize: "0.9rem" },
          }}
        >
          At FreshFruitMarket, we believe that every bite should be a burst of
          flavor and vitality. Step into our virtual marketplace and discover an
          oasis of freshness, where nature's finest fruits await your
          exploration.
        </Typography>
        <Typography
          sx={{
            marginTop: "10px",
            color: "GrayText",
            "@media (max-width: 500px)": { fontSize: "0.9rem" },
          }}
        >
          We take pride in our commitment to freshness. Our fruits are sourced
          from trusted growers and suppliers, ensuring that only the finest
          produce makes its way to your table. With our strict quality control
          measures, you can rest assured that every fruit is of the highest
          standard.
        </Typography>
        <Typography
          sx={{
            marginTop: "10px",
            color: "GrayText",
            "@media (max-width: 500px)": { fontSize: "0.9rem" },
          }}
        >
          At FreshFruitMarket, we're not just selling fruits - we're delivering
          an experience. Join us in celebrating the abundance of nature and
          savor the freshness of every moment. Welcome home to FreshFruitMarket
          - where freshness reigns supreme!
        </Typography>
        <Box
          sx={{
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="/images/fruits.jpg" style={{ maxWidth: "80vw" }}></img>
        </Box>
      </Box>
    </Container>
  );
}
