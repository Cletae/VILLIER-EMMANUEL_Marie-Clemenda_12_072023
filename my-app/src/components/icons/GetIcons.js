import React from "react";
import icons from "./Icons.js";
import PropTypes from "prop-types";

/**
 *
 * @param {icon} param to get icon props
 * @returns
 */
function GetIcon({ icon }) {
  return (
    <div className="get-icon ">
      <img src={icons[icon]} alt="icon" />
    </div>
  );
}

/**
 * propTypes: Specify the type of data our component should expect:
 */
GetIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default GetIcon;
