import React, { useContext } from "react";

import "./DetailsLanguagePartOne.scss";

import { StoreContext } from "../../store/StoreProvider";

const DetailsLanguagePartOne = () => {
  const { isActive, numIndex, dataLanguage, setIsActive, setNumIndex } =
    useContext(StoreContext);

  const { meanings } = dataLanguage[0] ? dataLanguage[0] : [];

  const handleChooseGenralGrammar = () => {
    setIsActive(true);
    setNumIndex(null);
  };

  const handleChooseGrammarMode = (index) => {
    setNumIndex(index);
    setIsActive(false);
  };

  return (
    <div className="details-language__grammar">
      <button
        className={
          isActive
            ? "details-language__mode details-language__mode--active"
            : "details-language__mode"
        }
        onClick={handleChooseGenralGrammar}
      >
        General
      </button>
      {meanings.map((item, index) => (
        <button
          className={
            numIndex === index
              ? "details-language__mode details-language__mode--active"
              : "details-language__mode"
          }
          key={index}
          onClick={() => handleChooseGrammarMode(index)}
        >
          {item.partOfSpeech}
        </button>
      ))}
    </div>
  );
};

export default DetailsLanguagePartOne;
