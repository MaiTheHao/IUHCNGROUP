import React, { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import { register, login } from "../../AuthServive";
import useAppContext from "../../context/useAppContext";
import Swal from "sweetalert2";

export const LoginContext = React.createContext();

function Login() {
	const {setAuth} = useAppContext();
	const [state, setState] = useState({ action: "signin" });

	const handleChangeLoginState = () => {
		setState((prevState) => ({ ...prevState, action: prevState.action === "signin" ? "signup" : "signin" }));
	};

	const handleInputChange = (e) => {
		const value = e.target.value;
		setState({ ...state, [e.target.name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password, username, action } = state;

		if (!email || !password || (action === "signup" && !username)) {
			return Swal.fire("Lỗi", "Vui lòng điền đầy đủ thông tin.", "error");
		}

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			return Swal.fire("Lỗi", "Email không hợp lệ.", "error");
		}

		if (password.length < 6) {
			return Swal.fire("Lỗi", "Mật khẩu phải có ít nhất 6 ký tự.", "error");
		}

		if (action === "signup" && username.length < 3) {
			return Swal.fire("Lỗi", "Tên người dùng phải có ít nhất 3 ký tự.", "error");
		}

		try {
			if (action === "signin") {
				await login(email, password);
				setAuth(undefined, true, undefined);
				Swal.fire("Đăng nhập thành công", `Chào mừng bạn quay trở lại!`, "success");
			} else {
				await register(email, password, username);
				Swal.fire("Đăng ký thành công", "Vui lòng kiểm tra email của bạn để xác minh tài khoản.", "success");
				handleChangeLoginState();
			}
		} catch (error) {
			Swal.fire("Lỗi", `${error.message}`, "error");
		}
	};

	return (
		<LoginContext.Provider value={{ handleChangeLoginState, handleInputChange, handleSubmit }}>
			{state.action === "signin" ? <Signin /> : <Signup />}
		</LoginContext.Provider>
	);
}

export default Login;
