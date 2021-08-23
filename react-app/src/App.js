import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginFormPage from "./components/auth/LoginFormPage";
import SignUpFormPage from "./components/auth/SignUpFormPage";
import NavBar from "./components/NavBar/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import HomePage from "./components/HomePage/HomePage";
import FormsManager from "./components/Forms";
import SharedForm from "./components/Forms/SharedForm";
import Footer from "./components/Footer";
import CreateForm from "./components/CreateForm";
import ContentWrap from "./components/ContentWrap";
import { authenticate } from "./store/session";

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
				{/* <NavBar /> */}
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
					<ProtectedRoute path="/forms" exact={true}>
						<FormsManager />
					</ProtectedRoute>
					<ProtectedRoute path="/forms/build" exact={true}>
						<CreateForm />
					</ProtectedRoute>
					<Route path="/forms/:formId/shared">
						<SharedForm />
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
