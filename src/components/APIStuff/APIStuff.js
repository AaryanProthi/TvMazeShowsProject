import React, { useEffect, useState } from "react";

import Li from "../List/List";

import "./APIStuff.css";

const APIStuff = () => {
  const [apiData, setApiData] = useState(null);

  let API = "https://api.tvmaze.com/search/shows?q=all";

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setApiData(data); // Store the fetched data in state
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  return (
    <>
      <div className="heading-container">
        <h2 className="heading">TvMaze Shows</h2>
      </div>
      <div className="api-container">
        {apiData ? (
          <ul>
            {apiData.map((item) => (
              <Li
                id={item.show.id}
                name={item.show.name}
                genres={item.show.genres}
                schedule={
                  item.show.schedule ? item.show.schedule.days.join(", ") : null
                } // Use schedule instead of premiered
                language={item.show.language}
                network={item.show.network ? item.show.network.name : null} // Add network information
                summary={item.show.summary}
                mediumImage={item.show.image ? item.show.image.medium : null}
                originalImage={
                  item.show.image ? item.show.image.original : null
                }
                url={item.show.url}
              />
            ))}
          </ul>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
};

export default APIStuff;
