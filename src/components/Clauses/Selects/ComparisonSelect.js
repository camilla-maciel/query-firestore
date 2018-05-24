import React from 'react';
import PropTypes from 'prop-types';

import ClausesSelect from './ClausesSelect';

import { COMPARISONS } from '../../../constants';

const ComparisonSelect = ({ clause, index, editClause }) => (
  <ClausesSelect
    value={clause.comparison}
    index={index}
    editClause={editClause}
    name={'comparison'}
    values={COMPARISONS}
  />
);

ComparisonSelect.propTypes = {
  clause: PropTypes.shape({
    field: PropTypes.string,
    comparison: PropTypes.oneOf(Object.values(COMPARISONS)),
    type: PropTypes.string,
    value: PropTypes.string,
  }),
  index: PropTypes.number,
  editClause: PropTypes.func,
};

export default ComparisonSelect;
