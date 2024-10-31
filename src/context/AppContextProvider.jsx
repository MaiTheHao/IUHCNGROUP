import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AppContext } from "./AppContext";
import Cookies from "js-cookie";

const isLoggedCookieID = "wjk1j23k1jwkn1kdbk1jwbk1h3i12uy3i12uyw91789w71237928478";

function AppContextProvider({ children }) {
	// Khai báo state
	const [authState, setAuthState] = useState({
		isAuth: false,
		isLogged: false,
		user: null,
	});

	const [pageStatus, setPageStatus] = useState({
		currentPage: Cookies.get("currentPage") ?? "trang-chu",
	});

	const [screenSize, setScreenSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	// Các hàm cập nhật state
	const setAuth = (isAuth, isLogged, user) => {
		setAuthState((prevState) => ({
			...prevState,
			isAuth: isAuth ?? prevState.isAuth,
			isLogged: isLogged ?? prevState.isLogged,
			user: user ?? prevState.user,
		}));

		if (isLogged !== undefined) {
			Cookies.set(isLoggedCookieID, isLogged);
		}
	};

	const setScreenSizeState = (width, height) => {
		setScreenSize((prevState) => ({
			...prevState,
			width: width ?? prevState.width,
			height: height ?? prevState.height,
		}));
	};

	const handleSetCrrPage = (currentPage) => {
		setPageStatus({
			...pageStatus,
			currentPage,
		});

		if(currentPage != undefined){
			Cookies.set("currentPage", currentPage);
		}
	};

	// Các hook hiệu ứng
	useEffect(() => {
		const handleResize = () => {
			setScreenSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		const isLogged = Cookies.get(isLoggedCookieID) === "true";
		setAuthState((prevState) => ({
			...prevState,
			isLogged: isLogged,
		}));

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// Giá trị context
	const contextValue = {
		authState,
		setAuth,
		screenSize,
		setScreenSize: setScreenSizeState,
		pageStatus,
		handleSetCrrPage,
	};

	return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}

AppContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AppContextProvider;
