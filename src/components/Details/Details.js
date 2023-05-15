import React from "react";
import { useLocation } from "react-router-dom";
import "./Details.css";

import skeletonImage from "./no-img-portrait-text.png";

const Details = (props) => {
  const location = useLocation();

  // Function to remove HTML tags from a string
  const removeHTMLTags = (str) => {
    const div = document.createElement("div");
    div.innerHTML = str;
    return div.textContent || div.innerText || "";
  };

  const summaryWithoutTags = removeHTMLTags(location.state.summary);

  return (
    <div className="container">
      <div className="image-container">
        {location.state.mediumImage ? (
          <img className="image" src={location.state.mediumImage} alt="Medium" />
        ) : (
          <img className="image" src={skeletonImage} alt="Skeleton Image" />
        )}
      </div>
      <div className="summary">{summaryWithoutTags}</div>
      {location.state.network ? (
        <div className="network">Network: {location.state.network}</div>
      ) : (
        <div className="network">Network: Not available</div>
      )}
      <a className="button" href={location.state.link}>
        Go To TvMaze
      </a>
    </div>
  );
};

export default Details;

