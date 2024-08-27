import React from "react";
import css from "./catBlog.module.css";
import catImage1 from "../../img/1.png";
import catImage2 from "../../img/2.png";
import catImage3 from "../../img/3.png";
import catImage4 from "../../img/4.png";

const CatBlog = () => {
  return (
    <ul className={css.catBlogContainer}>
      <li className={css.catBlogItem}>
        <img src={catImage1} alt="" />
        <div className={css.blogTextContainer}>
          <h2 className={css.blogTitle}>
            Найпопулярніші породи котів: який кіт підходить вам?
          </h2>
          <p>
            Вивчіть найпопулярніші породи котів і їхні особливості, щоб зробити
            інформований вибір, який підходить саме вам.
          </p>
        </div>
      </li>
      <li className={css.catBlogItem}>
        <img src={catImage2} alt="" />
        <div className={css.blogTextContainer}>
          <h2 className={css.blogTitle}>
            Як піклуватися про вашого пухнастого друга: догляд за котом
          </h2>
          <p>
            Дізнайтеся про основні аспекти догляду за котом, включаючи
            годування, гігієну та взаємодію з вашим улюбленцем.
          </p>
        </div>
      </li>
      <li className={css.catBlogItem}>
        <img src={catImage3} alt="" />
        <div className={css.blogTextContainer}>
          <h2 className={css.blogTitle}>
            Забавні факти про котів, які вас здивують
          </h2>
          <p>
            Веселі та цікаві факти про котів, які піднімуть вам настрій та
            розкажуть про їхні унікальність.
          </p>
        </div>
      </li>
      <li className={css.catBlogItem}>
        <img src={catImage4} alt="" />
        <div className={css.blogTextContainer}>
          <h2 className={css.blogTitle}>
            Історія та культурна значущість котів в усьому світ
          </h2>
          <p>
            Вивчіть, як коти впливали на культури різних народів та дізнайтеся
            історію спільного життя людей і котів.
          </p>
        </div>
      </li>
    </ul>
  );
};

export default CatBlog;
