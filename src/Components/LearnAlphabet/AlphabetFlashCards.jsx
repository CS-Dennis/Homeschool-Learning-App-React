import { Button, Grid, ToggleButton, ToggleButtonGroup } from "@mui/material";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import AlphabetFlashCard from "./AlphabetFlashCard";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-flip";
import { EffectFlip } from "swiper";
import { Box } from "@mui/system";
import { randomNumList } from "../util";

export default function AlphabetFlashCards() {
  const [deckValue, setDeckValue] = useState(0);
  const deckUpperCase = [
    {
      index: 1,
      letter: "A",
    },
    {
      index: 2,
      letter: "B",
    },
    {
      index: 3,
      letter: "C",
    },
    {
      index: 4,
      letter: "D",
    },
    {
      index: 5,
      letter: "E",
    },
    {
      index: 6,
      letter: "F",
    },
    {
      index: 7,
      letter: "G",
    },
    {
      index: 8,
      letter: "H",
    },
    {
      index: 9,
      letter: "I",
    },
    {
      index: 10,
      letter: "J",
    },
    {
      index: 11,
      letter: "K",
    },
    {
      index: 12,
      letter: "L",
    },
    {
      index: 13,
      letter: "M",
    },
    {
      index: 14,
      letter: "N",
    },
    {
      index: 15,
      letter: "O",
    },
    {
      index: 16,
      letter: "P",
    },
    {
      index: 17,
      letter: "Q",
    },
    {
      index: 18,
      letter: "R",
    },
    {
      index: 19,
      letter: "S",
    },
    {
      index: 20,
      letter: "T",
    },
    {
      index: 21,
      letter: "U",
    },
    {
      index: 22,
      letter: "V",
    },
    {
      index: 23,
      letter: "W",
    },
    {
      index: 24,
      letter: "X",
    },
    {
      index: 25,
      letter: "Y",
    },
    {
      index: 26,
      letter: "Z",
    },
  ];

  const deckLowerCase = [
    {
      index: 27,
      letter: "a",
    },
    {
      index: 28,
      letter: "b",
    },
    {
      index: 29,
      letter: "c",
    },
    {
      index: 30,
      letter: "d",
    },
    {
      index: 31,
      letter: "e",
    },
    {
      index: 32,
      letter: "f",
    },
    {
      index: 33,
      letter: "g",
    },
    {
      index: 34,
      letter: "h",
    },
    {
      index: 35,
      letter: "i",
    },
    {
      index: 36,
      letter: "j",
    },
    {
      index: 37,
      letter: "k",
    },
    {
      index: 38,
      letter: "l",
    },
    {
      index: 39,
      letter: "m",
    },
    {
      index: 40,
      letter: "n",
    },
    {
      index: 41,
      letter: "o",
    },
    {
      index: 42,
      letter: "p",
    },
    {
      index: 43,
      letter: "q",
    },
    {
      index: 44,
      letter: "r",
    },
    {
      index: 45,
      letter: "s",
    },
    {
      index: 46,
      letter: "t",
    },
    {
      index: 47,
      letter: "u",
    },
    {
      index: 48,
      letter: "v",
    },
    {
      index: 49,
      letter: "w",
    },
    {
      index: 50,
      letter: "x",
    },
    {
      index: 51,
      letter: "y",
    },
    {
      index: 52,
      letter: "z",
    },
  ];

  const [deck, setDeck] = useState(deckUpperCase);

  const [showAllCards, setShowAllCards] = useState(false);

  const changeDeckValue = (value) => {
    if (value !== null) {
      setDeckValue(value);
    }
  };

  const shuffleDeck = () => {
    // uppercase: index 1 - 26
    if (deckValue === 0) {
      const indexList = randomNumList(26);
      const newDeck = [];

      indexList.forEach((index) => {
        newDeck.push(deckUpperCase[index - 1]);
      });

      setDeck([...newDeck]);
    }
    // lowercase: index 27 - 52
    else if (deckValue === 1) {
      const indexList = randomNumList(26);
      const newDeck = [];

      indexList.forEach((index) => {
        newDeck.push(deckLowerCase[index - 1]);
      });

      setDeck([...newDeck]);
    }
    // mixed case: index 1 - 52
    else if (deckValue === 2) {
      const indexList = randomNumList(52);
      const comboLetters = [...deckUpperCase, ...deckLowerCase];
      const newDeck = [];

      indexList.forEach((index) => {
        newDeck.push(comboLetters[index - 1]);
      });

      setDeck([...newDeck]);
    }
  };

  const sortDeck = () => {
    // uppercase: index 1 - 26
    if (deckValue === 0) {
      setDeck([...deckUpperCase]);
    }
    // lowercase: index 27 - 52
    else if (deckValue === 1) {
      setDeck([...deckLowerCase]);
    }
    // mixed case: index 1 - 52
    else if (deckValue === 2) {
      const sortedMixedDeck = [];
      for (let index = 0; index < 26; index++) {
        sortedMixedDeck.push(deckUpperCase[index]);
        sortedMixedDeck.push(deckLowerCase[index]);
      }

      setDeck([...sortedMixedDeck]);
    }
  };

  useEffect(() => {
    // uppercase deck
    if (deckValue === 0) {
      setDeck([...deckUpperCase]);
    }
    // lowercase
    else if (deckValue === 1) {
      setDeck([...deckLowerCase]);
    }
    // mixed case
    else if (deckValue === 2) {
      sortDeck();
    }
  }, [deckValue]);

  return (
    <>
      <Header title="Alphabet Flashcards" />
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
        <Grid item xs={12} sx={{ marginTop: "10px", display: "flex" }}>
          <Box sx={{ flex: 1 }}>
            <Link to="/learn-alphabet/" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                startIcon={<KeyboardBackspaceRoundedIcon />}
              >
                Back
              </Button>
            </Link>
          </Box>

          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            {!showAllCards && (
              <Button variant="contained" onClick={() => setShowAllCards(true)}>
                Show All Cards
              </Button>
            )}
            {showAllCards && (
              <Button
                variant="contained"
                onClick={() => setShowAllCards(false)}
              >
                Show Flashcards
              </Button>
            )}
          </Box>
        </Grid>

        {/* show flashcards */}
        {!showAllCards && (
          <>
            <Grid item xs={12} sx={{ textAlign: "center", marginTop: "10px" }}>
              <ToggleButtonGroup
                color="primary"
                value={deckValue}
                exclusive
                onChange={(e, value) => changeDeckValue(value)}
              >
                <ToggleButton value={0}>Uppercase Deck</ToggleButton>
                <ToggleButton value={1}>Lowercase Deck</ToggleButton>
                <ToggleButton value={2}>Mixed Deck</ToggleButton>
              </ToggleButtonGroup>
            </Grid>

            <Grid item xs={12} sx={{ textAlign: "center", marginTop: "10px" }}>
              <Box sx={{ display: "flex" }}>
                <Box sx={{ flex: "15%" }}></Box>
                <Button
                  variant="contained"
                  sx={{ flex: "30%" }}
                  onClick={() => shuffleDeck()}
                >
                  Shuffle
                </Button>
                <Box sx={{ flex: "10%" }}></Box>
                <Button
                  variant="contained"
                  sx={{ flex: "30%" }}
                  onClick={() => sortDeck()}
                >
                  Sort
                </Button>
                <Box sx={{ flex: "15%" }}></Box>
              </Box>
            </Grid>

            <Grid item sm={2}></Grid>
            <Grid item xs={12} sm={8} sx={{ marginTop: "20px" }}>
              <div style={{ width: "90%", margin: "auto", left: 0, right: 0 }}>
                <Swiper
                  effect="flip"
                  loop={true}
                  grabCursor={true}
                  modules={[EffectFlip]}
                >
                  {deck.map((letter) => (
                    <SwiperSlide>
                      <AlphabetFlashCard
                        letter={letter.letter}
                        fontSize="20em"
                        imageWidth="200px"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </Grid>
            <Grid item sm={2}></Grid>
          </>
        )}

        {showAllCards && (
          <>
            {deck.map((letter) => (
              <Grid item xs={6} sm={4} md={2} sx={{ marginTop: "20px" }}>
                <div
                  style={{ width: "90%", margin: "auto", left: 0, right: 0 }}
                >
                  <AlphabetFlashCard
                    letter={letter.letter}
                    fontSize="2em"
                    imageWidth="50px"
                  />
                </div>
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </>
  );
}
