import React from 'react';
import PropTypes from 'prop-types';

import ClausesSelect from './ClausesSelect';

import { COMPARISONS, TYPES } from '../../../constants';

const BooleanSelect = ({ clause, index, editClause }) => (
  <ClausesSelect
    value={clause.value}
    index={index}
    editClause={editClause}
    name={'value'}
    values={{ TRUE: 'true', FALSE: 'false' }}
  />
);

BooleanSelect.propTypes = {
  clause: PropTypes.shape({
    field: PropTypes.string,
    comparison: PropTypes.oneOf(Object.values(COMPARISONS)),
    type: PropTypes.oneOf(Object.values(TYPES)),
    value: PropTypes.string,
  }),
  index: PropTypes.number,
  editClause: PropTypes.func,
};

export default BooleanSelect;
