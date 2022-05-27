import * as React from "react";
import Grid from "@mui/material/Grid";
import { Header } from "features/home/components/widgets";

export function Home() {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <Header />
      </Grid>
    </Grid>
  );
}
