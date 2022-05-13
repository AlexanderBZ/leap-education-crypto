import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React, { useState } from "react";
import cryptoStyles from "../../../styles/CryptoCurrencies.module.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TopicContainer from "../Topics/TopicContainer";

const SingleTopicPreview = ({ topic }) => {
  const [showTopic, setShowTopic] = useState(false);

  const toggleOpen = () => setShowTopic(!showTopic);

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
        <Image
          className={cryptoStyles.icon}
          src={`/svgs/${topic.title.replaceAll(" ", "-").toLowerCase()}.svg`}
          alt={`${topic.title} preview`}
          width={75}
          height={75}
        />
        <Box>
          <Typography
            className={cryptoStyles.cryptoName}
            sx={{ my: 3, fontSize: { xs: 23, md: 32 } }}
            variant="h4"
          >
            {topic.title}
          </Typography>
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
