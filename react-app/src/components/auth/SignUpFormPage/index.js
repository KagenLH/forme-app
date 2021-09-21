import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { useEffect } from "react";
import { setErrors } from "../../../store/errors";
import { signUp } from "../../../store/session";
import styles from "./SignUpFormPage.module.css";
import NavBar from "../../NavBar/NavBar";
import Errors from "../../Errors";

const SignUpFormPage = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");
	const user = useSelector((state) => state.session.user);
	const dispatch = useDispatch();

	// Resetting errors from images
	useEffect(() => {
		dispatch(setErrors(null));
	}, [dispatch]);

	const onSignUp = async (e) => {
		e.preventDefault();
		await dispatch(signUp(username, email, password, repeatPassword));
	};

	const updateUsername = (e) => {
		setUsername(e.target.value);
	};

	const updateEmail = (e) => {
		setEmail(e.target.value);
	};

	const updatePassword = (e) => {
		setPassword(e.target.value);
	};

	const updateRepeatPassword = (e) => {
		setRepeatPassword(e.target.value);
	};

	if (user) {
		return <Redirect to="/" />;
	}

	return (
		<>
			<NavBar />
			<div className={styles.page_container}>
				<div className={styles.middle_container}>
					<div className={styles.welcome_block}>
						<h1 className={styles.welcome}>
							Create powerful forms today.
						</h1>
					</div>
					<div className={styles.form_container}>
						<div className={styles.form_block}>
							<form className={styles.form} onSubmit={onSignUp}>
								<div>
									<Errors />
									<label className={styles.input_label}>
										* EMAIL ADDRESS
									</label>
									<input
										// required={true}
										className={styles.input_fields}
										type="text"
										placeholder="Your valid email"
										name="email"
										onChange={updateEmail}
										value={email}></input>
								</div>
								<div>
									<label className={styles.input_label}>
										* USERNAME
									</label>
									<input
										required={true}
										className={styles.input_fields}
										type="text"
										placeholder="Your custom FORMe name"
										name="username"
										onChange={updateUsername}
										value={username}></input>
								</div>
								<div>
									<label className={styles.input_label}>
										* PASSWORD
									</label>
									<input
										required={true}
										className={styles.input_fields}
										type="password"
										placeholder="At least 7 characters with one letter and number"
										name="password"
										onChange={updatePassword}
										value={password}></input>
								</div>
								<div>
									<label className={styles.input_label}>
										* CONFIRM PASSWORD
									</label>
									<input
										className={styles.input_fields}
										type="password"
										placeholder="Must match with password"
										name="repeat_password"
										onChange={updateRepeatPassword}
										value={repeatPassword}
										required={true}></input>
								</div>
								<button
									className={styles.submit_button}
									type="submit">
									Sign Up
								</button>
							</form>
						</div>
						<aside className={styles.feature_container}>
							<h3 className={styles.free}>FREE</h3>
							<hr />
							<ul className={styles.free_offers}>
								<li className={styles.free_offers_item}>
									Forms
								</li>
								<li className={styles.free_offers_item}>
									Shared Forms
								</li>
								<li className={styles.free_offers_item}>
									Multiple Fields
								</li>
								<li className={styles.free_offers_item}>
									1 User
								</li>
								<li className={styles.free_offers_item}>
									Unlimited Previews
								</li>
								<li className={styles.free_offers_item}>
									and more!!!
								</li>
							</ul>
							<hr />
						</aside>
					</div>
				</div>
			</div>
		</>
	);
};

export default SignUpFormPage;
