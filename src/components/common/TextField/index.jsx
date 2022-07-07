import React, { Component } from "react";
import PropTypes from "prop-types";

class CTextField extends Component {
  static propTypes = {
    autoComplete: PropTypes.string,
    autoFocus: PropTypes.bool,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    fullWidth: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    endIcon: PropTypes.string,
    startIcon: PropTypes.string,
  };
}
export default CTextField;
