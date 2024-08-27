import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setArticleTitle } from "../../redux/findArticles/slice";
import { selectArticle } from "../../redux/catsInfo/catInfoSlice";
import css from "./catFactDetailsPage.module.css";

const CatFactDetailsPage = () => {
  const { title } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setArticleTitle(title));
  }, [dispatch, title]);

  const foundedArticle = useSelector(selectArticle);

  return (
    <div className={css.container}>
      <h1 className={css.title}>{title}</h1>
      <img
        src={foundedArticle?.urlToImage}
        alt={foundedArticle?.description}
        className={css.image}
      />
      <p className={css.content}>{foundedArticle?.content}</p>
      <p className={`${css.content} ${css.link}`}>
        Link to original article:
        <a href={foundedArticle?.url} target="_blank">{foundedArticle?.url}</a>
      </p>
    </div>
  );
};

export default CatFactDetailsPage;
