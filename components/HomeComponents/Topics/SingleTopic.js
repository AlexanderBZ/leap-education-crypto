import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React, { useState } from "react";
import cryptoStyles from "../../../styles/CryptoCurrencies.module.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LinksContainer from "../Links/links-container";

const SingleTopic = ({ topic }) => {
  const { name, symbol, description, icon } = topic;
  const [showLinks, setShowLinks] = useState(false);

  const toggleOpen = () => setShowLinks(!showLinks);

  return (
    <div>
      {showLinks && <LinksContainer toggleOpen={toggleOpen} links={topic} />}
      <Paper
        sx={{
          textAlign: "center",
          px: { xs: 2, md: 3 },
          py: { xs: 1, md: 6 },
          bgcolor: "#2B076E",
          color: "#fff",
          borderRadius: 3,
          display: { xs: "flex", md: "inherit" },
          gap: { xs: 4, md: "inherit" },
        }}
        onClick={toggleOpen}
      >
        <Image className={cryptoStyles.icon} src={icon} alt="" />
        <Box>
          <Typography
            className={cryptoStyles.cryptoName}
            sx={{ my: 3, fontSize: { xs: 23, md: 32 } }}
            variant="h4"
          >
            {name}
          </Typography>
          {/* <Typography
            sx={{
              mb: 2,
              fontWeight: 400,
              display: { xs: "none", md: "inherit" },
            }}
            variant="body2"
          >
            {description}
          </Typography> */}
          <Button
            sx={{ display: { xs: "none", md: "initial" } }}
            className={cryptoStyles.cryptoBtn}
          >
            <ChevronRightIcon />
          </Button>
        </Box>
      </Paper>
    </div>
  );
};

export default SingleTopic;
