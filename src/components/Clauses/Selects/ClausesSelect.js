import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import styled from 'styled-components';

const StyledFormControl = styled(FormControl)`
  padding-right: 16px;
`;

const ClausesSelect = (props) => (
  <StyledFormControl>
    <Select
      native
      value={props.value}
      name={props.name}
      onChange={(evt) => props.editClause(evt, props.index)}
    >
      {Object.values(props.values).map((vl) => (
        <option key={vl} value={vl}> {vl} </option>
      ))}
    </Select>
  </StyledFormControl>
);

ClausesSelect.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  values: PropTypes.object,
};

export default ClausesSelect;
