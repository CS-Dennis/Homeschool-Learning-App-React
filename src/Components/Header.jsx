import React from "react";
import { Grid } from "@mui/material";

export default function Header({title}) {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <h1>{title}</h1>
        </Grid>
      </Grid>
    </>
  );
}
