import { Avatar, Box, Button, Grid, Slider } from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

export default function Game() {
  const navi = useNavigate();
  function gotoHomePage(url) {
    navi(url);
  }

  const [level, setLevel] = useState(1);
  function changeLevel(e) {
    setLevel(e.target.value);
  }

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
  let [gameLetters, setGameLetters] = useState([]);

  // missing letters for the user to put it back in order
  let [missingLetters, setMissingLetters] = useState([]);

  function startGame() {
    console.log(level);
    missingLetters = [];
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
    let a = [];
    // based on the missingLetterArray generate missingLetters array of letter objs
    missingLetterArray.forEach((letterIndex) => {
      // console.log(letterIndex);
      if (letterIndex === 0) {
        missingLetters.push({index: letterIndex, letter: "a"});
        setMissingLetters([...missingLetters]);
      }
      else if(letterIndex===1)
      {
        missingLetters.push({index: letterIndex, letter: "b"});
        setMissingLetters([...missingLetters]);
      }
      else if(letterIndex===2)
      {
        missingLetters.push({index: letterIndex, letter: "c"});
        setMissingLetters([...missingLetters]);
      }
      else if(letterIndex===3)
      {
        missingLetters.push({index: letterIndex, letter: "d"});
        setMissingLetters([...missingLetters]);
      }
      else if(letterIndex===4)
      {
        missingLetters.push({index: letterIndex, letter: "e"});
        setMissingLetters([...missingLetters]);
      }
      else if(letterIndex===5)
      {
        missingLetters.push({index: letterIndex, letter: "f"});
        setMissingLetters([...missingLetters]);
      }
      else if(letterIndex===6)
      {
        missingLetters.push({index: letterIndex, letter: "g"});
        setMissingLetters([...missingLetters]);
      }
      else if(letterIndex===7)
      {
        missingLetters.push({index: letterIndex, letter: "h"});
        setMissingLetters([...missingLetters]);
      }
      else if(letterIndex===8)
      {
        missingLetters.push({index: letterIndex, letter: "i"});
        setMissingLetters([...missingLetters]);
      }
      else if(letterIndex===9)
      {
        missingLetters.push({index: letterIndex, letter: "j"});
        setMissingLetters([...missingLetters]);
      }
      else if(letterIndex===10)
      {
        missingLetters.push({index: letterIndex, letter: "k"});
        setMissingLetters([...missingLetters]);
      }
      else if(letterIndex===11)
      {
        missingLetters.push({index: letterIndex, letter: "l"});
        setMissingLetters([...missingLetters]);
      }
      else if(letterIndex===12)
      {
        missingLetters.push({index: letterIndex, letter: "m"});
        setMissingLetters([...missingLetters]);
      }
      else if(letterIndex===13)
      {
        missingLetters.push({index: letterIndex, letter: "n"});
        setMissingLetters([...missingLetters]);
      }
      else if(letterIndex===14)
      {
        missingLetters.push({index: letterIndex, letter: "o"});
        setMissingLetters([...missingLetters]);
      }
      else if(letterIndex===15)
      {
        missingLetters.push({index: letterIndex, letter: "p"});
        setMissingLetters([...missingLetters]);
      }
      else if(letterIndex===16)
      {
        missingLetters.push({index: letterIndex, letter: "q"});
        setMissingLetters([...missingLetters]);
      }
      else if(letterIndex===17)
      {
        missingLetters.push({index: letterIndex, letter: "r"});
        setMissingLetters([...missingLetters]);
      }
      else if(letterIndex===18)
      {
        missingLetters.push({index: letterIndex, letter: "s"});
        setMissingLetters([...missingLetters]);
      }
      else if(letterIndex===19)
      {
        missingLetters.push({index: letterIndex, letter: "t"});
        setMissingLetters([...missingLetters]);
      }
      else if(letterIndex===20)
      {
        missingLetters.push({index: letterIndex, letter: "u"});
        setMissingLetters([...missingLetters]);
      }
      else if(letterIndex===21)
      {
        missingLetters.push({index: letterIndex, letter: "v"});
        setMissingLetters([...missingLetters]);
      }
      else if(letterIndex===22)
      {
        missingLetters.push({index: letterIndex, letter: "w"});
        setMissingLetters([...missingLetters]);
      }
      else if(letterIndex===23)
      {
        missingLetters.push({index: letterIndex, letter: "x"});
        setMissingLetters([...missingLetters]);
      }
      else if(letterIndex===24)
      {
        missingLetters.push({index: letterIndex, letter: "y"});
        setMissingLetters([...missingLetters]);
      }
      else if(letterIndex===25)
      {
        missingLetters.push({index: letterIndex, letter: "z"});
        setMissingLetters([...missingLetters]);
      }
    });
    console.log(missingLetters);
  }


  return (
    <>
      <Header />
      <Avatar
        className="profile"
        src="./profiles/Mei_large.jpg"
        alt="Mei"
        sx={{
          width: "40px",
          height: "40px",
          position: "absolute",
          top: "1px",
          right: "5px",
          border: "2px solid white",
        }}
      />

      {/* select difficulty level */}
      <Grid container sx={{ width: "95%", left: 0, right: 0, margin: "auto" }}>
        <Grid item xs={12} sx={{ marginTop: "10px" }}>
          <Button
            variant="outlined"
            startIcon={<KeyboardBackspaceRoundedIcon />}
            onClick={() => gotoHomePage("/")}
          >
            Back
          </Button>
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

      {/* Game with letter tiles here */}
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
    </>
  );
}
