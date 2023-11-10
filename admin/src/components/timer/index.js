import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@strapi/design-system";
import "./style.css";

const TimePicker = ({
  //All these parameters are passed from admin\src\index.js
  onChange,
  name,
  intlLabel,
  attribute,
  value,
}) => {
  function handleChange(event) {
    if (onChange) {
      onChange({
        target: {
          name: name,
          value: event.target.value,
          type: attribute.type,
        },
      });
    }
  }

  return (
    <Box>
      <Typography variant="pi" fontWeight="bold">{intlLabel.id}</Typography>
      <input
        className="my-input"
        type="time"
        value={value}
        onChange={handleChange}
        label={intlLabel.id}
        name={name}
      />
    </Box>
  );
};

//default value if no value is given

TimePicker.defaultProps = {};

// validation
TimePicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  attribute: PropTypes.object.isRequired,
  value: PropTypes.string,
};

export default TimePicker;
