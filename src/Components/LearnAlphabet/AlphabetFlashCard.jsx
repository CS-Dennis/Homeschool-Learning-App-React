import { Paper } from "@mui/material";
import React from "react";

export default function AlphabetFlashCard({ letter, fontSize, imageWidth }) {
  return (
    <>
      <Paper elevation={3} sx={{textAlign: 'center'}}>
        <div style={{ fontSize: fontSize, textAlign: "center" }}>{letter}</div>
        <img src={"./imgs/alphabets/"+letter.toLowerCase()+".png"} alt="image" width={imageWidth} />
      </Paper>
    </>
  );
}
