import React from "react";
import "./Footer.css";

import { LinkedIn, GitHub, Facebook, Twitter, YouTube } from "@mui/icons-material";
import { Box } from "@mui/material";

const Footer = () => {
  return (
    <footer className="footer custom-text-white d-flex-center-center">
      <div className="text-center">
        {/* <div style={{display: "flex", justifyContent: "center", gap:"6px"}}> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "6px",
          }}
        >
          <LinkedIn />
          <GitHub />
          <Facebook />
          <Twitter />
          <YouTube />
        </Box>
        <h5>All Rights Reserved. Mohammad Taheri</h5>
      </div>
    </footer>
  );
};

export default Footer;
