import { createSelector } from 'reselect';

const selectQueryDomain = () => (state) => state.get('query');
const selectQuery = (state) => state.getIn(['query']);

const makeSelectQuery = () => createSelector(
  selectQueryDomain(),
  (substate) => substate.toJS()
);

const makeSelectCollection = () => createSelector(
  selectQuery,
  (state) => state.get('collection')
);

const makeSelectSelect = () => createSelector(
  selectQuery,
  (state) => state.get('select')
);

const makeSelectClauses = () => createSelector(
  selectQuery,
  (state) => state.get('clauses').toJS()
);

const makeSelectResult = () => createSelector(
  selectQuery,
  (state) => state.get('result')
);

const makeSelectResultSize = () => createSelector(
  selectQuery,
  (state) => state.get('resultSize')
);

export default makeSelectQuery;
export {
  selectQueryDomain,
  makeSelectCollection,
  makeSelectSelect,
  makeSelectClauses,
  makeSelectResult,
  makeSelectResultSize,
};
