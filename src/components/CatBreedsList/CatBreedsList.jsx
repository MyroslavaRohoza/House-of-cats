import React from "react";
import css from "./catBreedsList.module.css";
import largeImage1 from "../../img/picture-1.png";
import smallImage1 from "../../img/picture-1-small.png";
import largeImage2 from "../../img/picture-2.png";
import largeImage3 from "../../img/picture-3.png";
import { useSelector } from "react-redux";
import { selectCatBreeds } from "../../redux/catsInfo/selectors";
import CatBreedsItem from "../CatBreedsItem/CatBreedsItem";

const CatBreedsList = () => {
  const breedsInfo = useSelector(selectCatBreeds);

  return (
    <ul className={css.catInfoPosts}>
      {Array.isArray(breedsInfo) &&
        breedsInfo.map((breedsInfo) => (
          <CatBreedsItem breedsInfo={breedsInfo} key={breedsInfo.id} />
        ))}
    </ul>
  );
};

export default CatBreedsList;
