import {
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  return (
    <>
      <Header title="Homeschool Learning App" />

      <Grid container>
        <Grid item xs={12} md={6} sx={{ paddingTop: "10px" }}>
          <Card sx={{ width: "90%", margin: "auto", left: 0, right: 0 }}>
            <CardMedia
              component="img"
              sx={{
                height: "auto",
                width: "100%",
                margin: "auto",
                left: 0,
                right: 0,
                backgroundColor: "red",
              }}
              image="./imgs/ABC.jpeg"
              alt="ABC Learning"
            />
            <CardContent>Learning ABC</CardContent>
            <CardActions>
              <Link
                to="/alphabet-game"
                style={{
                  textDecoration: "none",
                  margin: "auto",
                  left: 0,
                  right: 0,
                }}
              >
                <Button variant="contained">Start</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} sx={{ paddingTop: "10px" }}>
          <Card sx={{ width: "90%", margin: "auto", left: 0, right: 0 }}>
            <CardMedia
              component="img"
              sx={{
                height: "auto",
                width: "100%",
                margin: "auto",
                left: 0,
                right: 0,
                backgroundColor: "red",
              }}
              image="./imgs/numbers.jpg"
              alt="ABC Learning"
            />
            <CardContent>Learning 1 to 20</CardContent>
            <CardActions>
              <Link
                to="/numbers-game"
                style={{
                  textDecoration: "none",
                  margin: "auto",
                  left: 0,
                  right: 0,
                }}
              >
                <Button variant="contained">Start</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
