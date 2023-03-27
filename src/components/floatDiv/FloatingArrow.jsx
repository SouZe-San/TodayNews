import React from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import "./style.scss";

const FloatingArrow = () => {
  return (
    <a href="#" class="scroll-up" id="scroll-pop">
      <KeyboardDoubleArrowUpIcon className="scroll__icon" />
    </a>
  );
};

export default FloatingArrow;
