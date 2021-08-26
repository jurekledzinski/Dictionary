import React, { useContext } from "react";

import "./DetailsLanguage.scss";

import { StoreContext } from "../../store/StoreProvider";

import DetailsLanguagePartOne from "./DetailsLanguagePartOne";
import DetailsLanguagePartTwo from "./DetailsLanguagePartTwo";
import DetailsLanguagePartThree from "./DetailsLanguagePartThree";

const DetailsLanguage = () => {
  const { dataLanguage } = useContext(StoreContext);

  const { phonetic, word } = dataLanguage[0] ? dataLanguage[0] : [];

  return (
    <section className="details-language">
      <div className="details-language__wrapper">
        <h2 className="details-language__word">{word}</h2>
        <i className="details-language__phonetic">/{phonetic}/</i>
        <DetailsLanguagePartOne />
        <DetailsLanguagePartTwo />
        <DetailsLanguagePartThree />
      </div>
    </section>
  );
};

export default DetailsLanguage;
