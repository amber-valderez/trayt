import { Box, Button, Container, Typography } from "@mui/joy";
import { Link } from "react-router-dom";
import { usePageEffect } from "../core/page";

export const Component = (): JSX.Element => {
  usePageEffect({ title: "Splash" });
  return (
    <Container sx={{ py: 2 }}>
      <Typography sx={{ mb: 2, textAlign: "center" }} level="h2">
        Welcome to Bank of Trayt
      </Typography>
      <Box mb={16}></Box>
      <Typography sx={{ mb: 2, textAlign: "center" }} level="h2">
        Initiate a new Direct Deposit to earn 5% for 36 Months!
      </Typography>
      <Box mb={16}></Box>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button component={Link} to="/direct-deposit">
          Learn More
        </Button>
      </div>
    </Container>
  );
};
