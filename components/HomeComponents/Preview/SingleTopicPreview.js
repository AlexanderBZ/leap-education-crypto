import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React, { useState } from "react";
import cryptoStyles from "../../../styles/CryptoCurrencies.module.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TopicContainer from "../Topics/TopicContainer";

const SingleTopicPreview = ({ topic }) => {
  const { name, symbol, description, icon } = topic;
  const [showTopic, setShowTopic] = useState(false);

  const toggleOpen = () => setShowTopic(!showTopic);

  /*"../../../markdown/Leap 29d0c51d2745429fa954d877a4f94b99"
  <Image
    className={cryptoStyles.icon}
    src={`../../../images/${name.replaceAll(" ", "-").toLowerCase()}.svg`}
    alt=""
  />*/

  return (
    <div>
      {showTopic && <TopicContainer toggleOpen={toggleOpen} topic={topic} />}
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

export default SingleTopicPreview;
