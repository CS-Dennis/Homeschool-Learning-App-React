import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Header from "./Header";
import "../App.css";
import { CONSTANTS } from "../utils/constants";
import { useState } from "react";
import KindergartenMenu from "./GradeMenus/KindergartenMenu";
import FirstGradeMenu from "./GradeMenus/FirstGradeMenu";

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

      {/* Card Menus by Grade */}
      <Grid container>
        {/* Kindergarten */}
        {selectedGrade === 0 && (<KindergartenMenu />)}

        {selectedGrade === 1 && (<FirstGradeMenu />)}
      </Grid>
    </>
  );
}
