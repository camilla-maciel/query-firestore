import 'firebase/firestore';
import getInstance from './setup';

import { TYPES } from '../constants';

const parseClauseValue = (clause) => {
  switch (clause.type) {
    case TYPES.NUMBER:
      return Number.parseFloat(clause.value);
    case TYPES.BOOLEAN:
      return clause.value === 'true';
    case TYPES.TIMESTAMP:
      return new Date(clause.value);
    case TYPES.NULL:
      return null;
    default:
      return clause.value;
  }
};

export const query = (collection, clauses) => {
  let collectionRef = getInstance().collection(collection);
  clauses.forEach((clause) => {
    collectionRef = collectionRef.where(clause.field, clause.comparison, parseClauseValue(clause));
  });
  return collectionRef.get();
};
