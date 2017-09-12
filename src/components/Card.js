// @flow

import React from "react";

const Card = ({ className = "", children }) => {
	return <div className={`card ${className}`}>{children}</div>;
};

export default Card;
