import { CustButton } from "./ButtonStyle";

function Button(props) {
  const classes = props.className;
  return <CustButton className={classes}>{props.children}</CustButton>;
}

export default Button;
