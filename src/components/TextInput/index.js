/**
 * MatchPint Ltd
 * @author Pierre Segonne
 * Date: 17/04/2018
 */

import React  from 'react';
import PropTypes from 'prop-types';

const TextInput = ({handleChange, value}) => (
  <input type="text" value={value} onChange={(event) => handleChange(event.target.value)} />
);


TextInput.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string,
};

TextInput.defaultProps = {
  handleChange: (event) => console.info(`New value : ${event.target.value}`),
  value: null,
};

export default TextInput;
