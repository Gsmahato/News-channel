import React from "react";
import NepaliDate from "nepali-date-converter";

const NepaliDateComponent = () => {
  const nepaliDate = new NepaliDate();
  const formattedDate = nepaliDate.format("YYYY-MM-DD");
  return <div>{formattedDate}</div>;
};

export default NepaliDateComponent;
