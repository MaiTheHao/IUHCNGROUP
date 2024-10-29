import React from "react";
import Input from "../../components/Input";
import { faUser, faLock, faHeart, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import "./Login.scss";
import { LoginContext } from "./Login";

function Register() {
	const { handleChangeLoginState, handleInputChange, handleSubmit } = React.useContext(LoginContext);
	const inputFields = [
		{ id: "inputs-username", name: "username", icon: faHeart, placeholder: "Nhập tên người dùng . . ." },
		{ id: "inputs-email", name: "email", icon: faUser, placeholder: "Nhập email . . ." },
		{ id: "inputs-password", type: "password", name: "password", icon: faLock, placeholder: "Nhập mật khẩu . . ." },
		{
			id: "inputs-confirm-password",
			type: "password",
			name: "confirm-password",
			icon: faShieldHalved,
			placeholder: "Xác nhận mật khẩu . . .",
		},
	];

	return (
		<div className="WebPage" id="LoginPage">
			<div className="LoginPage-form">
				<div className="LoginPage-form-title LoginPage-form-part">
					<h2>đăng ký</h2>
				</div>
				<div className="LoginPage-form-inputs LoginPage-form-part">
					{inputFields.map((field) => (
						<Input
							type={field.type}
							key={field.id}
							id={field.id}
							name={field.name}
							icon={field.icon}
							placeholder={field.placeholder}
							onChange={handleInputChange}
						/>
					))}
				</div>
				<div className="LoginPage-form-buttons LoginPage-form-part">
					<button className="LoginPage-form-buttons-button --left" onClick={() => handleChangeLoginState()}>
						đăng nhập
					</button>
					<button className="LoginPage-form-buttons-button --right" onClick={handleSubmit}>
						đăng ký
					</button>
				</div>
			</div>
		</div>
	);
}

export default Register;
