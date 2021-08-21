import React, {
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import "./Form.scss";

import { StoreContext } from "../../store/StoreProvider";

const Form = () => {
  const {
    codeLanguage,
    chooseLanguage,
    dataLanguage,
    idLang,
    setCodeLanguage,
    setChooseLanguage,
    setDataLanguage,
    setIsActive,
    setIdLang,
    setNumIndex,
    isOnline,
  } = useContext(StoreContext);
  const [errorMsg, setErrMessage] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);
  const [textSearch, setTextSearch] = useState("");

  let idTimeout = useRef(null);

  async function getCachedData(cacheName, url) {
    const cacheStorage = await caches.open(cacheName);
    const cachedResponse = await cacheStorage.match(url);

    if (!cachedResponse || !cachedResponse.ok) {
      return false;
    }

    return await cachedResponse.json();
  }

  const checkCacheStorage = async (url) => {
    let nameCache = "language-api-response";

    let cachedData = await getCachedData(nameCache, url);

    let isInCache =
      typeof cachedData === "boolean"
        ? cachedData
        : cachedData.find((item) => item.word.toLowerCase() === textSearch);
    return isInCache;
  };

  const handleSubmitSearch = async (e) => {
    e.preventDefault();

    let urlApi = `https://api.dictionaryapi.dev/api/v2/entries/${codeLanguage}/${textSearch}`;

    if (Boolean(dataLanguage[0]) && dataLanguage[0].word === textSearch) {
      setErrMessage("You already find word in this language");
      return;
    }

    if (idLang === null) {
      setErrMessage("Please choose language");
      return;
    }

    if (textSearch.length <= 1) {
      setErrMessage("Word need at least two characters");
      return;
    }

    if ("caches" in window) {
      let isInCacheWord = await checkCacheStorage(urlApi);

      if (!Boolean(isInCacheWord) && !isOnline) {
        setErrMessage("Your are offline");
        return;
      }
    }

    fetch(urlApi)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Can't find given word");
        }

        return response.json();
      })
      .then((data) => {
        setDataLanguage(data);
        setIsActive(true);
        setNumIndex(null);
      })
      .catch((err) => {
        if (isOnline) {
          setErrMessage(err.message);
        } else {
          setErrMessage("Your are offline");
        }
      });
  };

  const handleInputSearch = (e) => {
    if (e.target.value !== "") {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }

    setTextSearch(e.target.value);
  };

  const handleClearLanguage = () => {
    setCodeLanguage(null);
    setChooseLanguage(null);
    setIsActive(true);
    setIdLang(null);
    setIsEmpty(true);
    setNumIndex(null);
    setTextSearch("");
    setDataLanguage([]);
  };

  useEffect(() => {
    idTimeout = setTimeout(() => {
      setErrMessage(null);
    }, 1500);

    return () => clearTimeout(idTimeout);
  }, [errorMsg]);

  return (
    <Fragment>
      {errorMsg && <p className="error-message">{errorMsg}</p>}
      <header className="header">
        <form action="" className="form">
          <input
            type="text"
            className={
              isEmpty ? "form__input" : "form__input form__input--not-empty"
            }
            value={textSearch}
            onChange={handleInputSearch}
          />
          <button
            disabled={isEmpty}
            className="form__btn-submit"
            type="submit"
            onClick={handleSubmitSearch}
          >
            <i className="fas fa-search"></i>
          </button>
        </form>
        {chooseLanguage && (
          <div className="header__info-language">
            <p className="header__info-text">{chooseLanguage}</p>
            <button
              className="header__btn-delete-lang"
              onClick={handleClearLanguage}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        )}
      </header>
    </Fragment>
  );
};

export default Form;
