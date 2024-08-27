import React from "react";
import css from "./catLogoContainer.module.css";
import { ReactSVG } from "react-svg";
import iconLogo from "../../icons/logoIcon.svg";
import { Link } from "react-router-dom";
const CatLogoContainer = () => {
  return (
    <div className={css.container}>
      <Link to="/">
        <div className={css.catLogoContainer}>
          <ReactSVG src={iconLogo} className={css.logo} />
          <h1 className={css.label}>Котодім</h1>
        </div>
      </Link>
    </div>
  );
};

export default CatLogoContainer;
