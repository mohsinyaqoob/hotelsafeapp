import React from "react";
import Display from "../../components/Display";
import Indicator from "../../components/Indicator";
import Numpad from "../../components/Numpad";
import { isValidPin, setNewPin } from "../../utils/validation";
import "./index.css";

const Home = () => {
  const [inputPin, setInputPin] = React.useState("");
  const [safeOpen, setSafeOpen] = React.useState(false);

  const handleNumberClick = (e: any) => {
    if (inputPin.length < 4) {
      setInputPin(inputPin + e.target.innerText);
    }
  };

  const handleSubmit = (e: any) => {
    // Validate pin
    if (safeOpen) {
      setNewPin(inputPin);
      setInputPin("");
      setSafeOpen(false);
    } else {
      if (isValidPin(inputPin)) {
        setSafeOpen(true);
        setInputPin("");
      } else {
        setInputPin("INVALID");
      }
    }
  };

  const clearDisplay = () => {
    setInputPin("");
  };

  return (
    <div className="home__safe-box-wrapper">
      <div className="home__safe-container">
        {/* Numpad */}
        <Numpad
          handleNumberClick={handleNumberClick}
          handleSubmit={handleSubmit}
          clearDisplay={clearDisplay}
        />
        <div className="home__right-sider">
          {/* Display */}
          <Display inputPin={inputPin} />
          {/* Indicator */}
          <Indicator safeOpen={safeOpen} style={{ marginTop: "64px" }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
