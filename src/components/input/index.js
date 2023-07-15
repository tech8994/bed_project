import React from 'react';
import PropTypes from "prop-types";


export const Input = (props) => {
  return (
       <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onchange}  />
  )
}

Input.propTypes = {
    value: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    icons: PropTypes.any,
    img: PropTypes.any,
    onchange: PropTypes.any,
};