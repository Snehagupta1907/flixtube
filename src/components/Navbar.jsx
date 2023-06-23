import { Stack,Typography } from "@mui/material";
import { Link } from "react-router-dom";
// import logo from "../assets/Group1.png";
import SearchBar from "./SearchBar";
import Logo from "./Logo";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      {/* <img src={Logo} alt="logo" height={45}/> */}
      <Logo />
      <Typography
         style={{
          color: 'white',
          fontFamily: 'Grandstander',
          fontSize: '36px',
          fontWeight: '700',
          marginLeft: '10px',
          lineHeight: '36px',
          letterSpacing: '0em',
          display: { xs: 'inline', sm: 'none' },
        }} sx={{display: { xs: 'none', sm: 'block' }}}
      >
        FlixTube
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;

// font-family: Grandstander;
// font-size: 36px;
// font-weight: 700;
// line-height: 36px;
// letter-spacing: 0em;
// text-align: left;
