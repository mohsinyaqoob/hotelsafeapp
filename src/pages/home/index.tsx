import React from "react";
import Display from "../../components/Display";
import Indicator from "../../components/Indicator";
import Numpad from "../../components/Numpad";

import "./index.css";

const Home: React.FC = () => {
  return (
    <div className="home__safe-box-wrapper">
      <div className="home__safe-container">
        {/* Numpad Component*/}
        <Numpad />
        <div className="home__right-sider">
          {/* Display Component */}
          <Display />
          {/* Indicator Component */}
          <Indicator style={{ marginTop: "64px" }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
