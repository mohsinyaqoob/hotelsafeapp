import { LockOutlined, UnlockOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { RootReducerType } from "../../types/HotelSafe";
import "./index.css";

type Props = {
  safeOpen: boolean;
  style?: React.CSSProperties;
};

const Indicator = ({ safeOpen }: any) => {
  return (
    <>
      <div
        className="indicator"
        style={{ background: safeOpen ? "green" : "red" }}
      >
        {safeOpen ? <UnlockOutlined /> : <LockOutlined />}
      </div>
      <h3 className="indicator__text">
        {safeOpen
          ? "Safe Open and can be locked only by using the same pin"
          : "Safe Closed and can be unlocked by using a valid pin"}
      </h3>
    </>
  );
};
const mapStateToProps = (state: RootReducerType) => {
  return {
    safeOpen: state.hotelSafe.safeOpen,
  };
};

export default connect(mapStateToProps, {})(Indicator);
