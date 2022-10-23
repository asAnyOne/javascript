import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signInWithRedirect,
	// FacebookAuthProvider,
	// GithubAuthProvider,
	// TwitterAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";

import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	collection,
	writeBatch,
	query,
	getDocs,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBzBy-2IJLa3Usxmdfhgk-5F7RleBbGSNQ",
	authDomain: "crown-clothing-db-90822.firebaseapp.com",
	projectId: "crown-clothing-db-90822",
	storageBucket: "crown-clothing-db-90822.appspot.com",
	messagingSenderId: "979126615875",
	appId: "1:979126615875:web:ecd7bcaa63c7e4f01379f6",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.getCustomParameters({
	prompt: "select_account",
});

// Authentication
const auth = getAuth();

export const signInWithGooglePopup = () =>
	signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, googleProvider);

// Creating and adding DB to firebase/firestore
const db = getFirestore();

export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
	const collectionRef = collection(db, collectionKey);
	const batch = writeBatch(db);
	console.log(collectionRef);

	objectsToAdd.forEach((object) => {
		// const docRef = doc(collectionRef, object.title.toLowerCase());
		const docRef = doc(db, collectionKey, object.title.toLowerCase());
		batch.set(docRef, object);
	});

	await batch.commit();
	console.log("done");
};

export const createUserDocumentFromAuth = async (
	userAuth,
	additionalInformation = {}
) => {
	if (!userAuth) return;
	const userDocRef = doc(db, "users", userAuth.uid);

	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation,
			});
		} catch (error) {
			console.log("error creating the user", error.message);
		}
	}
	return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
	onAuthStateChanged(auth, callback);

// Getting Collections and Documents from DB

export const getCollectionAndDocument = async () => {
	const collectionRef = collection(db, "categories");
	const q = query(collectionRef);

	const querySnapshot = await getDocs(q);

	const categoryMap = querySnapshot.docs.reduce((accum, docSnapshot) => {
		const { title, items } = docSnapshot.data();
		accum[title.toLowerCase()] = items;
		return accum;
	}, {});

	return categoryMap;
};
