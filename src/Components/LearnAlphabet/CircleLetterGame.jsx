import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import { randomNumList } from "../util";

export default function CircleLetterGame() {
  const words = {
    a: "apple",
    b: "banana",
    c: "cat",
    d: "dog",
    e: "egg",
    f: "fish",
    g: "goat",
    h: "horse",
    i: "icecream",
    j: "juice",
    k: "kettle",
    l: "lion",
    m: "monkey",
    n: "net",
    o: "orange",
    p: "pig",
    q: "question",
    r: "rabbit",
    s: "sheep",
    t: "toilet",
    u: "umbrella",
    v: "violin",
    w: "watch",
    x: "xylophone",
    y: "yawn",
    z: "zucchini",
  };

  const [lettersWithImages] = useState({
    a: ["a", "b", "c", "g", "i", "o", "r", "u", "w", "y"],
    b: ["b", "r", "u"],
    c: ["c", "i", "j", "w", "z"],
    d: ["d"],
    e: ["a", "e", "h", "i", "k", "m", "n", "o", "q", "t", "u", "x"],
    f: ["f"],
    g: ["d", "e", "g", "o", "p"],
    h: ["f", "h", "s", "w", "x", "z"],
    i: ["f", "i", "j", "l", "p", "q", "r", "s", "t", "v", "z"],
    j: ["j"],
    k: ["k", "m"],
    l: ["a", "k", "l", "t", "u", "v", "x"],
    m: ["i", "m", "u"],
    n: ["b", "l", "m", "n", "o", "q", "v", "x", "y", "z"],
    o: ["d", "g", "h", "l", "m", "o", "q", "t", "v", "x"],
    p: ["a", "p", "s", "x"],
    q: ["q"],
    r: ["h", "i", "o", "r", "u", "y"],
    s: ["f", "h", "q", "s"],
    t: ["c", "g", "k", "n", "q", "r", "t", "w"],
    u: ["j", "q", "u", "z"],
    v: ["v"],
    w: ["w"],
    x: ["x"],
    y: ["m", "x", "y"],
    z: ["z"],
  });

  const [letters] = useState([
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]);
  const [imageList, setImageList] = useState([]);
  const [currentLetter, setCurrentLetter] = useState("a");
  const [toggle, setToggle] = useState("Hide");
  const [error, setError] = useState(false);


  const handleLetterChange = (letter) => {
    initGame(letter);
  };

  const initGame = (letter) => {
    setCurrentLetter(letter);

    // get random numbers based on the right answers of the selected letter
    const randomNums = randomNumList(lettersWithImages[letter].length);
    let rightImageList = [];
    // get three random answers or all answers (if less than 3 answers)
    if (lettersWithImages[letter].length >= 3) {
      for (let i = 0; i < 3; i++) {
        rightImageList.push(lettersWithImages[letter][randomNums[i] - 1]);
      }
    } else {
      rightImageList = [...lettersWithImages[letter]];
    }

    const randomTwentySixNums = randomNumList(26);

    // fill the rest non-answer letters until the list is 6
    for (let index = 0; index < 26; index += 1) {
      if (
        lettersWithImages[letter].indexOf(
          letters[randomTwentySixNums[index] - 1]
        ) === -1
      ) {
        rightImageList.push(letters[randomTwentySixNums[index] - 1]);
      }
      if (rightImageList.length === 6) {
        break;
      }
    }
    const randomSixNums = randomNumList(6);
    const tempList = [];
    for (let i = 0; i < 6; i += 1) {
      tempList.push({
        letter: rightImageList[randomSixNums[i] - 1],
        value: false,
      });
    }

    setImageList([...tempList]);
  };

  const toggleWords = () => {
    if (toggle === "Hide") {
      setToggle("Show");
    } else {
      setToggle("Hide");
    }
  };

  const checkAnswer = (image) => {
    if (lettersWithImages[currentLetter].indexOf(image.letter) !== -1) {
      image.value = true;
      setImageList([...imageList], image);
    }
    else
    {
      setError(true);

      setTimeout(() => {
        setError(false)
      }, 1000);
    }

    let answerCount = 0;
    imageList.forEach((img) => {
      if (img.value === true) {
        answerCount += 1;
      }
    });

    if (answerCount === 3 && lettersWithImages[currentLetter].length >= 3) {
      startNewGame();
    } else if (answerCount === lettersWithImages[currentLetter].length) {
      startNewGame();
    }
  };

  const startNewGame = () => {
    // show image

    setTimeout(() => {
      initGame(currentLetter);
    }, 1000);
  };

  useEffect(() => {
    initGame("a");
  }, []);

  return (
    <>
      <Header title="Circle Letter Game" />

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

        <Grid
          item
          xs={12}
          sx={{ marginTop: "10px", display: "flex", justifyContent: "center" }}
        >
          <Box
            sx={{
              marginTop: "auto",
              marginBottom: "auto",
              top: 0,
              bottom: 0,
              marginRight: "10px",
            }}
          >
            <span className="subTitle">Pick a letter</span>
          </Box>

          <Box>
            <FormControl sx={{ width: "200px" }}>
              <InputLabel id="demo-simple-select-label">Letter</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currentLetter}
                label="Letter"
                onChange={(e) => handleLetterChange(e.target.value)}
              >
                {letters.map((letter) => (
                  <MenuItem value={letter}>{letter}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box
            sx={{
              marginLeft: "10px",
              marginTop: "auto",
              marginBottom: "auto",
              top: 0,
              bottom: 0,
            }}
          >
            <Button variant="contained" onClick={toggleWords}>
              {toggle} Words
            </Button>
          </Box>
        </Grid>

        {imageList.map((image) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              textAlign: "center",
              marginTop: "20px",
              position: "relative",
              cursor: "pointer",
            }}
          >
            <Paper sx={{ width: "90%", margin: "auto", left: 0, right: 0 }}>
              {lettersWithImages[currentLetter].indexOf(image.letter) !== -1 &&
                image.value && (
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="300"
                    height="300"
                    viewBox="0 0 700.000000 543.000000"
                    preserveAspectRatio="xMidYMid meet"
                    style={{
                      position: "absolute",
                      margin: "auto",
                      left: 0,
                      right: 0,
                      top: "-30",
                    }}
                  >
                    <g
                      transform="translate(0.000000,543.000000) scale(0.100000,-0.100000)"
                      fill="#FE0051"
                      stroke="none"
                    >
                      <path
                        d="M3490 5424 c-19 -2 -132 -13 -250 -25 -118 -11 -282 -34 -365 -51
            -485 -99 -752 -188 -1130 -378 -447 -225 -821 -508 -1105 -836 -117 -136 -154
            -187 -279 -388 -148 -236 -264 -508 -311 -722 -79 -367 -62 -710 55 -1061 51
            -155 107 -274 167 -359 108 -155 309 -370 479 -513 46 -39 33 -24 -46 55 -172
            172 -339 378 -413 510 -78 138 -165 396 -199 593 -27 153 -24 489 6 655 56
            316 193 629 433 988 259 389 754 800 1274 1061 330 165 611 263 999 346 361
            78 540 96 955 96 223 0 382 -5 450 -13 314 -39 624 -98 825 -158 109 -32 140
            -39 105 -23 -14 6 -95 31 -180 55 -250 73 -526 123 -850 154 -112 11 -561 21
            -620 14z"
                      ></path>
                      <path
                        d="M3340 5320 c-350 -32 -745 -133 -1062 -271 -247 -106 -538 -285 -744
            -456 -191 -157 -424 -412 -551 -603 -161 -240 -272 -509 -310 -751 -24 -152
            -24 -456 1 -581 71 -365 296 -701 648 -966 155 -116 283 -185 581 -311 112
            -47 456 -160 592 -195 320 -80 772 -136 1100 -136 463 1 917 77 1410 237 581
            189 1158 557 1522 972 153 175 338 485 402 676 69 207 86 488 43 692 -49 228
            -173 474 -336 664 -100 118 -363 344 -529 454 -189 126 -293 185 -467 265
            -142 65 -340 143 -346 137 -2 -2 47 -23 109 -47 319 -124 667 -340 924 -573
            229 -207 306 -303 414 -514 106 -208 150 -389 150 -618 0 -221 -35 -375 -134
            -595 -70 -156 -206 -371 -321 -508 -186 -221 -487 -467 -791 -647 -505 -298
            -1197 -504 -1835 -546 -822 -54 -1781 157 -2300 507 -568 382 -823 901 -748
            1519 21 173 43 270 93 402 100 266 274 533 506 777 548 575 1304 914 2152 966
            305 19 714 -24 902 -95 212 -80 588 -319 616 -393 16 -42 114 -67 153 -39 15
            11 8 19 -71 79 -320 242 -741 426 -1109 484 -118 18 -524 27 -664 14z"
                      ></path>
                      <path
                        d="M5219 5169 c30 -10 56 -17 58 -15 5 5 -86 36 -101 35 -6 0 13 -9 43
            -20z"
                      ></path>
                    </g>
                  </svg>
                )}
              <img
                src={"./imgs/alphabets/" + image.letter + ".png"}
                alt="letter"
                height={200}
                onClick={() => checkAnswer(image)}
              />

              {toggle === "Show" && (
                <Box sx={{ fontWeight: "bold", fontSize: "1.4em" }}>
                  {words[image.letter]}
                </Box>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>

      {error && (
        <Box>
          <img
            src="./imgs/wrong.png"
            alt="worngAnswer"
            style={{
              position: "fixed",
              margin: "auto",
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
              maxWidth: '70%',
              maxHeight:'70%'
            }}
          />
        </Box>
      )}
    </>
  );
}
