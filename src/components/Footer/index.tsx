import { Typography } from "@mui/material";
import React from "react";

const Footer = () => (
  <footer className="app-footer">
    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
      Something here to give the footer a purpose!
    </Typography>
    <Typography variant="body2" color="textSecondary" align="center">
      {`Copyright © ${new Date().getFullYear()}.`}
    </Typography>
  </footer>
);

export default Footer;
