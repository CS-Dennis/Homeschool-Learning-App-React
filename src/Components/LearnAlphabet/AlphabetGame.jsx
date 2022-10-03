import { Box, Button, Divider, Grid, Slider, Snackbar } from "@mui/material";
import React, { useState } from "react";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import Header from "../Header";
import { Link } from "react-router-dom";

export default function AlphabetGame() {
  const [level, setLevel] = useState(1);
  function changeLevel(e) {
    setLevel(e.target.value);
  }

  const [bingo, setBingo] = useState(false);
  const [congrats, setCongrats] = useState(false);
  const [error, setError] = useState(false);

  const allLetters = [
    { index: 0, letter: "a" },
    { index: 1, letter: "b" },
    { index: 2, letter: "c" },
    { index: 3, letter: "d" },
    { index: 4, letter: "e" },
    { index: 5, letter: "f" },
    { index: 6, letter: "g" },
    { index: 7, letter: "h" },
    { index: 8, letter: "i" },
    { index: 9, letter: "j" },
    { index: 10, letter: "k" },
    { index: 11, letter: "l" },
    { index: 12, letter: "m" },
    { index: 13, letter: "n" },
    { index: 14, letter: "o" },
    { index: 15, letter: "p" },
    { index: 16, letter: "q" },
    { index: 17, letter: "r" },
    { index: 18, letter: "s" },
    { index: 19, letter: "t" },
    { index: 20, letter: "u" },
    { index: 21, letter: "v" },
    { index: 22, letter: "w" },
    { index: 23, letter: "x" },
    { index: 24, letter: "y" },
    { index: 25, letter: "z" },
  ];

  // letters to display on the game
  let [gameLetters, setGameLetters] = useState(allLetters);

  // missing letters for the user to put it back in order
  let [missingLetters, setMissingLetters] = useState([]);

  // toggle the 26 alphabets before and when game starts
  const [gameStarted, setGameStarted] = useState(false);

  //
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });

  function startGame() {
    missingLetters = [];
    gameLetters = allLetters;
    // based on current level create a new number list with the size of level
    let missingLetterArray = [];

    while (missingLetterArray.length < level) {
      // generate a random number from 0 to 25 (representing 1 to 26 missing letters)
      let randomNumber = Math.floor(Math.random() * 26);
      if (missingLetterArray.indexOf(randomNumber) === -1) {
        missingLetterArray.push(randomNumber);
      }
    }
    // console.log(missingLetterArray);

    // based on the missingLetterArray generate missingLetters array of letter objs
    missingLetterArray.forEach((letterIndex) => {
      // console.log(letterIndex);
      if (letterIndex === 0) {
        missingLetters.push({
          index: letterIndex,
          letter: "a",
          selected: false,
        });
      } else if (letterIndex === 1) {
        missingLetters.push({
          index: letterIndex,
          letter: "b",
          selected: false,
        });
      } else if (letterIndex === 2) {
        missingLetters.push({
          index: letterIndex,
          letter: "c",
          selected: false,
        });
      } else if (letterIndex === 3) {
        missingLetters.push({
          index: letterIndex,
          letter: "d",
          selected: false,
        });
      } else if (letterIndex === 4) {
        missingLetters.push({
          index: letterIndex,
          letter: "e",
          selected: false,
        });
      } else if (letterIndex === 5) {
        missingLetters.push({
          index: letterIndex,
          letter: "f",
          selected: false,
        });
      } else if (letterIndex === 6) {
        missingLetters.push({
          index: letterIndex,
          letter: "g",
          selected: false,
        });
      } else if (letterIndex === 7) {
        missingLetters.push({
          index: letterIndex,
          letter: "h",
          selected: false,
        });
      } else if (letterIndex === 8) {
        missingLetters.push({
          index: letterIndex,
          letter: "i",
          selected: false,
        });
      } else if (letterIndex === 9) {
        missingLetters.push({
          index: letterIndex,
          letter: "j",
          selected: false,
        });
      } else if (letterIndex === 10) {
        missingLetters.push({
          index: letterIndex,
          letter: "k",
          selected: false,
        });
      } else if (letterIndex === 11) {
        missingLetters.push({
          index: letterIndex,
          letter: "l",
          selected: false,
        });
      } else if (letterIndex === 12) {
        missingLetters.push({
          index: letterIndex,
          letter: "m",
          selected: false,
        });
      } else if (letterIndex === 13) {
        missingLetters.push({
          index: letterIndex,
          letter: "n",
          selected: false,
        });
      } else if (letterIndex === 14) {
        missingLetters.push({
          index: letterIndex,
          letter: "o",
          selected: false,
        });
      } else if (letterIndex === 15) {
        missingLetters.push({
          index: letterIndex,
          letter: "p",
          selected: false,
        });
      } else if (letterIndex === 16) {
        missingLetters.push({
          index: letterIndex,
          letter: "q",
          selected: false,
        });
      } else if (letterIndex === 17) {
        missingLetters.push({
          index: letterIndex,
          letter: "r",
          selected: false,
        });
      } else if (letterIndex === 18) {
        missingLetters.push({
          index: letterIndex,
          letter: "s",
          selected: false,
        });
      } else if (letterIndex === 19) {
        missingLetters.push({
          index: letterIndex,
          letter: "t",
          selected: false,
        });
      } else if (letterIndex === 20) {
        missingLetters.push({
          index: letterIndex,
          letter: "u",
          selected: false,
        });
      } else if (letterIndex === 21) {
        missingLetters.push({
          index: letterIndex,
          letter: "v",
          selected: false,
        });
      } else if (letterIndex === 22) {
        missingLetters.push({
          index: letterIndex,
          letter: "w",
          selected: false,
        });
      } else if (letterIndex === 23) {
        missingLetters.push({
          index: letterIndex,
          letter: "x",
          selected: false,
        });
      } else if (letterIndex === 24) {
        missingLetters.push({
          index: letterIndex,
          letter: "y",
          selected: false,
        });
      } else if (letterIndex === 25) {
        missingLetters.push({
          index: letterIndex,
          letter: "z",
          selected: false,
        });
      }
    });

    // set new random missing letters in missingLetters array.
    setMissingLetters([...missingLetters]);

    // set all starting letters in the gameLetters array
    missingLetters.forEach((missingLetter) => {
      gameLetters.forEach((gameLetter) => {
        if (gameLetter.index === missingLetter.index) {
          gameLetter.letter = "";
        }
      });
    });

    setGameLetters([...gameLetters]);
    // start game and set gameStarted to true
    setGameStarted(true);

    // console.log(missingLetters);
    // console.log(gameLetters);
  }

  // once click on a missing letter, set that missingLetter object selected: true, and set others false.
  function selectMissingLetter(index) {
    missingLetters.forEach((missingLetter) => {
      if (missingLetter.index === index) {
        missingLetter.selected = true;
      } else {
        missingLetter.selected = false;
      }
    });

    setMissingLetters([...missingLetters]);
    // console.log(missingLetters);
  }

  // close snackbar function
  function closeSnackbar() {
    setSnackbar({ open: false, message: "" });
  }

  // click on the game letter, if none missing letter or non-missing game letter is selected, show warning; if the clicked missing game letter matches the missing letter selected,
  // show the missing game letter and remove the missing letter from the missingLetters array.
  function clickGameLetter(index) {
    // console.log(index);

    // get the selected missing letter
    let selectedMissingLetter = {};

    missingLetters.forEach((missingLetter) => {
      if (missingLetter.selected) {
        selectedMissingLetter = missingLetter;
      }
    });

    // if none missing letter selected, show an alert
    if (selectedMissingLetter.index === undefined) {
      setSnackbar({
        open: true,
        message: "Please select a missing letter first.",
      });
      return;
    }

    // compare indexes of the clicked game letter and the selected missing letter
    if (index === selectedMissingLetter.index) {
      // console.log(selectedMissingLetter.letter);

      // add that letter to gameLetters Array based on index
      gameLetters[index].letter = selectedMissingLetter.letter;
      setGameLetters([...gameLetters]);

      // remove that missing letter obj from the missingLetter array.
      let indexMissingLetter = 0;
      for (let i = 0; i < missingLetters.length; i++) {
        if (missingLetters[i].index === index) {
          indexMissingLetter = i;
          break;
        }
      }
      // console.log("index of missing letter");
      // console.log(indexMissingLetter);
      missingLetters = missingLetters
        .slice(0, indexMissingLetter)
        .concat(
          missingLetters.slice(indexMissingLetter + 1, missingLetters.length)
        );
      setMissingLetters([...missingLetters]);
      // setMissingLetters([...missingLetters]);
      // console.log("Right");
      // if missingLetters length is 0, game is won
      if (missingLetters.length === 0) {
        setCongrats(true);

        setTimeout(() => {
          setCongrats(false);
        }, 2000);
        return;
      } else {
        setBingo(true);

        setTimeout(() => {
          setBingo(false);
        }, 1500);
      }
    } else {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 1000);
      return;
    }
  }

  return (
    <>
      <Header title="ABC Learning Game" />

      {/* select difficulty level */}
      <Grid container sx={{ width: "95%", left: 0, right: 0, margin: "auto" }}>
        <Grid item xs={12} sx={{ marginTop: "10px" }}>
          <Link to="/learn-alphabet/" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              startIcon={<KeyboardBackspaceRoundedIcon />}
            >
              Back
            </Button>
          </Link>
        </Grid>

        <Grid item xs={12}>
          <h2 style={{ textAlign: "center" }}>Select Difficulty Level</h2>
          <h3 style={{ color: "grey", textAlign: "center" }}>
            How many letters to be missing?
          </h3>
          <Slider
            value={level}
            onChange={(e) => changeLevel(e)}
            min={1}
            max={26}
            valueLabelDisplay="on"
          />
          <div style={{ display: "flex" }}>
            <span style={{ flex: 1 }}>1</span>
            <span style={{ flex: 1, textAlign: "center" }}>13</span>
            <span style={{ flex: 1, textAlign: "right" }}>26</span>
          </div>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}
        >
          <Button variant="outlined" onClick={() => startGame()}>
            I'm Ready!
          </Button>
        </Grid>
      </Grid>

      {/* Game with letter tiles here before game starts */}
      {!gameStarted && (
        <Grid container sx={{ textAlign: "center" }}>
          {allLetters.map((letter) => (
            <Grid key={letter.letter} item lg={2} md={3} sm={4} xs={6}>
              <Box className="letterTile">
                <div className="letter">
                  {letter.letter.toLocaleUpperCase()} ({letter.letter})
                </div>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}

      {/* letter tiles when game starts */}
      {gameStarted && (
        <Grid container sx={{ textAlign: "center" }}>
          <Grid item xs={7}>
            <Grid container>
              {gameLetters.map((gameLetter) => (
                <Grid key={gameLetter.index} item lg={2} md={3} sm={4} xs={6}>
                  <Box
                    className="letterTile"
                    onClick={() => clickGameLetter(gameLetter.index)}
                  >
                    <div className="letter">
                      {gameLetter.letter.toLocaleUpperCase()}{" "}
                      {gameLetter.letter !== "" ? (
                        <span>({gameLetter.letter})</span>
                      ) : (
                        <img
                          className="cat"
                          src="./imgs/cat.png"
                          alt="cat"
                        ></img>
                      )}
                    </div>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Divider
            orientation="vertical"
            flexItem
            variant="middle"
            sx={{ borderLeftWidth: "5px", borderLeftColor: "#FE0051" }}
          />
          <Grid item xs={4}>
            <Grid container>
              {missingLetters.map((missingLetter) => (
                <Grid key={missingLetter.index} item md={4} sm={6} xs={12}>
                  <Box
                    className={
                      missingLetter.selected
                        ? "missingLetterTileSelected"
                        : "missingLetterTile"
                    }
                    onClick={() => selectMissingLetter(missingLetter.index)}
                  >
                    <div className="letter">
                      {missingLetter.letter.toLocaleUpperCase()}{" "}
                      <span>({missingLetter.letter})</span>
                    </div>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      )}

      {/* snackbar for warning */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={2000}
        onClose={closeSnackbar}
        message={snackbar.message}
      />

      {/* Bingo Logo */}
      {bingo && (
        <Box>
          <img
            src="./imgs/bingo.gif"
            alt="bingo"
            style={{
              maxHeight: "80%",
              maxWidth: "100%",
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              margin: "auto",
            }}
          />
        </Box>
      )}

      {/* congrats logo */}
      {congrats && (
        <Box>
          <img
            src="./imgs/congrats.gif"
            alt="congrats"
            style={{
              maxHeight: "80%",
              maxWidth: "100%",
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              margin: "auto",
            }}
          />
        </Box>
      )}

      {/* nice try logo */}
      {error && (
        <Box>
          <img
            src="./imgs/wrong.png"
            alt="incorrect"
            style={{
              maxHeight: "80%",
              maxWidth: "100%",
              position: "fixed",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              margin: "auto",
            }}
          />
        </Box>
      )}
    </>
  );
}
