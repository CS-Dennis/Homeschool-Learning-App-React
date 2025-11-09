import {
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Header from "./Header";
import { Link } from "react-router-dom";
import "../App.css";
import { CONSTANTS } from "../utils/constants";
import { useState } from "react";

export default function Home() {
  const [selectedGrade, setSelectedGrade] = useState(0);
  const changeGrade = (event) => {
    setSelectedGrade(event.target.value);
  };

  return (
    <>
      <Header title="Homeschool Learning App" />
      <Grid container>
        <Grid item xs={12} md={4}></Grid>
        <Grid item xs={12} md={4} sx={{ paddingTop: "10px", paddingX: "10px" }}>
          <FormControl fullWidth>
            <InputLabel >Select Grade</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedGrade}
              label="Select Grade"
              onChange={changeGrade}

            >
              {CONSTANTS !== null && CONSTANTS.LEVELS.map((level) => (
                <MenuItem key={level.value} value={level.value}>
                  {level.grade}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}></Grid>
      </Grid>

      <Grid container>
        {/* Kindergarten */}
        {selectedGrade === 0 &&
          (<>
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
                  alt="ABC Learning"
                />
                <CardContent>Learning ABC</CardContent>
                <CardActions>
                  <Link
                    to="/learn-alphabet"
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
                  image={process.env.PUBLIC_URL + "/imgs/numbers.jpg"}
                  alt="ABC Learning"
                />
                <CardContent>Learning 1 to 20</CardContent>
                <CardActions>
                  <Link
                    to="/learn-numbers"
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
          </>)}
      </Grid>
    </>
  );
}
