import {
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import footerStyles from "../../../styles/Footer.module.css";
import { Box } from "@mui/system";
import Image from "next/image";
import ethereum from "../../../images/ethereum.svg";
import bitcoinCurved from "../../../images/bitcoin-curved.svg";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const onChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className={footerStyles.newsletter}>
      <Container
        sx={{
          py: 8,
          color: "#fff",
          bgcolor: "#3671E9",
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <Grid container spacing={{ xs: 2, md: 8 }} columns={{ xs: 2, md: 12 }}>
          <Grid item xs={2} md={6}>
            <Box sx={{ pl: 4 }} className={footerStyles.newsletterTextBox}>
              <Box className={footerStyles.ethereum}>
                <Image src={ethereum} alt="" width={160} height={250} />
              </Box>
              <Typography sx={{ my: 2 }} variant="h4">
                Subscribe to my newsletter
              </Typography>
              <Typography variant="body1">
                Take a deeper dive into crypto topics and projects{" "}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2} md={6}>
            <Box sx={{ pr: 4 }} className={footerStyles.newsletterFormBox}>
              <Stack direction="row" spacing={2}>
                <input
                  className={footerStyles.newsletterForm}
                  placeholder="Enter your email"
                  name="name"
                  onChange={onChangeHandler}
                  value={email}
                />
                <Button
                  className={footerStyles.newsletterBtn}
                  variant="contained"
                  onClick={(email) => {
                    fetch("https://www.getrevue.co/api/v2/subscribers", {
                      method: "POST",
                      headers: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        email: email,
                        double_opt_in: false,
                      }),
                    });
                  }}
                >
                  Subscribe
                </Button>
              </Stack>
              <Box className={footerStyles.bitcoinCurved}>
                <Image src={bitcoinCurved} alt="" width={160} height={250} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Newsletter;
