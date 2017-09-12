// @flow

import React from "react";

type CardProps = {
	children: any,
	className?: string
};

const Card = ({ className = "", children }: CardProps) => {
	return <div className={`card ${className}`}>{children}</div>;
};

export default Card;
