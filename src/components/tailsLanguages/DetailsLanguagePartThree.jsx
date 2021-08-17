import React, { Fragment, useContext } from "react";

import "./DetailsLanguagePartThree.scss";

import { StoreContext } from "../../store/StoreProvider";

const DetailsLanguagePartThree = () => {
  const { dataLanguage, numIndex } = useContext(StoreContext);

  const { meanings } = dataLanguage[0] ? dataLanguage[0] : [];

  return (
    <Fragment>
      {meanings.map((item, index) => (
        <div
          className={
            numIndex === index
              ? "details-language__grammar-details"
              : "details-language__grammar-details details-language__grammar-details--hide"
          }
          key={index}
        >
          {item?.definitions.map((item1, index) => (
            <div className="details-language__definition-wrapper" key={index}>
              <h5 className="details-language__definition-title">Definition</h5>
              <p className="details-language__definition">
                {item1?.definition}
              </p>
              {item1?.example && (
                <Fragment>
                  <h6 className="details-language__example-title">Example</h6>
                  <p className="details-language__example">{item1?.example}</p>
                </Fragment>
              )}
              <div className="details-language__antonyms-synonyms">
                {item1?.antonyms.length > 0 && (
                  <div className="details-language__antonyms">
                    <h6 className="details-language__antonyms-title">
                      Antonyms
                    </h6>
                    {item1?.antonyms.map((item2, index) => (
                      <p className="details-language__antonyms-one" key={index}>
                        {item2}
                      </p>
                    ))}
                  </div>
                )}
                {item1?.synonyms.length > 0 && (
                  <div className="details-language__synonyms">
                    <h6 className="details-language__synonyms-title">
                      Synonyms
                    </h6>
                    {item1?.synonyms.map((item3, index) => (
                      <p className="details-language__synonyms-one" key={index}>
                        {item3}
                      </p>
                    ))}
                  </div>
                )}
              </div>
              <span
                className={
                  item?.definitions.length === index + 1
                    ? "details-language__line details-language__line--hide"
                    : "details-language__line"
                }
              ></span>
            </div>
          ))}
        </div>
      ))}
    </Fragment>
  );
};

export default DetailsLanguagePartThree;
