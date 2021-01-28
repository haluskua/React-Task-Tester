import { PropTypes } from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClickFn = () => {
    console.log("click");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClickFn} />
    </header>
  );
};

// css in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

Header.defaultProps = {
  title: "Task Tracker",
};

Header.proptTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
