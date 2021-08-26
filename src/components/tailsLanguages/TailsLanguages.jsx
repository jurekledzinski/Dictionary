import React, { Fragment, useContext } from "react";

import { StoreContext } from "../../store/StoreProvider";

import Tails from "./Tails";
import DetailsLanguage from "./DetailsLanguage";

const TailsLanguages = () => {
  const { dataLanguage } = useContext(StoreContext);

  return (
    <Fragment>
      {dataLanguage.length < 1 ? <Tails /> : <DetailsLanguage />}
    </Fragment>
  );
};

export default TailsLanguages;
