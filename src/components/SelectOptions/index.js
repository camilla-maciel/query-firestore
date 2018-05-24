import React from 'react';
import PropTypes from 'prop-types';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import messages from 'containers/Query/messages';
import { SELECT_OPTIONS } from '../../constants';

const Wrapper = styled.div`
  padding-top: 16px;
`;

const StyledRadioGroup = styled(RadioGroup)`
  display: flex;
  flex-direction: row;
`;

const SelectOptions = (props) => (
  <Wrapper>
    <FormControl component="fieldset">
      <FormLabel component="legend"><FormattedMessage {...messages.select} /></FormLabel>
      <StyledRadioGroup
        value={props.select}
        onChange={props.changeSelect}
      >
        <FormControlLabel value={SELECT_OPTIONS.ALL_DATA} control={<Radio />} label="All fields" />
        <FormControlLabel value={SELECT_OPTIONS.ONLY_IDS} control={<Radio />} label="Only ids" />
      </StyledRadioGroup>
    </FormControl>
  </Wrapper>
);

SelectOptions.propTypes = {
  select: PropTypes.oneOf(Object.values(SELECT_OPTIONS)),
  changeSelect: PropTypes.func,
};

export default SelectOptions;
