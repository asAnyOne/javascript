import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.components";

import "./sign-in-form.styles.scss";
import {
	signInAuthWithEmailAndPassword,
	signInWithGooglePopup,
} from "../../utils/firebase/firebase.util";

const defaultFormFields = {
	email: "",
	password: "",
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const signInWithGoogle = async () => await signInWithGooglePopup();

	const resetFormFields = () => setFormFields(defaultFormFields);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({
			...formFields,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await signInAuthWithEmailAndPassword(email, password);

			resetFormFields();
		} catch (error) {
			switch (error.code) {
				case "auth/user-not-found":
					alert("no user associated with this email");
					break;
				case "auth/wrong-password":
					alert("incorrect password for email");
					break;
				default:
					console.error(error);
					break;
			}
		}
	};

	return (
		<div className="sign-in-container">
			<h2>Already have an account?</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Email"
					type="email"
					name="email"
					required
					value={email}
					onChange={handleChange}
				/>

				<FormInput
					label="Password"
					type="password"
					name="password"
					required
					value={password}
					onChange={handleChange}
				/>
				<div className="buttons-container">
					<Button type="submit">SIGN IN</Button>
					<Button
						type="button"
						buttonType={"google"}
						onClick={signInWithGoogle}
					>
						Google sign in
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
