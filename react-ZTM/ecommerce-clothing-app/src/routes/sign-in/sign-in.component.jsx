import { Fragment } from "react";
import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util";

const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();

		await createUserDocumentFromAuth(user);
	};

	return (
		<Fragment>
			<h1>Sign in page</h1>
			<button onClick={logGoogleUser}>Sign in with Google Popup</button>
		</Fragment>
	);
};
export default SignIn;
