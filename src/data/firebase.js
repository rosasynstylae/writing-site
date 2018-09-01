import firebase from 'firebase';
import 'firebase/firestore'; // add this to use Firestore
import firebaseConfig from '../config/firestore';

// initialize firebase instance
firebase.initializeApp(firebaseConfig); // <- new to v2.*.*

export const initFirebase = firebase;

// initialize Firestore
const db = firebase.firestore();

export default db;
