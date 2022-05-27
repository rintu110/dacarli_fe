import * as React from "react";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Logo from "assets/dacarli-logo.svg";
import NextLink from "components/NextLink";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Flag from "assets/flag.svg";

const pages = [
  "ENGAGEMENT RINGS ",
  "WEDDING RINGS",
  "DIAMONDS",
  "FINE JEWELRY",
  "DACARLI EDUCATION",
  "FAQ",
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "#ffffff",
        p: 0,
        "& .MuiToolbar-gutters": {
          minHeight: 0,
        },
      }}
    >
      <Toolbar sx={{ bgcolor: "#000000", mx: 0 }}>
        <Grid container justifyContent={"center"}>
          <Grid item xs={12} md={10} lg={8}>
            <Grid container justifyContent={"center"}>
              <Grid item xs={12} md={10} lg={3} sx={{ textAlign: "right" }}>
                <NextLink href={"#"}>
                  <Typography color="#ffffff" variant="button">
                    24/7 CUSTOMER SERVICE
                  </Typography>
                </NextLink>
              </Grid>
              <Grid item xs={12} md={10} lg={2} sx={{ textAlign: "center" }}>
                <NextLink href={"#"}>
                  <Typography color="#ffffff" variant="button">
                    LIFETIME WARRANTY
                  </Typography>
                </NextLink>
              </Grid>
              <Grid item xs={12} md={10} lg={2} sx={{ textAlign: "center" }}>
                <NextLink href={"#"}>
                  <Typography color="#ffffff" variant="button">
                    FREE INTERNATIONAL
                  </Typography>
                </NextLink>
              </Grid>
              <Grid item xs={12} md={10} lg={1} sx={{ textAlign: "center" }}>
                <NextLink href={"#"}>
                  <Typography color="#ffffff" variant="button">
                    SHIPPING
                  </Typography>
                </NextLink>
              </Grid>
              <Grid item xs={12} md={10} lg={4} sx={{ textAlign: "start" }}>
                <NextLink href={"#"}>
                  <Typography color="#ffffff" variant="button">
                    100% MONEY BACK GUARANTEE
                  </Typography>
                </NextLink>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
      <Toolbar sx={{ mx: 0, py: 1 }}>
        <Box sx={{ ml: "auto" }}>
          <SearchIcon color="action" />
        </Box>
        <Box sx={{ mx: 1 }}>
          <PersonOutlineIcon color="action" />
        </Box>
        <Box sx={{ mr: 1 }}>
          <FavoriteBorderIcon color="action" />
        </Box>
        <Box sx={{ mr: 1 }}>
          <ShoppingBagOutlinedIcon color="action" />
        </Box>
        <Box sx={{ mr: 1 }}>
          <Image src={Flag} alt="flag" height={20} width={20} />
        </Box>
      </Toolbar>
      <Toolbar sx={{ py: 1 }}>
        <Image src={Logo} alt="logo" height={"42px"} width={"211px"} />
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            width: "fit-content",
            mx: "auto",
            textAlign: "center",
            pr: 10,
          }}
        >
          {pages.map((page, index) => (
            <Box sx={{ width: "fit-content", mx: 1 }}>
              <NextLink key={index} href="#">
                <Typography color="#000000" variant="button">
                  {page}
                </Typography>
              </NextLink>
            </Box>
          ))}
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <MailOutlineIcon color="action" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default ResponsiveAppBar;
