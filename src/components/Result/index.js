import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import messages from 'containers/Query/messages';

const Wrapper = styled.div`
  padding-top: 16px;
  display: flex;
  flex-direction: column;
`;

const Result = (props) => (
  <Wrapper>
    <FormattedMessage {...messages.result} />
    <TextField
      value={JSON.stringify(props.result, null, 4)}
      multiline
      rows={16}
    />
    <FormattedMessage
      {...messages.resultSize}
      values={{ size: props.resultSize }}
    />
  </Wrapper>
);

Result.propTypes = {
  result: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  resultSize: PropTypes.number,
};

export default Result;
