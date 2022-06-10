import React from "react";

import "./index.css";

const Numpad = ({ handleNumberClick, handleSubmit, clearDisplay }: any) => {
  return (
    <div className="numpad__wrapper">
      <button onClick={handleNumberClick} className="numpad__number-container">
        1
      </button>
      <button onClick={handleNumberClick} className="numpad__number-container">
        2
      </button>
      <button onClick={handleNumberClick} className="numpad__number-container">
        3
      </button>
      <button onClick={handleNumberClick} className="numpad__number-container">
        4
      </button>
      <button onClick={handleNumberClick} className="numpad__number-container">
        5
      </button>
      <button onClick={handleNumberClick} className="numpad__number-container">
        6
      </button>
      <button onClick={handleNumberClick} className="numpad__number-container">
        7
      </button>
      <button onClick={handleNumberClick} className="numpad__number-container">
        8
      </button>
      <button onClick={handleNumberClick} className="numpad__number-container">
        9
      </button>
      <button onClick={clearDisplay} className="numpad__number-container">
        CLR
      </button>
      <button onClick={handleNumberClick} className="numpad__number-container">
        0
      </button>
      <button
        type="submit"
        onClick={handleSubmit}
        className="numpad__number-container"
      >
        {"⏎"}
      </button>
    </div>
  );
};

export default Numpad;
