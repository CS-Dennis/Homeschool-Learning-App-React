import { Paper } from "@mui/material";
import React from "react";

export default function AlphabetFlashCard({ letter }) {
  return (
    <>
      <Paper elevation={3} sx={{textAlign: 'center'}}>
        <div style={{ fontSize: "20em", textAlign: "center" }}>{letter}</div>
        <img src={"./imgs/alphabets/"+letter.toLowerCase()+".png"} alt="image" width="200px" />
      </Paper>
    </>
  );
}
