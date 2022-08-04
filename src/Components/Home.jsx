import { Button, Grid, Avatar, Dialog } from "@mui/material";
import React, { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Home() {
  const [profileBorder, setProfileBorder] = useState("");
  const [profileDialog, setProfileDialog] = useState(false);
  const [profileSource, setProfileSource] = useState(null);

  

  function circleProfile() {
    setProfileBorder("5px solid #DC6333");
  }

  function unCircleProfile() {
    setProfileBorder(null);
  }

  function openProfileDialog(imageSource)
  {
    setProfileDialog(true);
    setProfileSource(imageSource);
  }

  function closeProfileDialog() {
    setProfileDialog(false);
  }

  const navi = useNavigate();
  const gotoLevelSelectionPage = (url)=>{
    navi(url);
  }
  
  return (
    <>
      <Header />

      <Grid container>
        <Grid item xs={12} sx={{ textAlign: "center", paddingTop: "10px" }}>
          <img
            src="./imgs/ABC.png"
            alt=""
            style={{ maxWidth: "100%", minWidth: "30%", userSelect: "none"}}
          />
        </Grid>

        <Grid item xs={12} sx={{ textAlign: "center" }}>
          Current student(s): Aria <b>Mei</b> Ye
        </Grid>

        <Grid item xs={12} sx={{ textAlign: "center", height: "170px", position: "relative" }}>
          <Avatar
            className="profile"
            onClick = {()=>openProfileDialog("./profiles/Mei_large.jpg")}
            onMouseEnter={() => circleProfile()}
            onMouseLeave={() => unCircleProfile()}
            src="./profiles/Mei_large.jpg"
            alt="Mei"
            sx={{
              width: "150px",
              height: "150px",
              margin: "auto",
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              border: profileBorder,
            }}
          />
        </Grid>

        <Grid item xs={12} sx={{textAlign: "center", margin: "10px"}}>
            <Button variant="outlined" onClick={()=>gotoLevelSelectionPage("/game")}>Start</Button>
        </Grid>
      </Grid>

      <Dialog open={profileDialog} onClose={() => closeProfileDialog()}>
        <img src={profileSource} style={{width: "100%", height: "auto"}}></img>
      </Dialog>
    </>
  );
}
