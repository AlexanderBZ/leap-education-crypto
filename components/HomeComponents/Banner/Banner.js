import {
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import bitcoin from "../../../images/bitcoin.svg";
import bannerStyles from "../../../styles/Banner.module.css";
import Navigation from "../../Navigation/Navigation";

const Banner = () => {
  return (
    <div className={bannerStyles.headerSection}>
      {/* navigaiton  */}
      <Navigation />
      <Container sx={{ py: 6, color: "#fff" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            sx={{
              alignItems: "center",
              flexDirection: { xs: "column-reverse", md: "inherit" },
            }}
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, md: 12 }}
          >
            <Grid item xs={2} md={6}>
              <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                <Typography
                  sx={{
                    fontWeight: 700,
                    my: { xs: 2, md: 4 },
                    fontSize: { xs: 30, md: 64 },
                  }}
                  variant="h3"
                  component="h1"
                >
                  Take the Leap and dive into the Web 3.0 world
                </Typography>
                <Typography variant="body1">
                  Hey it's Alexander (The founder of Leap Education), check out
                  my newsletter to take a further deep dive into crypto topics
                  and projects!
                </Typography>
              </Box>
              <Box className={bannerStyles.subscribeBox} sx={{ my: 3 }}>
                <Stack
                  direction="row"
                  divider={<Divider orientation="vertical" flexItem />}
                  spacing={2}
                >
                  <input
                    className={bannerStyles.subscribeForm}
                    type="email"
                    placeholder="Enter your email address..."
                  />
                  <Button
                    className={bannerStyles.subscribeBtn}
                    variant="contained"
                  >
                    Subscribe
                  </Button>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={2} md={6}>
              <Image src={bitcoin} alt="" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Banner;
