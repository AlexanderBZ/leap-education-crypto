import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import content from "../../../content.json";
import SingleTopicPreview from "./SingleTopicPreview";

const TopicsPreview = () => {
  const topics = content[0].topics;

  return (
    <Container sx={{ py: 12 }}>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: { xs: 18, md: 40 },
          fontWeight: 700,
          width: { xs: "100%", md: "75%" },
          margin: "auto",
          mb: { xs: 4, md: 8 },
        }}
        variant="h3"
      >
        Check out my curated collection of up-to-date resources below.
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 8 }} columns={{ xs: 2, md: 12 }}>
          {topics.map((topic) => (
            <Grid item xs={2} sm={4} md={4} key={topic.id}>
              <SingleTopicPreview topic={topic} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default TopicsPreview;
