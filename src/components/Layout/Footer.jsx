import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const contacts = [
	{ icon: faFacebook, label: "Facebook", className: "facebook-icon", url: "https://www.facebook.com" },
	{ icon: faEnvelope, label: "Gmail", className: "envelope-icon", url: "mailto:iuhcngroup@gmail.com" },
	{ icon: faInstagram, label: "Instagram", className: "instagram-icon", url: "https://www.instagram.com" },
];

function Footer() {
	return (
		<footer className="comp-footer">
			<div className="comp-footer-left">
				<div className="comp-footer-left-description">
					<h2>❤️️ Cảm ơn đã sử dụng trang web của chúng tôi ❤️️</h2>
					<span>💌 Trang web này được thiết kế nhằm hỗ trợ mục đích có chủ đích của CLB 💌</span>
					<span>💌 Trang web này phục vụ mục đích dành cho CLB và là một trang web phi lợi nhuận 💌</span>
				</div>
			</div>
			<div className="comp-footer-right">
				<div className="comp-footer-right-contacts">
					<h2 className="comp-footer-right-contacts-title">Liên hệ</h2>
					<ul className="comp-footer-right-contacts-list">
						{contacts.map(({ icon, label, className, url }) => (
							<a target="_blank" rel="noopener noreferrer" key={label} href={url} className={`comp-footer-right-contacts-list-element ${className}`}>
								<FontAwesomeIcon icon={icon} className="contact-icon" />
								{label}
							</a>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;