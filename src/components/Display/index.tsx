import "./index.css";
type Props = {
  inputPin: string;
};

const Display = (props: Props) => {
  const { inputPin } = props;
  return (
    <div className="display__wrapper">
      <div className="display__screen">
        <span className="display__screen-text">{inputPin}</span>
      </div>
    </div>
  );
};

export default Display;
