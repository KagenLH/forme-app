import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginFormPage from "./components/auth/LoginFormPage";
import SignUpFormPage from "./components/auth/SignUpFormPage";
import NavBar from "./components/NavBar/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer";
import { authenticate } from "./store/session";
import BuildForm from "./components/Forms";
import CreateForm from "./components/CreateForm";
import ContentWrap from "./components/ContentWrap";

function App() {
	const [loaded, setLoaded] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			await dispatch(authenticate());
			setLoaded(true);
		})();
	}, [dispatch]);

	if (!loaded) {
		return null;
	}

	return (
		<BrowserRouter>
			<ContentWrap>
				<NavBar />
				<Switch>
					<Route path="/login" exact={true}>
						<LoginFormPage />
					</Route>
					<Route path="/sign-up" exact={true}>
						<SignUpFormPage />
					</Route>
					<ProtectedRoute path="/users" exact={true}>
						<UsersList />
					</ProtectedRoute>
					<ProtectedRoute path="/users/:userId" exact={true}>
						<User />
					</ProtectedRoute>
					<Route path="/forms" exact={true}>
						<BuildForm />
					</Route>
					<Route path="/forms/build" exact={true}>
						<CreateForm />
					</Route>
					<Route path="/" exact={true}>
						<HomePage />
					</Route>
				</Switch>
			</ContentWrap>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
