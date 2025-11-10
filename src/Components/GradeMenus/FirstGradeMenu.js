import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function FirstGradeMenu() {
  return (
    <>
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
              image={process.env.PUBLIC_URL + "/imgs/ABC.jpeg"}
              alt="Math Learning"
            />
            <CardContent>Math</CardContent>
            <CardActions>
              <Link
                to="/learn-math"
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
