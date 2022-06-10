import { connect } from "react-redux";
import { RootReducerType } from "../../types/HotelSafe";
import "./index.css";

const Display = ({ displayText, error }: any) => {
  return (
    <div className="display__wrapper">
      <div className="display__screen">
        <span className="display__screen-text">
          {error || displayText || ""}
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootReducerType) => {
  return {
    displayText: state.hotelSafe.displayText,
    error: state.hotelSafe.error,
  };
};

export default connect(mapStateToProps, {})(Display);
