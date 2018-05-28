import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import messages from 'containers/Query/messages';
import { COMPARISONS, TYPES, SELECT_OPTIONS } from '../../constants';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 196px;
`;

const Buttons = (props) => (
  <Wrapper>
    <Button
      variant={'raised'}
      color={'primary'}
      onClick={() => props.runQuery(props.collection, props.clauses, props.select)}
    >
      <FormattedMessage {...messages.run} />
    </Button>
    <Button variant={'raised'} onClick={props.clear} >
      <FormattedMessage {...messages.clear} />
    </Button>
  </Wrapper>
);

Buttons.propTypes = {
  runQuery: PropTypes.func,
  collection: PropTypes.string,
  select: PropTypes.oneOf(Object.values(SELECT_OPTIONS)),
  clauses: PropTypes.arrayOf(PropTypes.shape({
    field: PropTypes.string,
    comparison: PropTypes.oneOf(Object.values(COMPARISONS)),
    type: PropTypes.oneOf(Object.values(TYPES)),
    value: PropTypes.string,
  })),
  clear: PropTypes.func,
};

export default Buttons;