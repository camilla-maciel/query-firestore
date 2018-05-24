import React from 'react';
import PropTypes from 'prop-types';

import ClausesSelect from './ClausesSelect';

import { COMPARISONS, TYPES } from '../../../constants';

const TypeSelect = ({ clause, index, editClause }) => (
  <ClausesSelect
    value={clause.type}
    index={index}
    editClause={editClause}
    name={'type'}
    values={TYPES}
  />
);

TypeSelect.propTypes = {
  clause: PropTypes.shape({
    field: PropTypes.string,
    comparison: PropTypes.oneOf(Object.values(COMPARISONS)),
    type: PropTypes.oneOf(Object.values(TYPES)),
    value: PropTypes.string,
  }),
  index: PropTypes.number,
  editClause: PropTypes.func,
};

export default TypeSelect;
