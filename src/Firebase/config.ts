import * as firebase from 'firebase';

const settings = { timestampsInSnapshots: true };

const firebaseConfig = {
  apiKey: 'AIzaSyCNGaoelnjv9K-0JfMCSLMljTu2whEMggw',
  authDomain: 'clip-project-5df0b.firebaseapp.com',
  databaseURL: 'https://clip-project-5df0b.firebaseio.com',
  projectId: 'clip-project-5df0b',
  storageBucket: 'clip-project-5df0b.appspot.com',
  messagingSenderId: '924374199868',
  appId: '1:924374199868:web:9488a5a728cb85e5ff9d39',
  measurementId: 'G-2V7BML7F47',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings(settings);

firebase.analytics();

export default firebaseConfig
