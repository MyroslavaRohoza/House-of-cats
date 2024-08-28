import React, { useState } from "react";
import css from "./catBreedsItem.module.css";
import { NavLink } from "react-router-dom";

const CatBreedsItem = ({ breedsInfo }) => {
  

  return (
    <li className={css.catInfoPostItem}>
      <NavLink className={css.catInfoLink} to={`/breeds/${breedsInfo.id}`}>
        <img src={breedsInfo.image.url} alt={breedsInfo.name} className={css.catInfoImg}/>
        <div className={css.overlay}>
          <h2 className={css.catInfoTitle}>{breedsInfo.name}</h2>
        </div>
      </NavLink>
    </li>
  );
};

export default CatBreedsItem;
