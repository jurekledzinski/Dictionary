import React, { useState } from "react";

import "./Form.scss";

const Form = () => {
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    console.log("click submit");
  };

  return (
    <header className="header">
      <form action="" className="form">
        <input type="text" className="form__input" />
        <button className="form__btn-submit" onClick={handleSubmitSearch}>
          <i className="fas fa-search"></i>
        </button>
      </form>
    </header>
  );
};

export default Form;
