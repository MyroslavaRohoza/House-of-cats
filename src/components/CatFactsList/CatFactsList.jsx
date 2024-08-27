import { useSelector } from "react-redux";
import css from "./catFactsList.module.css";
import { selectCatFacts } from "../../redux/catsInfo/selectors";
import { nanoid } from "@reduxjs/toolkit";
import CatFactsItem from "../CatFactsItem/CatFactsItem";

const CatFactsList = () => {
  const catFactsObj = useSelector(selectCatFacts);

  return (
    <ul className={css.catBlogContainer}>
      {Array.isArray(catFactsObj) &&
        catFactsObj.map((catsInfo) => (
          <CatFactsItem catsInfo={catsInfo} key={nanoid()} />
        ))}
    </ul>
  );
};

export default CatFactsList;
