import React from 'react';
import PropTypes from 'prop-types';
import { intlShape, injectIntl } from 'react-intl';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import messages from 'containers/Query/messages';

import ComparisonSelect from './Selects/ComparisonSelect';
import TypeSelect from './Selects/TypeSelect';
import BooleanSelect from './Selects/BooleanSelect';

import ClauseTextField from './ClauseTextField';

import { COMPARISONS, TYPES } from '../../constants';

const ClausesWrapper = styled.div`
  padding: 16px 0px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const ClauseWrapper = styled.div`
  padding-top: 16px;
  display: flex;
  align-items: center;
`;

const FieldsWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  width: 80%;
`;

const Clauses = (props) => {
  const { formatMessage } = props.intl;
  const clauses = [];
  const clausesSize = props.clauses.length;

  props.clauses.forEach((clause, index) => {
    clauses.push(
      <ClauseWrapper key={index}>
        <FieldsWrapper>
          <ClauseTextField
            message={formatMessage(messages.field)}
            value={clause.field}
            name={'field'}
            editClause={props.editClause}
            index={index}
          />
          <ComparisonSelect clause={clause} index={index} editClause={props.editClause} />
          <TypeSelect clause={clause} index={index} editClause={props.editClause} />
          {clause.type !== TYPES.BOOLEAN && clause.type !== TYPES.NULL &&
            <ClauseTextField
              message={formatMessage(messages.value)}
              value={clause.value}
              name={'value'}
              editClause={props.editClause}
              index={index}
              type={clause.type === TYPES.TIMESTAMP ? 'datetime-local' : clause.type}
            />
          }
          {clause.type === TYPES.BOOLEAN &&
            <BooleanSelect clause={clause} index={index} editClause={props.editClause} />}
        </FieldsWrapper>
        <IconButton onClick={() => props.deleteClause(index)} > <DeleteIcon /> </IconButton>
        {clausesSize - 1 === index &&
          <IconButton onClick={props.addClause} > <AddIcon /> </IconButton>
        }
      </ClauseWrapper>
    );
  });

  return (
    <ClausesWrapper>
      <Header>
        <Typography variant={'body1'}>
          <FormattedMessage {...messages.clauses} />
        </Typography>
        {!clausesSize &&
          <IconButton color={'secondary'} onClick={props.addClause} > <AddIcon /> </IconButton>
        }
      </Header>
      {clauses}
    </ClausesWrapper>
  );
};

Clauses.propTypes = {
  intl: intlShape.isRequired,
  clauses: PropTypes.arrayOf(PropTypes.shape({
    field: PropTypes.string,
    comparison: PropTypes.oneOf(Object.values(COMPARISONS)),
    type: PropTypes.oneOf(Object.values(TYPES)),
    value: PropTypes.string,
  })),

  addClause: PropTypes.func,
};

export default injectIntl(Clauses);
