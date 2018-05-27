import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { ResultTextArea } from './ResultTextArea';

import messages from 'containers/Query/messages';

const Wrapper = styled.div`
  padding-top: 16px;
  display: flex;
  flex-direction: column;
`;

const Result = (props) => (
  <Wrapper>
    <Typography variant={'body1'} >
      <FormattedMessage {...messages.result} />
    </Typography>
    <ResultTextArea
      value={JSON.stringify(props.result, null, 4)}
      multiline
      rows={10}
    />
    <Typography variant={'body1'} >
      <FormattedMessage
        {...messages.resultSize}
        values={{ size: props.resultSize }}
      />
    </Typography>
  </Wrapper>
);

Result.propTypes = {
  result: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  resultSize: PropTypes.number,
};

export default Result;
