import { Typography } from "@mui/material";
import React from "react";

type WindSpeedProps = {
  speed: Number;
  direction: Number;
};
const WindSpeed = ({ speed, direction }: WindSpeedProps) => (
  <Typography variant="caption" component="span">
    <span>{speed.toFixed(0)}mph</span>
  </Typography>
);

export default WindSpeed;
