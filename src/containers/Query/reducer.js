import { fromJS } from 'immutable';
import {
  SET_COLLECTION,
  ADD_CLAUSE,
  DELETE_CLAUSE,
  EDIT_CLAUSE,
  SET_RESULT,
  CLEAR,
  SET_SELECT,
} from './constants';
import { TYPES, SELECT_OPTIONS, COMPARISONS } from '../../constants';

const initialState = fromJS({
  collection: '',
  select: SELECT_OPTIONS.ALL_DATA,
  clauses: [],
  result: {},
  resultSize: 0,
});

const addClause = (state) => {
  const clauses = state.get('clauses').toArray();
  clauses.push({ field: '', comparison: COMPARISONS.EQUAL, type: TYPES.STRING, value: '' });
  return state.set('clauses', fromJS(clauses));
};

const deleteClause = (state, index) => {
  const clauses = state.get('clauses').toArray();
  clauses.splice(index, 1);
  return state.set('clauses', fromJS(clauses));
};

const editClause = (state, action) => {
  let newState = state.setIn(['clauses', action.index, action.field], action.value);
  if (action.field === 'type' && action.value === TYPES.BOOLEAN) {
    newState = newState.setIn(['clauses', action.index, 'value'], 'true');
  }
  return newState;
};

function queryReducer(state = initialState, action) {
  switch (action.type) {
    case SET_COLLECTION:
      return state.set('collection', action.value);
    case SET_SELECT:
      return state.set('select', action.value);
    case ADD_CLAUSE:
      return addClause(state);
    case DELETE_CLAUSE:
      return deleteClause(state, action.index);
    case EDIT_CLAUSE:
      return editClause(state, action);
    case SET_RESULT:
      return state.set('result', action.value).set('resultSize', action.size);
    case CLEAR:
      return initialState;
    default:
      return state;
  }
}

export default queryReducer;
