import React, { useContext, useEffect, useRef, useState } from "react";
import ICON from "../../assets/pics/icon.jpg";
import { Link } from "react-router-dom";
import { faBars, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logout } from "../../AuthServive";
import Swal from "sweetalert2";
import { AppPages } from "../../App";
import useAppContext from "../../context/useAppContext";

const MENU_WIDTH_APPEAR = 850;

function MenuList({ menuRef, ...rest }) {
	const { pageStatus, setPageStatus } = useAppContext();
	return (
		<ul {...rest} ref={menuRef}>
			{AppPages.map((item, index) => (
				<li key={index} onClick={() => setPageStatus((prev) => ({ ...prev, currentPage: item.id }))}>
					<Link to={item.path} className={item.id === pageStatus.currentPage ? "openning" : ""}>
						{item.name}
					</Link>
				</li>
			))}
		</ul>
	);
}

function Header() {
	const { authState, setAuth, screenSize } = useAppContext();
	const [openOptions, setOpenOptions] = useState(false);
	const [openMenu, setOpenMenu] = useState(false);

	const optionsRef = useRef(null),
		optionsIconRef = useRef(null),
		menuRef = useRef(null),
		menuIconRef = useRef(null);

	const handleLogout = async () => {
		try {
			await logout();
			Swal.fire("Thành công", "Đăng xuất thành công!", "success");
			setAuth(false, false, null);
		} catch (error) {
			Swal.fire("Lỗi", "Đăng xuất thất bại!", "error");
		}
	};

	const handleClickOutside = (event) => {
		if (
			optionsIconRef.current &&
			!optionsIconRef.current.contains(event.target) &&
			optionsRef.current &&
			!optionsRef.current.contains(event.target)
		) {
			setOpenOptions(false);
		}
		
		if (
			menuIconRef.current &&
			!menuIconRef.current.contains(event.target) &&
			menuRef.current &&
			!menuRef.current.contains(event.target)
		) {
			setOpenMenu(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<header className="comp-header">
			<div className="comp-header-left">
				<div className="comp-header-left-logo">
					<img src={ICON} alt="IUH CN GROUP ICON" />
				</div>
				<div className="comp-header-left-title">IUH CN GROUP SERVICES</div>

				<div className="comp-header-left-line">|</div>
				<div className="comp-header-left-nav">
					<MenuList />
				</div>
			</div>
			<div className="comp-header-right">
				<div className="comp-header-right-user">
					<span className="comp-header-right-user-email">{authState.user.displayName}</span>
					<div className="comp-header-right-user-options">
						<FontAwesomeIcon
							onClick={() => setOpenOptions(!openOptions)}
							icon={faCircleUser}
							ref={optionsIconRef}
						></FontAwesomeIcon>
						{openOptions ? (
							<ul className="simple-dropmenu" ref={optionsRef}>
								<li>Hồ sơ</li>
								<li>Cài đặt</li>
								<li onClick={() => handleLogout()}>Đăng xuất</li>
							</ul>
						) : null}
					</div>

					{screenSize.width <= MENU_WIDTH_APPEAR ? (
						<div className="comp-header-right-menu">
							<FontAwesomeIcon icon={faBars} onClick={() => setOpenMenu(!openMenu)} ref={menuIconRef} />
							{openMenu ? <MenuList menuRef={menuRef} className="simple-dropmenu"></MenuList> : null}
						</div>
					) : null}
				</div>
			</div>
		</header>
	);
}

export default Header;
