import React from "react";

const Card = ({ className = "", children, ...props }) => {
	return (
		<div className={`card ${className}`} {...props}>
			{children}
		</div>
	);
};

export default Card;
