// components/TruncatedContent.js
import React from "react";

function truncateContent(content, maxWords) {
  if (typeof content !== "string") {
    return "";
  }

  const words = content.trim().split(" ");
  const truncated = words.slice(0, maxWords).join(" ");
  return truncated + (words.length > maxWords ? "..." : "");
}

const TruncatedContent = ({ content, maxWords }) => {
  return <p>{truncateContent(content, maxWords)}</p>;
};

export default TruncatedContent;
