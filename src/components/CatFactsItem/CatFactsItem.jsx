import React from "react";
import css from "./CatFactsItem.module.css";
import { NavLink } from "react-router-dom";
const CatFactsItem = ({ catsInfo }) => {
  return (
    <li>
      <NavLink to={`/facts/${catsInfo.title}`} className={`${css.catBlogItem}`}>
        <img
          src={catsInfo.urlToImage}
          alt={catsInfo.title}
          className={css.blogImage}
        />
        <div className={css.blogTextContainer}>
          <h2 className={css.blogTitle}>{catsInfo.title}</h2>
          <p>{catsInfo.description}</p>
        </div>
      </NavLink>
    </li>
  );
};

export default CatFactsItem;
