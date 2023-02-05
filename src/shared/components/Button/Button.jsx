import React from 'react';
import PropTypes from 'prop-types';
import * as RemixIcon from "react-icons/ri";

import styles from './button.module.scss';

const Button = ({ onClick, type, name, icon, children }) => {
    const iconElement = React.createElement(RemixIcon[icon]);
    return (
        <button onClick={onClick} type={type} className={`${styles.btn} ${styles[name]}`}>{iconElement}{children}</button>
    );
}

export default Button;

Button.defaultProps = {
    type: "submit",
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    type: PropTypes.oneOf(["submit", "button", "reset"]),
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    children: PropTypes.PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]).isRequired,
}