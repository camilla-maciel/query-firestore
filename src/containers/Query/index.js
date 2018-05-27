import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { intlShape, injectIntl } from 'react-intl';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import styled from 'styled-components';

import AppBar from 'components/AppBar';
import Clauses from 'components/Clauses';
import Buttons from 'components/Buttons';
import Result from 'components/Result';
import SelectOptions from 'components/SelectOptions';

import {
  makeSelectCollection,
  makeSelectResult,
  makeSelectClauses,
  makeSelectResultSize,
  makeSelectSelect,
} from './selectors';

import {
  setCollection,
  addClause,
  deleteClause,
  editClause,
  runQuery,
  clear,
  setSelect,
} from './actions';

import messages from './messages';
import { COMPARISONS, TYPES, SELECT_OPTIONS } from '../../constants';

const Wrapper = styled.div`
  padding: 80px 24px;
  display: flex;
  flex-direction: column;
`;

const CenteredGrid = styled(Grid)`
  justify-content: center;
`;

export class Query extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  editClause = (evt, index) => {
    this.props.editClause(index, evt.target.name, evt.target.value);
  };

  render() {
    const { formatMessage } = this.props.intl;
    
    return (
      <div>
        <AppBar />
        <CenteredGrid container>
          <Grid item xs={12} sm={10}>
            <Wrapper>
              <TextField
                label={formatMessage(messages.collection)}
                value={this.props.collection}
                onChange={this.props.changeCollection}
              />
              <SelectOptions select={this.props.select} changeSelect={this.props.changeSelect} />
              <Clauses
                clauses={this.props.clauses}
                editClause={this.editClause}
                addClause={this.props.addClause}
                deleteClause={this.props.deleteClause}
              />
              <Buttons
                runQuery={this.props.runQuery}
                clear={this.props.clear}
                collection={this.props.collection}
                clauses={this.props.clauses}
                select={this.props.select}
              />
              <Result result={this.props.result} resultSize={this.props.resultSize} />
            </Wrapper>
          </Grid>
        </CenteredGrid>
      </div>
    );
  }
}

Query.propTypes = {
  intl: intlShape.isRequired,
  collection: PropTypes.string,
  select: PropTypes.oneOf(Object.values(SELECT_OPTIONS)),
  clauses: PropTypes.arrayOf(PropTypes.shape({
    field: PropTypes.string,
    comparison: PropTypes.oneOf(Object.values(COMPARISONS)),
    type: PropTypes.oneOf(Object.values(TYPES)),
    value: PropTypes.string,
  })),
  result: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  resultSize: PropTypes.number,

  changeCollection: PropTypes.func,
  changeSelect: PropTypes.func,
  addClause: PropTypes.func,
  deleteClause: PropTypes.func,
  editClause: PropTypes.func,
  runQuery: PropTypes.func,
  clear: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  collection: makeSelectCollection(),
  select: makeSelectSelect(),
  clauses: makeSelectClauses(),
  result: makeSelectResult(),
  resultSize: makeSelectResultSize(),
});

const mapDispatchToProps = (dispatch) => ({
  changeCollection: (evt) => dispatch(setCollection(evt.target.value)),
  changeSelect: (evt) => dispatch(setSelect(evt.target.value)),
  addClause: () => dispatch(addClause()),
  deleteClause: (index) => dispatch(deleteClause(index)),
  editClause: (index, field, value) => dispatch(editClause(index, field, value)),
  runQuery: (collection, clauses, select) => dispatch(runQuery(collection, clauses, select)), // why ownProps is not working?
  clear: () => dispatch(clear()),
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Query));
