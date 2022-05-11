import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import bitcoin from "../../../images/Icon.svg";
import SingleTopic from "./SingleTopic";

const topics = [
  {
    id: "1",
    name: "Bitcoin",
    symbol: "BTC",
    description:
      "Digital currency in which a record of transactions is maintained.",
    icon: bitcoin,
    hrefs: [
      { href: "https://www.espn.com", title: "ESPN is cool" },
      { href: "https://www.espn.com", title: "ESPN is cool" },
      { href: "https://www.espn.com", title: "ESPN is cool" },
    ],
  },
  {
    id: "2",
    name: "Bitcoin",
    symbol: "BTC",
    description:
      "Digital currency in which a record of transactions is maintained.",
    icon: bitcoin,
  },
  {
    id: "3",
    name: "Bitcoin",
    symbol: "BTC",
    description:
      "Digital currency in which a record of transactions is maintained.",
    icon: bitcoin,
  },
  {
    id: "4",
    name: "Bitcoin",
    symbol: "BTC",
    description:
      "Digital currency in which a record of transactions is maintained.",
    icon: bitcoin,
  },
  {
    id: "5",
    name: "Bitcoin",
    symbol: "BTC",
    description:
      "Digital currency in which a record of transactions is maintained.",
    icon: bitcoin,
  },
  {
    id: "6",
    name: "Bitcoin",
    symbol: "BTC",
    description:
      "Digital currency in which a record of transactions is maintained.",
    icon: bitcoin,
  },
  {
    id: "7",
    name: "Bitcoin",
    symbol: "BTC",
    description:
      "Digital currency in which a record of transactions is maintained.",
    icon: bitcoin,
  },
  {
    id: "8",
    name: "Bitcoin",
    symbol: "BTC",
    description:
      "Digital currency in which a record of transactions is maintained.",
    icon: bitcoin,
  },
  {
    id: "9",
    name: "Bitcoin",
    symbol: "BTC",
    description:
      "Digital currency in which a record of transactions is maintained.",
    icon: bitcoin,
  },
];

const Topics = () => {
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
            <Grid key={topic.id} item xs={2} sm={4} md={4}>
              <SingleTopic topic={topic} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Topics;
