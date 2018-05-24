import { query } from 'firestore/query';

import {
  SET_COLLECTION, SET_SELECT, ADD_CLAUSE, DELETE_CLAUSE, EDIT_CLAUSE, SET_RESULT, CLEAR,
} from './constants';

import { SELECT_OPTIONS } from '../../constants';

export const setCollection = (value) => ({ type: SET_COLLECTION, value });

export const setSelect = (value) => ({ type: SET_SELECT, value });

export const addClause = () => ({ type: ADD_CLAUSE });

export const deleteClause = (index) => ({ type: DELETE_CLAUSE, index });

export const editClause = (index, field, value) => ({ type: EDIT_CLAUSE, index, field, value });

export const setResult = (value, size) => ({ type: SET_RESULT, value, size });

export const clear = () => ({ type: CLEAR });

const getIds = (snapshot) => {
  const ids = [];
  snapshot.forEach((doc) => ids.push(doc.id));
  return ids;
};

const getData = (snapshot) => {
  let result = {};
  snapshot.forEach((doc) => { result = { ...result, [doc.id]: doc.data() }; });
  return result;
};

export const runQuery = (collection, clauses, select) =>
  (dispatch) => {
    query(collection, clauses).then((snapshot) => {
      const result = select === SELECT_OPTIONS.ALL_DATA ? getData(snapshot) : getIds(snapshot);
      dispatch(setResult(result, snapshot.size));
    }
    );
  };
