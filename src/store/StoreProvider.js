import React, { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  const [chooseLanguage, setChooseLanguage] = useState(null);
  const [codeLanguage, setCodeLanguage] = useState(null);
  const [dataLanguage, setDataLanguage] = useState([]);
  const [flagToggle, setFlagToggle] = useState(false);
  const [idLang, setIdLang] = useState(null);
  const [isActive, setIsActive] = useState(true);
  const [numIndex, setNumIndex] = useState(null);
  const [isOnline, setIsOnline] = useState(true);

  const updateStatus = () => {
    if (navigator.onLine) {
      setIsOnline(true);
    } else {
      setIsOnline(false);
    }
  };

  useEffect(() => {
    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);

    return () => {
      window.removeEventListener("online", updateStatus);
      window.removeEventListener("offline", updateStatus);
    };
  }, [navigator.onLine]);

  useEffect(() => {
    if (navigator.onLine) {
      setIsOnline(true);
    } else {
      setIsOnline(false);
    }
  }, []);

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
        isOnline,
        setIsOnline,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
