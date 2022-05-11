import { Button, Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import leapLogo from "../../images/leap-logo.svg";

// navbar
function Navigation(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ mt: 3, px: 2 }}>
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: 6,
        }}
      >
        <Link href="https://twitter.com/Hey_Zwerner" passHref>
          Twitter
        </Link>
        <Link
          href="https://www.getrevue.co/profile/hey_alexanderz?via=twitter-profile"
          passHref
        >
          Newsletter
        </Link>
      </nav>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="static"
        sx={{ bgcolor: "transparent", boxShadow: 0, mb: 0 }}
      >
        <Toolbar>
          <Container sx={{}}>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                py: 1,
              }}
            >
              <Link href="/" passHref>
                <Image className="logo" src={leapLogo} alt="" />
              </Link>

              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <nav
                  className="navbar"
                  style={{ display: "flex", alignItems: "center", gap: 20 }}
                >
                  <Link href="https://twitter.com/Hey_Zwerner" passHref>
                    Twitter
                  </Link>
                  <Link
                    href="https://www.getrevue.co/profile/hey_alexanderz?via=twitter-profile"
                    passHref
                  >
                    Newsletter
                  </Link>
                </nav>
              </Box>
            </Box>
          </Container>
          <IconButton
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" }, color: "#16425B" }}
          >
            <MenuIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "70%",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Navigation.propTypes = {
  window: PropTypes.func,
};

export default Navigation;
