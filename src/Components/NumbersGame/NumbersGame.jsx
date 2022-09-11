import { Button, Grid, IconButton, Tab, Tabs } from "@mui/material";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import React, { useState } from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import FlashCard from "./FlashCard";
import { Box } from "@mui/system";
import MatchNumberComp from "./MatchNumberComp";

export default function NumbersGame() {
  const [showVideo, setShowVideo] = useState(true);
  const [showFlashCard, setShowFlashCard] = useState(false);
  const [showMatchGame, setShowMatchGame] = useState(false);

  const [number, setNumber] = useState(1);

  const startVideo = () => {
    setShowVideo(true);
    setShowFlashCard(false);
    setShowMatchGame(false);
  };

  const startFlashCard = () => {
    setShowVideo(false);
    setShowFlashCard(true);
    setShowMatchGame(false);
  };

  const startMatchGame = () => {
    setShowVideo(false);
    setShowFlashCard(false);
    setShowMatchGame(true);
  };

  return (
    <>
      <Header title="Learning Numbers" />

      <Grid
        container
        sx={{
          width: "95%",
          left: 0,
          right: 0,
          margin: "auto",
          paddingBottom: "20px",
        }}
      >
        {showVideo && (
          <>
            <Grid item xs={12} sx={{ marginTop: "10px" }}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  startIcon={<KeyboardBackspaceRoundedIcon />}
                >
                  Home
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center", paddingTop: "25px" }}>
              <h2>Watch Count and Move</h2>
              <iframe
                width="90%"
                height="500"
                src="https://www.youtube.com/embed/Aq4UAss33qA"
                title="Count And Move (HD) | Super Simple Songs"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Grid>

            <Grid item xs={12} sm={6} sx={{ textAlign: "center" }}>
              <IconButton variant="outlined" onClick={() => startFlashCard()}>
                <img alt="flashcard" src="./imgs/flashcard.png" height={50} />
              </IconButton>
              <Box>Flashcards</Box>
            </Grid>

            <Grid item xs={12} sm={6} sx={{ textAlign: "center" }}>
              <IconButton variant="outlined" onClick={() => startMatchGame()}>
                <img alt="flashcard" src="./imgs/puzzle.png" height={50} />
              </IconButton>
              <Box>Match Numbers</Box>
            </Grid>
          </>
        )}

        {showFlashCard && (
          <>
            <Grid item xs={12} sx={{ marginTop: "10px" }}>
              <Button
                variant="outlined"
                startIcon={<KeyboardBackspaceRoundedIcon />}
                onClick={() => startVideo()}
              >
                Back
              </Button>
            </Grid>
            <Grid item md={2}></Grid>
            <Grid item xs={12} md={8} sx={{ textAlign: "center" }}>
              <Tabs
                value={number - 1}
                onChange={(event, n) => setNumber(n + 1)}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="One" />
                <Tab label="Two" />
                <Tab label="Three" />
                <Tab label="Four" />
                <Tab label="Five" />
                <Tab label="Six" />
                <Tab label="Seven" />
                <Tab label="Eight" />
                <Tab label="Nine" />
                <Tab label="Ten" />
                <Tab label="Eleven" />
                <Tab label="Twleve" />
                <Tab label="Thirteen" />
                <Tab label="Fourteen" />
                <Tab label="Fifteen" />
                <Tab label="Sixteen" />
                <Tab label="Seventeen" />
                <Tab label="Eighteen" />
                <Tab label="Nineteen" />
                <Tab label="Twenty" />
              </Tabs>

              <FlashCard number={number} />
            </Grid>
            <Grid item md={2}></Grid>
          </>
        )}

        {showMatchGame && (
          <>
            <Grid item xs={12} sx={{ marginTop: "10px" }}>
              <Button
                variant="outlined"
                startIcon={<KeyboardBackspaceRoundedIcon />}
                onClick={() => startVideo()}
              >
                Back
              </Button>
            </Grid>
            <Grid item md={2}></Grid>
            <Grid item xs={12} md={8} sx={{ textAlign: "center" }}>
              <MatchNumberComp />
            </Grid>
            <Grid item md={2}></Grid>
          </>
        )}
      </Grid>
    </>
  );
}
