import React from 'react';

import Typography from '@material-ui/core/Typography';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import messages from 'containers/Query/messages';

const ToolbarWrapper = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const AppBar = () => (
  <MuiAppBar>
    <ToolbarWrapper>
      <Typography variant={'title'} color="inherit">
        <FormattedMessage {...messages.header} />
      </Typography>
      <Typography variant={'caption'} color="inherit">
        {process.env.REACT_APP_FIREBASE_PROJECT_ID}
      </Typography>
    </ToolbarWrapper>
  </MuiAppBar>
);

export default AppBar;
