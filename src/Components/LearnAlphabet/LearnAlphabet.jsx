import { Button, Grid, IconButton } from "@mui/material";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import { Box } from "@mui/system";

export default function LearnAlphabet() {
  return (
    <>
      <Header title="Learning Alphabets" />

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

        <Grid
          item
          xs={12}
          sm={6}
          sx={{ textAlign: "center", marginTop: "100px" }}
        >
          <Link to="./alphabet-flashcards/">
            <IconButton variant="outlined" sx={{ transform: "scale(3)" }}>
              <img alt="flashcard" src="./imgs/flashcard.png" height={50} />
            </IconButton>
          </Link>
          <Box sx={{ marginTop: "50px", fontSize: "1.4em" }}>Flashcards</Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          sx={{ textAlign: "center", marginTop: "100px" }}
        >
          <Link to="./alphabet-game/">
            <IconButton variant="outlined" sx={{ transform: "scale(3)" }}>
              <img alt="flashcard" src="./imgs/alphabetGame.png" height={50} />
            </IconButton>
          </Link>
          <Box sx={{ marginTop: "50px", fontSize: "1.4em" }}>Alphabet Game</Box>
        </Grid>
      </Grid>
    </>
  );
}
