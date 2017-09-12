import React from "react";

const CardBody = ({ className = "", children, ...props }) => {
	return (
		<div className={`card__body ${className}`} {...props}>
			{children}
		</div>
	);
};

export default CardBody;
