import { Button, FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import { randomNumList } from "../util";
import { Box } from "@mui/system";

export default function MazeNumberGame() {
  const maze1 = {
    maze: [
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    ],
    steps: 21,
    points: [
      [0, 0],
      [9, 9],
    ],
    logos: ["tl", "bl"],
  };

  const maze2 = {
    maze: [
      [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    ],
    steps: 24,
    points: [
      [0, 3],
      [9, 9],
    ],
    logos: ["tl", "bl"],
  };

  const maze3 = {
    maze: [
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    steps: 19,
    points: [
      [0, 6],
      [9, 1],
    ],
    logos: ["tl", "bl"],
  };

  const maze4 = {
    maze: [
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      [1, 1, 1, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 1, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    steps: 17,
    points: [
      [2, 0],
      [0, 6],
    ],
    logos: ["l", "tl"],
  };

  const maze5 = {
    maze: [
      [0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 1, 1, 1, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 1, 0, 1, 1, 1, 1, 0, 0],
      [1, 1, 1, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    ],
    steps: 28,
    points: [
      [5, 0],
      [9, 7],
    ],
    logos: ["l", "bl"],
  };

  const maze6 = {
    maze: [
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 1, 1, 1, 0, 1, 0],
      [0, 0, 0, 0, 1, 0, 1, 0, 1, 0],
      [0, 0, 0, 0, 1, 0, 1, 1, 1, 0],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    ],
    steps: 23,
    points: [
      [9, 0],
      [0, 7],
    ],
    logos: ["l", "tl"],
  };

  const maze7 = {
    maze: [
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    steps: 15,
    points: [
      [9, 1],
      [0, 6],
    ],
    logos: ["bl", "tl"],
  };

  const maze8 = {
    maze: [
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 1, 1, 1, 0, 0, 1, 0, 0, 0],
      [0, 1, 0, 1, 0, 0, 1, 0, 0, 0],
      [0, 1, 0, 1, 1, 1, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    ],
    steps: 25,
    points: [
      [0, 3],
      [9, 4],
    ],
    logos: ["tl", "bl"],
  };

  const maze9 = {
    maze: [
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
      [0, 1, 1, 1, 0, 1, 0, 1, 0, 0],
      [0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
      [0, 1, 0, 0, 0, 1, 1, 1, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    ],
    steps: 28,
    points: [
      [0, 7],
      [9, 7],
    ],
    logos: ["tl", "bl"],
  };

  const mazes = [maze1, maze2, maze3, maze4, maze5, maze6, maze7, maze8, maze9];

  const numbers = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const [currentNumber, setCurrentNumber] = useState(1);

  const changeNumber = (num) => {
    setCurrentNumber(num);
    initGame();
  };

  const [currentMaze, setCurrentMaze] = useState(mazes[0]);

  const initMazeStatus = [
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
  ];

  const [mazeStatus, setMazeStatus] = useState(initMazeStatus);
  const [stepCount, setStepCount] = useState(0);
  const [congrats, setCongrats] = useState(false);
  const [wrong, setWrong] = useState(false);

  const checkTile = (num, row, col) => {
    // console.log(num);
    // console.log(row);
    // console.log(col);
    // right tile
    if (num === 1) {
      // console.log("bingo");
      const newMazeStatus = [...mazeStatus];
      if (!newMazeStatus[row][col]) {
        newMazeStatus[row][col] = true;
        setMazeStatus([...newMazeStatus]);
        if (stepCount + 1 < currentMaze.steps) {
          setStepCount(stepCount + 1);
          // console.log(newMazeStatus);
          // console.log(stepCount + 1);
        } else if (stepCount + 1 === currentMaze.steps) {
          // show congrats
          setCongrats(true);

          // init game
          setTimeout(() => {
            setCongrats(false);
            initGame();
          }, 1500);
        }
      }
    }
    // wrong tile
    else {
      setWrong(true);

      setTimeout(() => {
        setWrong(false);
      }, 1000);
    }
  };

  const [otherRandomNumbers, setOtherRandomNumbers] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  // generate 21 unique letters indexes randomly and remove the current number index
  const generateOtherNumbers = () => {
    let currentNumberIndex = numbers.indexOf(currentNumber);
    let otherNumbers = randomNumList(21);
    let temp = [];
    otherNumbers.forEach((ele) => {
      if (ele !== currentNumberIndex + 1) {
        temp.push(ele);
      }
    });
    otherNumbers = temp;
    return otherNumbers;
  };

  const initGame = () => {
    // reset hightlighted tiles
    setMazeStatus(initMazeStatus);

    // generated 10 by 25 random letter index array (not including the current letter)
    let tempList = [];
    for (let index = 0; index < 10; index += 1) {
      tempList.push(generateOtherNumbers());
    }
    setOtherRandomNumbers([...tempList]);

    const randomList = randomNumList(9);

    setCurrentMaze(mazes[randomList[0] - 1]);
    // setCurrentMaze(mazes[5]);
    setStepCount(0);
  };

  useEffect(() => {
    initGame();
  }, []);

  return (
    <>
      <Header title="Maze Game" />
      <Grid container sx={{ width: "95%", left: 0, right: 0, margin: "auto" }}>
        <Grid item xs={12} sx={{ marginTop: "10px" }}>
          <Link to="/learn-numbers/" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              startIcon={<KeyboardBackspaceRoundedIcon />}
            >
              Back
            </Button>
          </Link>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          marginTop: "10px",
          width: "95%",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          position: "relative",
        }}
      >
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Box sx={{ display: "inline-flex" }}>
            <Box
              style={{
                fontSize: "1.4em",
                marginRight: "10px",
                marginTop: "auto",
                marginBottom: "auto",
                top: 0,
                bottom: 0,
              }}
            >
              Pick a number
            </Box>
            <FormControl style={{ width: "100px", marginRight: "10px" }}>
              <InputLabel>Letter</InputLabel>
              <Select
                value={currentNumber}
                label="Letter"
                onChange={(e) => changeNumber(e.target.value)}
              >
                {numbers.map((number, index) => (
                  <MenuItem key={index} value={number}>
                    {number}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          width: "80%",
          margin: "auto",
          left: 0,
          right: 0,
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        <Grid item md={2} lg={3}></Grid>
        <Grid
          item
          xs={12}
          md={8}
          lg={6}
          sx={{ marginTop: "10px", marginBottom: "10px", cursor: "pointer" }}
        >
          {currentMaze.maze.map((array, row) => (
            <Grid container>
              {array.map((num, col) => (
                <Grid
                  item
                  xs
                  sx={{ display: "block", position: "relative" }}
                  onClick={() => checkTile(num, row, col)}
                >
                  {/* start point logo */}
                  {currentMaze.points[0][0] === row &&
                    currentMaze.points[0][1] === col && (
                      <img
                        src="./imgs/dog17.png"
                        alt="dog"
                        width="80px"
                        style={{
                          position: "absolute",
                          left:
                            currentMaze.logos[0] === "l" ? "-65px" : "-30px",
                          top: currentMaze.logos[0] === "tl" && "-75px",
                          bottom: currentMaze.logos[0] === "bl" && "-75px",
                          index: -10,
                        }}
                      />
                    )}
                  {/* end point logo */}
                  {currentMaze.points[1][0] === row &&
                    currentMaze.points[1][1] === col && (
                      <img
                        src="./imgs/bowl.png"
                        alt="bowl"
                        width="70px"
                        style={{
                          position: "absolute",
                          left: "-30px",
                          top: currentMaze.logos[1] === "tl" && "-60px",
                          bottom: currentMaze.logos[1] === "bl" && "-60px",
                          index: -10,
                        }}
                      />
                    )}
                  <Box
                    className={
                      "mazeTile " +
                      // start or end points
                      ((currentMaze.points[0][0] === row &&
                        currentMaze.points[0][1] === col) ||
                      (currentMaze.points[1][0] === row &&
                        currentMaze.points[1][1] === col)
                        ? "mazeTileStartEnd "
                        : "") +
                      (mazeStatus[row][col] ? "mazeTileHighlighted" : "")
                    }
                    sx={{
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        
                        fontSize: "4vmax",
                        // width: "100%",
                        height: "100%",
                        width: "100%",
                        position: 'absolute',
                        margin: 'auto',
                        top:'50%',
                        // bottom:0,
                        transform: 'translateY(-50%)',
                        left:0,
                        right:0,
                        // backgroundColor: "red",
                        textAlign: 'center'
                        
                      }}
                    >
                      {/* if num==1, show the current letter; otherwise, show random letters */}
                      {num === 1
                        ? currentNumber : numbers[otherRandomNumbers[row][col] - 1]}
                    </span>
                  </Box>
                </Grid>
              ))}
            </Grid>
          ))}
        </Grid>
        <Grid item md={2} lg={3}></Grid>
      </Grid>

      {/* Congras */}
      {congrats && (
        <Box>
          <img
            src="./imgs/congrats.gif"
            alt="abc"
            style={{
              position: "fixed",
              width: "50%",
              maxHeight: "90%",
              margin: "auto",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              zIndex: 100
            }}
          />
        </Box>
      )}

      {/* Worng */}
      {wrong && (
        <Box>
          <img
            src="./imgs/wrong.png"
            alt="abc"
            style={{
              position: "fixed",
              width: "50%",
              maxHeight: "90%",
              margin: "auto",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              zIndex: 100
            }}
          />
        </Box>
      )}
    </>
  );
}
