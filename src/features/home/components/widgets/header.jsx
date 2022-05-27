import * as React from "react";
import Grid from "@mui/material/Grid";
import { HeaderBox } from "features/home/styles/home.styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export function Header() {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <HeaderBox>
          <Box
            sx={{
              ml: "auto",
              width: "fit-content",
              px: 13,
              pt: 20,
              textAlignLast: "center",
            }}
          >
            <Typography fontSize={35}>THE FINEST</Typography>
          </Box>
          <Box sx={{ ml: "auto", width: "fit-content", px: 10, pb: 2 }}>
            <Typography fontSize={40} fontWeight={600}>
              ESSENTIALS
            </Typography>
          </Box>
          <Box sx={{ ml: "auto", width: 410, px: 10, mb: 2 }}>
            <Button color="primary" variant="contained" size="large" fullWidth>
              SHOP ENGAGEMENT RINGS
            </Button>
          </Box>
          <Box sx={{ ml: "auto", width: 410, px: 10 }}>
            <Button color="primary" variant="contained" size="large" fullWidth>
              SHOP JEWELRY
            </Button>
          </Box>
        </HeaderBox>
      </Grid>
    </Grid>
  );
}
