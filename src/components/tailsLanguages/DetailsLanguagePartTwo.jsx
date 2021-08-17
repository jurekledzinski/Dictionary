import React, { Fragment, useContext } from "react";

import "./DetailsLanguagePartTwo.scss";

import { StoreContext } from "../../store/StoreProvider";

const DetailsLanguagePartTwo = () => {
  const { dataLanguage, isActive } = useContext(StoreContext);

  const { meanings, origin, phonetics } = dataLanguage[0]
    ? dataLanguage[0]
    : [];

  return (
    <Fragment>
      {isActive && (
        <div className="details-language__grammar-general">
          {phonetics[0].audio && (
            <audio
              className="details-language__audio"
              src={phonetics[0].audio && phonetics[0].audio}
              controls
            >
              Audio isn't support by browser
            </audio>
          )}

          <h5 className="details-language__definition-title">Definition</h5>
          <p className="details-language__definition">
            {meanings[0]?.definitions[0]?.definition}
          </p>
          <h5 className="details-language__etymology-title">Etymology</h5>
          <p className="details-language__origin">
            {origin
              ? origin
              : dataLanguage[1]?.origin
              ? dataLanguage[1]?.origin
              : "No etymology found"}
          </p>
        </div>
      )}
    </Fragment>
  );
};

export default DetailsLanguagePartTwo;
