/**
 * Created by akaur on 6/16/18.
 */
import React from "react";
import PropTypes from "prop-types";

const InlineError = ({ text }) => (
<span style={{ color: "#ae5856" }}>{text}</span>
);

InlineError.propTypes = {
    text: PropTypes.string.isRequired
};

export default InlineError;