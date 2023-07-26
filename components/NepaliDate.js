import React from "react";
import NepaliDate from "nepali-date-converter";
const getDayOfWeekInNepali = (dayOfWeek) => {
  const daysInNepali = ["आइतबार", "सोमबार", "मङ्गलबार", "बुधबार", "बिहिबार", "शुक्रबार", "शनिबार"];
  return daysInNepali[dayOfWeek];
};

const NepaliDateComponent = () => {
  const nepaliDate = new NepaliDate();
  const formattedDate = nepaliDate.format("YYYY-MM-DD");
  const dayOfWeekInEnglish = nepaliDate.getDay();
    const dayOfWeekInNepali = getDayOfWeekInNepali(dayOfWeekInEnglish);

  return <div>{formattedDate},{dayOfWeekInNepali}</div>;
};

export default NepaliDateComponent;

