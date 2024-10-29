import React, { useContext } from "react";
import Input from "../../components/Input";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import "./Login.scss";
import { LoginContext } from "./Login";

function Signin() {
	const { handleChangeLoginState, handleInputChange, handleSubmit } = useContext(LoginContext);
	const inputFields = [
		{ id: "inputs-email", name: "email", icon: faUser, placeholder: "Nhập email . . ." },
		{ id: "inputs-password", type: "password", name: "password", icon: faLock, placeholder: "Nhập mật khẩu . . ." },
	];

	return (
		<div className="webPage" id="LoginPage">
			<div className="LoginPage-form">
				<div className="LoginPage-form-title LoginPage-form-part">
					<h2>đăng nhập</h2>
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
						đăng ký
					</button>
					<button className="LoginPage-form-buttons-button --right" onClick={handleSubmit}>
						đăng nhập
					</button>
				</div>
			</div>
		</div>
	);
}

export default Signin;
