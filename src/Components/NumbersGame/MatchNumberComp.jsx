import { Button, IconButton, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

export default function MatchNumberComp() {
  const [randomNumber, setRandomNumber] = useState(0);
  const [randomNumber2, setRandomNumber2] = useState(0);
  const [dogImageNumber, setDogImageNumber] = useState(0);
  const [dogList, setDogList] = useState([]);
  const [answerList, setAnswerList] = useState([]);
  const [showCongrats, setShowCongrats] = useState(false);

  useEffect(() => {
    initGame();
  }, []);

  const initGame = () => {
    const newRandomNumber = Math.floor(Math.random() * 20 + 1);
    let newRandomNumber2 = Math.floor(Math.random() * 20 + 1);

    while (newRandomNumber2 === newRandomNumber) {
      newRandomNumber2 = Math.floor(Math.random() * 20 + 1);
    }

    const newDogImageNumber = Math.floor(Math.random() * 20 + 1);

    setRandomNumber(newRandomNumber);
    setRandomNumber2(newRandomNumber2);
    setDogImageNumber(newDogImageNumber);

    if (Math.floor(Math.random() * 20 + 1) % 2 === 0) {
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
        >
          {newRandomNumber2}
        </IconButton>,
      ]);
    } else {
      setAnswerList([
        <IconButton
          color="primary"
          sx={{ transform: "scale(2)", marginRight: "100px", padding: "20px" }}
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
          height={100}
          style={{marginLeft: "10px", marginRight:"10px"}}
        />
      );
    }

    setDogList(divList);
  };

  const displayCongrats = () => {
    setShowCongrats(true);

    setTimeout(() => {
      setShowCongrats(false);
    }, 1500);
  };

  return (
    <>
      <Box>
        <Button onClick={() => initGame()} variant="contained">
          Next Number
        </Button>
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
    </>
  );
}
