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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exits) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		// Check and see if there is any data already in place - if there isn't create a user based of the given data from UserAuth object
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	// Return userRef for possible future use
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
