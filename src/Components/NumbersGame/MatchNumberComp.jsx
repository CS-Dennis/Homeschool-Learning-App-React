import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

export default function MatchNumberComp() {
  const [maxNumber, setMaxNumber] = useState(20);
  const [randomNumber, setRandomNumber] = useState(0);
  const [randomNumber2, setRandomNumber2] = useState(0);
  const [dogImageNumber, setDogImageNumber] = useState(0);
  const [dogList, setDogList] = useState([]);
  const [answerList, setAnswerList] = useState([]);
  const [showCongrats, setShowCongrats] = useState(false);
  const [showWrong, setShowWrong] = useState(false);

  useEffect(() => {
    initGame(maxNumber);
  }, []);

  const initGame = (maxNumber) => {
    const newRandomNumber = Math.floor(Math.random() * maxNumber + 1);
    let newRandomNumber2 = Math.floor(Math.random() * maxNumber + 1);

    while (newRandomNumber2 === newRandomNumber) {
      newRandomNumber2 = Math.floor(Math.random() * maxNumber + 1);
    }

    const newDogImageNumber = Math.floor(Math.random() * maxNumber + 1);

    setRandomNumber(newRandomNumber);
    setRandomNumber2(newRandomNumber2);
    setDogImageNumber(newDogImageNumber);

    if (Math.floor(Math.random() * maxNumber + 1) % 2 === 0) {
      setAnswerList([
        <IconButton
          color="primary"
          sx={{ transform: "scale(2)", marginRight: "100px", padding: "20px" }}
          onClick={() => displayCongrats()}
        >
          {newRandomNumber}
        </IconButton>,
        <IconButton
          color="primary"
          sx={{ transform: "scale(2)", padding: "20px" }}
          onClick={() => displayWrong()}
        >
          {newRandomNumber2}
        </IconButton>,
      ]);
    } else {
      setAnswerList([
        <IconButton
          color="primary"
          sx={{ transform: "scale(2)", marginRight: "100px", padding: "20px" }}
          onClick={() => displayWrong()}
        >
          {newRandomNumber2}
        </IconButton>,
        <IconButton
          color="primary"
          sx={{ transform: "scale(2)", padding: "20px" }}
          onClick={() => displayCongrats()}
        >
          {newRandomNumber}
        </IconButton>,
      ]);
    }

    const divList = [];
    for (let index = 0; index < newRandomNumber; index++) {
      divList.push(
        <img
          alt="dog"
          src={"./imgs/barbie" + newDogImageNumber + ".jpg"}
          className="circleImg"
          style={{
            width: "100px",
            height: "100px",
            marginLeft: "10px",
            marginRight: "10px",
            marginBottom: "10px",
          }}
        />
      );
    }

    setDogList(divList);
  };

  const changeMaxNumber = (maxNumber)=>
  {
    setMaxNumber(maxNumber);
    initGame(maxNumber);
  }

  const displayCongrats = () => {
    setShowCongrats(true);

    setTimeout(() => {
      setShowCongrats(false);
      initGame(maxNumber);
    }, 1500);
  };

  const displayWrong = () => {
    setShowWrong(true);

    setTimeout(() => {
      setShowWrong(false);
    }, 1500);
  };

  return (
    <>
      <Box>
        <Button onClick={() => initGame(maxNumber)} variant="contained">
          Change Number
        </Button>
        <FormControl sx={{minWidth: 150, marginLeft: '10px'}}>
          <InputLabel id="maxNumber">Max Number</InputLabel>
          <Select labelId="maxNumber"
          label="Max Number"
          value={maxNumber}
          onChange={(e)=>changeMaxNumber(e.target.value)}>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={19}>19</MenuItem>
            <MenuItem value={18}>18</MenuItem>
            <MenuItem value={17}>17</MenuItem>
            <MenuItem value={16}>16</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={14}>14</MenuItem>
            <MenuItem value={13}>13</MenuItem>
            <MenuItem value={12}>12</MenuItem>
            <MenuItem value={11}>11</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={2}>2</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Paper elevation={3} sx={{ marginTop: "20px", height: "auto" }}>
        {dogList.map((dogImage) => dogImage)}
      </Paper>

      <Box sx={{ marginTop: "50px", marginBottom: "50px" }}>
        {answerList.map((answer) => answer)}
      </Box>

      {showCongrats && (
        <Box>
          <img
            alt="congrats"
            src="./imgs/congrats.gif"
            style={{
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

      {showWrong && (
        <Box>
          <img
            src="./imgs/wrong.png"
            alt="wrong"
            style={{
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
