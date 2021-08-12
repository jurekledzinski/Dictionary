import React, { useState } from "react";

import "./TailsLanguages.scss";

import { langsArr } from "./TailsData";

const TailsLanguages = () => {
  const [idLang, setIdLang] = useState(false);

  const handleSelectLanguage = (id) => {
    setIdLang(id);
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
          onClick={() => handleSelectLanguage(item.id)}
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
            />
          </div>
          <p className="languages__name">{item.nameLang}</p>
        </article>
      ))}
    </section>
  );
};

export default TailsLanguages;
