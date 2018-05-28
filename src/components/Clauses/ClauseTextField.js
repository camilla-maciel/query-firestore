import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

import styled from 'styled-components';

const StyledTextField = styled(TextField)`
  padding-right: 16px;
`;

const ClauseTextField = (props) => (
  <StyledTextField
    label={props.message}
    value={props.value}
    name={props.name}
    onChange={(evt) => props.editClause(evt, props.index)}
    required
    type={props.type}
  />
);

ClauseTextField.propTypes = {
  message: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  editClause: PropTypes.func,
  index: PropTypes.number,
  type: PropTypes.string,
};

export default ClauseTextField;
