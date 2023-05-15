import React from "react";
import { Link } from "react-router-dom";

import "./List.css";

import skeletonImage from "./no-img-portrait-text.png";

const Li = (props) => {
  const {
    id,
    name,
    genres,
    schedule,
    language,
    summary,
    mediumImage,
    originalImage,
    url,
    network
  } = props;

  const renderImage = mediumImage ? (
    <img className="img-style" src={mediumImage} alt={name} />
  ) : (
    <img className="img-style" src={skeletonImage} alt="Skeleton Image" /> // Use the empty skeleton image
  );

  const displaySchedule = schedule ? schedule : "Not available";

  return (
    <ul>
      <li className="li-item">
        <div className="content">
          {renderImage}
          <h3 className="name">{name}</h3>
          <p className="genres">Genres: {genres.join(", ")}</p>
          <p className="schedule">Schedule: {displaySchedule}</p> {/* Updated JSX */}
          <p className="languages">Language: {language}</p>

          <Link
            to={`/${props.id}`}
            state={{ summary: summary, link: url, mediumImage: mediumImage, network:network}}
          >
            <button className="button-style">View Details</button>
          </Link>
        </div>
      </li>
    </ul>
  );
};

export default Li;
