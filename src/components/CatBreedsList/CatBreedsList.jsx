import css from "./catBreedsList.module.css";
import largeImage1 from "../../img/picture-1.png";
import smallImage1 from "../../img/picture-1-small.png";
import largeImage2 from "../../img/picture-2.png";
import largeImage3 from "../../img/picture-3.png";
import { useSelector } from "react-redux";
import { selectCatBreeds } from "../../redux/catsInfo/selectors";
import CatBreedsItem from "../CatBreedsItem/CatBreedsItem";
import { useRef, useState } from "react";

const CatBreedsList = () => {
  const containerRef = useRef(null);
  const breedsInfo = useSelector(selectCatBreeds);
  const [currentSlide, setCurrentSlide] = useState(0);
  const photosPerSlide = 3;
  const totalPhotos = 10;
  const photoHeight = 220;

  console.log(containerRef.current?.clientHeight);
  const moveSliders = (n) => {
    let slideIndex = currentSlide + photosPerSlide * n;

    // if (slideIndex < 0) {
    //   slideIndex =
    //     photosPerSlide * (Math.floor(totalPhotos / photosPerSlide) - 1);
    // } else if (slideIndex >= totalPhotos) {
    //   slideIndex = 0;
    // }

    setCurrentSlide(slideIndex);
  };
  return (
    <div className={css.breedsContainer}>
      <ul
        className={css.catInfoPosts}
        ref={containerRef}
        style={{
          transform: `translateY(-${220 * (currentSlide / photosPerSlide)}px)`,
        }}
      >
        {Array.isArray(breedsInfo) &&
          breedsInfo.map((breedsInfo) => (
            <CatBreedsItem breedsInfo={breedsInfo} key={breedsInfo.id} />
          ))}
      </ul>
      <button onClick={() => moveSliders(-1)} className={`${css.changeSlideBtn} ${css.prevBtn}`}>
        ➖
      </button>
      <button onClick={() => moveSliders(1)} className={`${css.changeSlideBtn} ${css.nextBtn}`}>
        ➕
      </button>
    </div>
  );
};

export default CatBreedsList;
