import { PropTypes } from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
      color={showAdd ? 'red' : 'green'} 
      text={showAdd ? 'close' : 'Add' } 
      onClick={onAdd} />
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
