import React from "react";
import css from "./catVideo.module.css";
import catVideo from "../../videos/Houseofcats.mp4";

const CatVideo = () => {
  return (
    <div>
      <h2>Відео з пухнастиками</h2>
      <video src={catVideo} controls className={css.catVideo}></video>
    </div>
  );
};

export default CatVideo;
