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
import React, { useRef } from "react";
import bitcoin from "../../../images/bitcoin.svg";
import bannerStyles from "../../../styles/Banner.module.css";
import Navigation from "../../Navigation/Navigation";

const Banner = () => {
  //Ref for email
  const emailInputRef = useRef();

  //Submit handler for auth
  async function submitHandler(event) {
    //Prevent default HTMl function
    event.preventDefault();

    //Get value of email and password inputs
    const enteredEmail = emailInputRef.current.value;

    if (!enteredEmail || enteredEmail == "") {
      return res.status(400).json({ error: "Email is required" });
    }

    try {
      await fetch("https://www.getrevue.co/api/v2/subscribers", {
        method: "POST",
        headers: {
          Authorization: `Token ${process.env.REVUE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: enteredEmail,
          double_opt_in: false,
        }),
      });

      emailInputRef.current.value = "";
    } catch (error) {
      await console.log(error);
    }
  }

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
                  {`Hey it's Alexander (The founder of Leap Education), check out
                  my newsletter to take a further deep dive into crypto topics
                  and projects!`}
                </Typography>
              </Box>
              <Box className={bannerStyles.subscribeBox} sx={{ my: 3 }}>
                <form
                  onSubmit={submitHandler}
                  className={bannerStyles.subscribeBox}
                ></form>
                <Stack
                  direction="row"
                  divider={<Divider orientation="vertical" flexItem />}
                  spacing={2}
                >
                  <input
                    className={bannerStyles.subscribeForm}
                    placeholder="Enter your email address..."
                    type="email"
                    id="email"
                    ref={emailInputRef}
                    required
                  />
                  <Button
                    className={bannerStyles.subscribeBtn}
                    variant="contained"
                    type="submit"
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
