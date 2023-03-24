import "./CustomButton.css";

const CustomButton = (props) => {
  return (
    <div className={props.className}>
      <button className="custom-button" onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
};

export default CustomButton;
