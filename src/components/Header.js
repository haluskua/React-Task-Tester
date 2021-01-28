import { PropTypes } from 'prop-types';


const Header = ({title}) => {
    return (
        <header className="header">
            <h1 >{title}</h1>
            <button className="btn">
                Add
            </button>
        </header>
    );
};



// css in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.proptTypes = {
    title: PropTypes.string.isRequired,
    
}


export default Header;