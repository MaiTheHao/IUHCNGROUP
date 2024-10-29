import { faSlack } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Loading.scss";

function Loading() {
	return <div className="webPage" id="LoadingPage">
		<div className="LoadingPage-container">
			<div className="LoadingPage-container-spinner"><FontAwesomeIcon icon={faSlack} /></div>
			<div className="LoadingPage-container-title">
				<h2>loading</h2>
			</div>
		</div>
	</div>;
}

export default Loading;
