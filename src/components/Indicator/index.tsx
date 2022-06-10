import "./index.css";

type Props = {
  safeOpen: boolean;
  style?: React.CSSProperties;
};

const Indicator = ({ safeOpen, ...rest }: Props) => {
  return (
    <>
      <div
        className="indicator"
        style={{ background: safeOpen ? "green" : "red" }}
      ></div>
      <h3 className="indicator__text">
        {safeOpen ? "Safe Open" : "Safe Closed"}
      </h3>
    </>
  );
};

export default Indicator;
