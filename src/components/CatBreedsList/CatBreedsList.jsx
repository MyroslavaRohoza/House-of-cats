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
  let [currentSlide, setCurrentSlide] = useState(0);
  // const [totalPhotos, setTotalPhotos] = useState(10);
  const photosInSlide = 3;
  const totalPhotos = 10;
  const photoHeight = 220;

  console.log(containerRef.current?.clientHeight);

  const moveSliders = (n) => {
    // amount of photos per slide
    const photosPerSlide = Math.ceil(totalPhotos / photosInSlide); //4

    //index of last photo per slide
    const lastIndex = photosPerSlide - 1; //3

    //  index is greater than
    if (currentSlide > lastIndex) {
    currentSlide = 0;
    }

    //  index is less than
    if (currentSlide < 0) {
        currentSlide = lastIndex;
    }

    setCurrentSlide(currentSlide + n);
  };
  return (
    <div className={css.breedsContainer}>
      <ul
        className={css.catInfoPosts}
        ref={containerRef}
        style={{
          transform: `translateY(-${220 * currentSlide}px)`,
        }}
      >
        {Array.isArray(breedsInfo) &&
          breedsInfo.map((breedsInfo) => (
            <CatBreedsItem breedsInfo={breedsInfo} key={breedsInfo.id} />
          ))}
      </ul>
      <button
        onClick={() => moveSliders(-1)}
        className={`${css.changeSlideBtn} ${css.prevBtn}`}
      >
        ➖
      </button>
      <button
        onClick={() => moveSliders(1)}
        className={`${css.changeSlideBtn} ${css.nextBtn}`}
      >
        ➕
      </button>
    </div>
  );
};

export default CatBreedsList;
