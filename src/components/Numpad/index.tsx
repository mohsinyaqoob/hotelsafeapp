import { connect } from "react-redux";
import { LockOutlined, UnlockOutlined } from "@ant-design/icons";
import {
  clearDisplay,
  handleNumberInput,
  lockSafe,
  unlockSafe,
} from "../../redux/actions/hotel-safe";
import { RootReducerType } from "../../types/HotelSafe";

import "./index.css";

type Props = {};

const Numpad = ({
  displayText,
  safeOpen,
  handleNumberInput,
  clearDisplay,
  unlockSafe,
  lockSafe,
}: any) => {
  const handleNumberClick = (e: any) => {
    if (displayText.length < 4) {
      handleNumberInput(e.target.innerText);
    }
  };

  const handleSubmit = () => {
    // If safe in closed,
    if (!safeOpen) {
      // call validate action
      unlockSafe(displayText);
    } else {
      // If safe is open, then lock it if pin is correct
      lockSafe(displayText);
    }
  };

  const clearInput = () => {
    clearDisplay();
  };
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
      <button onClick={clearInput} className="numpad__number-container">
        CLR
      </button>
      <button onClick={handleNumberClick} className="numpad__number-container">
        0
      </button>
      <button
        type="submit"
        onClick={handleSubmit}
        className={`numpad__number-container`}
      >
        {safeOpen ? <LockOutlined /> : <UnlockOutlined />}
      </button>
    </div>
  );
};

const mapStateToProps = (state: RootReducerType) => ({
  displayText: state.hotelSafe.displayText,
  safeOpen: state.hotelSafe.safeOpen,
});

export default connect(mapStateToProps, {
  handleNumberInput,
  clearDisplay,
  unlockSafe,
  lockSafe,
})(Numpad);
