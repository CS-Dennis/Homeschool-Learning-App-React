import { Paper } from "@mui/material";
import React from "react";

export default function FlashCard({ number }) {
  const imageList = () => {
    const images = [];
    for (let index = 1; index < number + 1; index++) {
      images.push(
        <img
          alt="dog"
          src={"./imgs/barbie" + number + ".jpg"}
          style={{
            width: "100px",
            height: "100px",
            marginLeft: "10px",
            marginRight: "10px",
            marginBottom: "10px",
          }}
          className="circleImg"
        />
      );
    }
    return images;
  };

  return (
    <>
      <Paper elevation={3}>
        <div style={{ fontSize: "20em" }}>{number}</div>
        <div>{imageList().map((row) => row)}</div>
      </Paper>
    </>
  );
}
