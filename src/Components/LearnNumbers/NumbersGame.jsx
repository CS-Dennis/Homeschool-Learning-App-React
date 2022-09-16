import { Button, Grid, IconButton } from "@mui/material";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import React, { useState } from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import MatchNumberComp from "./MatchNumberComp";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip} from "swiper";
import "swiper/css";
import "swiper/css/effect-flip";
import NumberFlashCard from "./NumberFlashCard";

export default function NumbersGame() {
  const [showButtonGroup, setShowButtonGroup] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [showFlashCard, setShowFlashCard] = useState(false);
  const [showMatchGame, setShowMatchGame] = useState(false);
  const [numbers, setNumbers] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);

  const numbersGameHome = ()=>
  {
    setShowButtonGroup(true);
    setShowVideo(false);
    setShowFlashCard(false);
    setShowMatchGame(false);
  }

  const startVideo = () => {
    setShowButtonGroup(false);
    setShowVideo(true);
    setShowFlashCard(false);
    setShowMatchGame(false);
  };

  const startFlashCard = () => {
    setShowButtonGroup(false);
    setShowVideo(false);
    setShowFlashCard(true);
    setShowMatchGame(false);
  };

  const startMatchGame = () => {
    setShowButtonGroup(false);
    setShowVideo(false);
    setShowFlashCard(false);
    setShowMatchGame(true);
  };

  const shuffleCards = () => {
    let randomNumber = Math.floor(Math.random() * 20) + 1;
    const newRandomNumbers = [randomNumber];
    while (newRandomNumbers.length < 20) {
      randomNumber = Math.floor(Math.random() * 20) + 1;
      if (newRandomNumbers.indexOf(randomNumber) === -1) {
        newRandomNumbers.push(randomNumber);
      }
    }
    setNumbers(newRandomNumbers);
  };

  const sortCards = () => {
    setNumbers([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ]);
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
        {showButtonGroup && (
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

            <Grid item xs={12} sm={4} sx={{ textAlign: "center", marginTop: "100px" }}>
              <IconButton variant="outlined" sx={{transform: 'scale(3)'}} onClick={() => startVideo()}>
                <img alt="flashcard" src="./imgs/video.png" height={50} />
              </IconButton>
              <Box sx={{marginTop: "50px", fontSize: "1.4em"}}>Play Video</Box>
            </Grid>

            <Grid item xs={12} sm={4} sx={{ textAlign: "center", marginTop: "100px" }}>
              <IconButton variant="outlined" sx={{transform: 'scale(3)'}} onClick={() => startFlashCard()}>
                <img alt="flashcard" src="./imgs/flashcard.png" height={50} />
              </IconButton>
              <Box sx={{marginTop: "50px", fontSize: "1.4em"}}>Flashcards</Box>
            </Grid>

            <Grid item xs={12} sm={4} sx={{ textAlign: "center", marginTop: "100px" }}>
              <IconButton variant="outlined" sx={{transform: 'scale(3)'}} onClick={() => startMatchGame()}>
                <img alt="flashcard" src="./imgs/puzzle.png" height={50} />
              </IconButton>
              <Box sx={{marginTop: "50px", fontSize: "1.4em"}}>Match Numbers</Box>
            </Grid>
          </>
        )}
        {showVideo && (
          <>
            <Grid item xs={12} sx={{ marginTop: "10px" }}>
                <Button
                  variant="outlined"
                  startIcon={<KeyboardBackspaceRoundedIcon />}
                  onClick={()=>numbersGameHome()}
                >
                  Back
                </Button>
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
          </>
        )}

        {showFlashCard && (
          <>
            <Grid item xs={12} sx={{ marginTop: "10px" }}>
              <Button
                variant="outlined"
                startIcon={<KeyboardBackspaceRoundedIcon />}
                onClick={() => numbersGameHome()}
              >
                Back
              </Button>
            </Grid>

            <Grid item md={2}></Grid>
            <Grid item xs={12} md={8} sx={{ textAlign: "center" }}>
              <Box sx={{ fontSize: "5em" }}>Flash Card</Box>
              <Box sx={{ marginBottom: "10px", display: "flex" }}>
                <Button
                  variant="outlined"
                  onClick={() => shuffleCards()}
                  sx={{ flex: "48%" }}
                >
                  Shuffle Cards
                </Button>
                <Box sx={{ flex: "4%" }} />
                <Button
                  variant="outlined"
                  onClick={() => sortCards()}
                  sx={{ flex: "48%" }}
                >
                  Sort Cards
                </Button>
              </Box>
              {/* swipe cards */}
              <Swiper
                slidesPerView={1}
                grabCursor={true}
                loop={true}
                effect="flip"
                modules={[EffectFlip]}
              >
                {numbers.map((num) => (
                  <SwiperSlide style={{ backgroundColor: "white" }}>
                    <NumberFlashCard number={num} />
                  </SwiperSlide>
                ))}
              </Swiper>
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
                onClick={() => numbersGameHome()}
              >
                Back
              </Button>
            </Grid>
            <Grid item md={2}></Grid>
            <Grid item xs={12} md={8}>
              <MatchNumberComp />
            </Grid>
            <Grid item md={2}></Grid>
          </>
        )}
      </Grid>
    </>
  );
}
