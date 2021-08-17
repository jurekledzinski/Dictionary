import React, { createContext, useState } from "react";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  const [chooseLanguage, setChooseLanguage] = useState(null);
  const [codeLanguage, setCodeLanguage] = useState(null);
  const [dataLanguage, setDataLanguage] = useState([]);
  const [flagToggle, setFlagToggle] = useState(false);
  const [idLang, setIdLang] = useState(null);
  const [isActive, setIsActive] = useState(true);
  const [numIndex, setNumIndex] = useState(null);

  return (
    <StoreContext.Provider
      value={{
        chooseLanguage,
        setChooseLanguage,
        codeLanguage,
        setCodeLanguage,
        dataLanguage,
        setDataLanguage,
        flagToggle,
        setFlagToggle,
        idLang,
        setIdLang,
        isActive,
        setIsActive,
        numIndex,
        setNumIndex,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
