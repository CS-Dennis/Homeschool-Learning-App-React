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
          md={4}
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
          md={4}
          sx={{ textAlign: "center", marginTop: "100px" }}
        >
          <Link to="./alphabet-game/">
            <IconButton variant="outlined" sx={{ transform: "scale(3)" }}>
              <img alt="flashcard" src="./imgs/alphabetGame.png" height={50} />
            </IconButton>
          </Link>
          <Box sx={{ marginTop: "50px", fontSize: "1.4em" }}>Alphabet Game</Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{ textAlign: "center", marginTop: "100px" }}
        >
          <Link to="./circle-letter-game/">
            <IconButton variant="outlined" sx={{ transform: "scale(3)" }}>
              <Box sx={{ height: "50px", width: "50px", position: "relative" }}>
                <img
                  alt="flashcard"
                  src="./imgs/alphabets/d.png"
                  height={50}
                  width={50}
                  style={{ position: "absolute", left: 0, top: 0 }}
                />
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="80px"
                  height="100px"
                  viewBox="0 0 700.000000 543.000000"
                  preserveAspectRatio="xMidYMid meet"
                  style={{ position: "absolute", left: -15, top: -20 }}
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
11 8 19 -71 79 -320 242 -741 4F26 -1109 484 -118 18 -524 27 -664 14z"
                    ></path>
                    <path
                      d="M5219 5169 c30 -10 56 -17 58 -15 5 5 -86 36 -101 35 -6 0 13 -9 43
-20z"
                    ></path>
                  </g>
                </svg>
              </Box>
            </IconButton>
          </Link>
          <Box sx={{ marginTop: "50px", fontSize: "1.4em" }}>
            Circle Letter Game
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{ textAlign: "center", marginTop: "100px" }}
        >
          <Link to="./maze-game">
            <IconButton variant="outlined" sx={{ transform: "scale(3)" }}>
              <img alt="maze" src="./imgs/maze.png" height={50} />
            </IconButton>
          </Link>
          <Box sx={{ marginTop: "50px", fontSize: "1.4em" }}>Maze Game</Box>
        </Grid>
      </Grid>
    </>
  );
}
