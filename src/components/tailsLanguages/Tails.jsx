import React, { useContext, useState } from "react";

import "./Tails.scss";

import SvgLoader from "../others/SvgLoader";
import { langsArr } from "./TailsData";
import { StoreContext } from "../../store/StoreProvider";

const Tails = () => {
  const { idLang, setCodeLanguage, setChooseLanguage, setIdLang } =
    useContext(StoreContext);
  const [isLoadImg, setIsLoadImg] = useState(false);

  const handleSelectLanguage = (id, nameLang, code) => {
    setIdLang(id);
    setChooseLanguage(nameLang);
    setCodeLanguage(code);
  };

  const handleLoadingImg = () => {
    setIsLoadImg(true);
  };

  return (
    <section className="languages">
      {langsArr.map((item, index) => (
        <article
          className={
            index === idLang
              ? "languages__tail languages__tail--active"
              : "languages__tail"
          }
          key={item.id}
          onClick={() =>
            handleSelectLanguage(item.id, item.nameLang, item.code)
          }
        >
          <div className="languages__icon-wrapper">
            <img
              className={
                index === idLang
                  ? "languages__icon languages__icon--active"
                  : "languages__icon"
              }
              src={item.image}
              alt={item.alt}
              onLoad={handleLoadingImg}
            />
            {!isLoadImg && (
              <div className="languages__overlay">
                <SvgLoader />
              </div>
            )}
          </div>
          <p className="languages__name">{item.nameLang}</p>
        </article>
      ))}
    </section>
  );
};

export default Tails;
