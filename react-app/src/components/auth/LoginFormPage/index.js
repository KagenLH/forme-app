import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../../store/session";
import AuthHeader from "../AuthHeader";
import styles from "./LoginFormPage.module.css";

const LoginFormPage = () => {
	const [errors, setErrors] = useState([]);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const user = useSelector((state) => state.session.user);
	const dispatch = useDispatch();

	const onLogin = async (e) => {
		e.preventDefault();
		const data = await dispatch(login(email, password));
		if (data) {
			setErrors(data);
		}
	};

	const updateEmail = (e) => {
		setEmail(e.target.value);
	};

	const updatePassword = (e) => {
		setPassword(e.target.value);
	};

	if (user) {
		return <Redirect to="/" />;
	}

	return (
		<>
			<AuthHeader />
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
								<div>
									{errors.map((error, ind) => (
										<div key={ind}>{error}</div>
									))}
								</div>
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
									<Link></Link>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className={styles.footer_container}>yayaya</div>
			</div>
		</>
	);
};

export default LoginFormPage;
