import React, { useState, useEffect, useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import Login from "./pages/Login/Login";
import Loading from "./pages/Loading";
import { Outlet } from "react-router-dom";
import { AppContext } from "./context/AppContext";

function Auth() {
	const { authState, setAuth } = useContext(AppContext);
	const [isAccountLogged, setIsAccountLogged] = useState(false);
	const [isLoad, setIsLoad] = useState(false);

	const checkAuthState = async () => {
		setIsLoad(true);
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setIsAccountLogged(true);
				setAuth(true, undefined, user);
			} else {
				setIsAccountLogged(false);
				setAuth(false, false, null);
			}
			setIsLoad(false);
		});
		return () => unsubscribe();
	};

	useEffect(() => {
		checkAuthState();
	}, []);

	return <>{!isLoad ? isAccountLogged && authState.isLogged ? <Outlet /> : <Login /> : <Loading />}</>;
}

export default Auth;
