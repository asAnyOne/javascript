import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithPopup,
	// signInWithRedirect,
	GoogleAuthProvider,
	// FacebookAuthProvider,
	// GithubAuthProvider,
	// TwitterAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

const provider = new GoogleAuthProvider();
provider.getCustomParameters({
	prompt: "select_account",
});

// Authentication
const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// DB
const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
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
			});
		} catch (error) {
			console.log("error creating the user", error.message);
		}
	}
	return userDocRef;
};
