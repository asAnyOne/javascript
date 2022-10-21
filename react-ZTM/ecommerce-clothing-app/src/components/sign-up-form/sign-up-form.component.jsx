import { useState } from "react";

import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.components";

import "./sign-up-form.styles.scss";

const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);

	const { displayName, email, password, confirmPassword } = formFields;

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

		if (password !== confirmPassword) {
			alert("passwords do not match");
			return;
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password
			);
			await createUserDocumentFromAuth(user, { displayName });
			resetFormFields();
		} catch (error) {
			console.log("user creation encountered an error", error);
		}
	};

	return (
		<div className="sign-up-container">
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Display Name"
					type="text"
					name="displayName"
					id="name"
					required
					value={displayName}
					onChange={handleChange}
				/>

				<FormInput
					label="Email"
					type="email"
					name="email"
					id="email"
					required
					value={email}
					onChange={handleChange}
				/>

				<FormInput
					label="Password"
					type="password"
					name="password"
					id="password"
					required
					value={password}
					onChange={handleChange}
				/>

				<FormInput
					label="Confirm Password"
					type="password"
					name="confirmPassword"
					id="cPassword"
					required
					value={confirmPassword}
					onChange={handleChange}
				/>
				<Button type="submit">SIGN UP</Button>
			</form>
		</div>
	);
};

export default SignUpForm;
