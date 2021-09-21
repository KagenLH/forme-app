import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../../store/session";
import styles from "./LoginFormPage.module.css";
import NavBar from "../../NavBar/NavBar";
import Errors from "../../Errors";
import { setErrors } from "../../../store/errors";

const LoginFormPage = () => {
	// const [errors, setErrors] = useState([]);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const user = useSelector((state) => state.session.user);
	const dispatch = useDispatch();

	// Reset errors when visiting this page
	useEffect(() => {
		dispatch(setErrors(null));
	}, [dispatch]);

	const onLogin = async (e) => {
		e.preventDefault();
		await dispatch(login(email, password));
	};

	const updateEmail = (e) => {
		setEmail(e.target.value);
	};

	const updatePassword = (e) => {
		setPassword(e.target.value);
	};

	const loginDemo = async () => {
		await dispatch(login("demo@aa.io", "password"));
		// <Redirect to="/forms" />;
	};

	if (user) {
		return <Redirect to="/forms" />;
	}

	return (
		<>
			<NavBar />
			<div className={styles.page_container}>
				<div className={styles.middle_container}>
					<div className={styles.welcome_block}>
						<h1 className={styles.welcome}>Welcome to FORMe!</h1>
						<p className={styles.create_login}>
							Create an account or log in
						</p>
					</div>
					<div className={styles.form_container}>
						<div className={styles.form_block}>
							<form className={styles.form} onSubmit={onLogin}>
								<Errors />
								<label htmlFor="email"></label>
								<input
									className={styles.email}
									name="email"
									type="text"
									placeholder="EMAIL ADDRESS"
									value={email}
									onChange={updateEmail}
								/>
								<div>
									<label htmlFor="password"></label>
									<input
										className={styles.password}
										name="password"
										type="password"
										placeholder="PASSWORD"
										value={password}
										onChange={updatePassword}
									/>
									<button
										className={styles.submit_button}
										type="submit">
										LOGIN
									</button>
									<p className={styles.first_time_message}>
										First time on FORMe?
									</p>
									<Link
										className={styles.create}
										to="/sign-up">
										<div>Create an account</div>
									</Link>
									<p className={styles.or}>Or</p>
									<p
										className={styles.demo}
										onClick={loginDemo}>
										Login as Demo User
									</p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LoginFormPage;
