import 'firebase/firestore';
import * as firebase from 'firebase/app';

let loaded;
let firestore;

const getInstance = (firebaseKeys) => {
  if (loaded) {
    return firestore;
  }
  
  firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  });

  firestore = firebase.firestore();
  firestore.settings({ timestampsInSnapshots: true });
  loaded = true;

  return firestore;
}

export default getInstance;
