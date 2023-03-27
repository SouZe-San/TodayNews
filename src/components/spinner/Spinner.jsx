import React from "react";
import loadin01 from "../../assets/output-onlinegiftools.gif";

const Spinner = () => {
  return (
    <div className=" h-20">
      <img className="w-[10vw]" style={{ height: "inherit" }} src={loadin01} alt="loading" />
    </div>
  );
};

export default Spinner;
