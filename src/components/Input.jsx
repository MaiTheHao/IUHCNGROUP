import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

import "./Input.scss";

function Input({ id, icon, type, placeholder, ...inputRest }) {
    return (
        <div className="comp-input" id={id || ""}>
            {icon && <FontAwesomeIcon icon={icon} className="comp-input-icon" />}
            <input
                type={type || "text"}
                placeholder={placeholder || "Nhập tại đây . . ."}
                className="comp-input-typing"
                {...inputRest}
            />
        </div>
    );
}

Input.propTypes = {
    id: PropTypes.string,
    icon: PropTypes.object,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    inputRest: PropTypes.object
};

export default Input;
