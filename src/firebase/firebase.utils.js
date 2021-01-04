import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCWuDkw9_A0dAdLBasKWYTcnFjkBXlG-yM',
	authDomain: 'react-ecommerce-45b51.firebaseapp.com',
	projectId: 'react-ecommerce-45b51',
	storageBucket: 'react-ecommerce-45b51.appspot.com',
	messagingSenderId: '638680966001',
	appId: '1:638680966001:web:50801407f6b1ce93dfccd0',
	measurementId: 'G-7QC52XKGN3'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
