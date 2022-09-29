/* eslint-disable no-unused-vars */
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initGame = (number) => {
    const newRandomNumber = Math.floor(Math.random() * number + 1);
    let newRandomNumber2 = Math.floor(Math.random() * number + 1);

    while (newRandomNumber2 === newRandomNumber) {
      newRandomNumber2 = Math.floor(Math.random() * number + 1);
    }

    const newDogImageNumber = Math.floor(Math.random() * number + 1);

    setRandomNumber(newRandomNumber);
    setRandomNumber2(newRandomNumber2);
    setDogImageNumber(newDogImageNumber);

    if (Math.floor(Math.random() * number + 1) % 2 === 0) {
      setAnswerList([
        <IconButton
          color="primary"
          sx={{ transform: "scale(2)", marginRight: "100px", padding: "20px" }}
          onClick={() => displayCongrats(number)}
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
          onClick={() => displayCongrats(number)}
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

  const changeMaxNumber = (number) => {
    setMaxNumber(number);
    initGame(number);
  };

  const displayCongrats = (number) => {
    setShowCongrats(true);

    setTimeout(() => {
      setShowCongrats(false);
      initGame(number);
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
      <Box sx={{ display: "flex", marginTop: "20px" }}>
        <Box sx={{flex: "40%", textAlign: 'right'}}>
          <Button onClick={() => initGame(maxNumber)} variant="contained">
            Change Number
          </Button>
        </Box>
        <Box sx={{flex: "5%"}}></Box>
        <Box sx={{flex: "40%"}}>
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel id="maxNumber">Max Number</InputLabel>
            <Select
              labelId="maxNumber"
              label="Max Number"
              value={maxNumber}
              onChange={(e) => changeMaxNumber(e.target.value)}
            >
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
      </Box>
      <Paper elevation={3} sx={{ marginTop: "20px", height: "auto", textAlign: "center" }}>
        {dogList.map((dogImage) => dogImage)}
      </Paper>

      <Box sx={{ marginTop: "50px", marginBottom: "50px", textAlign: "center"  }}>
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
