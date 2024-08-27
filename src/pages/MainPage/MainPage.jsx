import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import css from "./MainPage.module.css";
import { fetchCatsInfo } from "../../redux/catsInfo/operations";
import SocialsNetworks from "../../components/SocialsNetworks/SocialsNetworks";
import CatVideo from "../../components/CatVideo/CatVideo";
import CatFactsList from "../../components/CatFactsList/CatFactsList";
import CatBreedsList from "../../components/CatBreedsList/CatBreedsList";

const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCatsInfo());
  });

  return (
    <main className={css.main}>
      <section className={`${css.section} ${css.postSection}`}>
        <CatBreedsList/>
      </section>
      <section className={`${css.section} ${css.blogSection}`}>
        <CatFactsList />
      </section>
      <section className={`${css.section} ${css.socialSection}`}>
        <SocialsNetworks />
      </section>
      <section className={`${css.section} ${css.videoSection}`}>
        <CatVideo />
      </section>
    </main>
  );
};
export default MainPage;
