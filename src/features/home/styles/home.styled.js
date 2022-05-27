import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Logo from "features/home/assets/head.svg";

export const HeaderBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${Logo.src})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
  height: "90vh",
}));
