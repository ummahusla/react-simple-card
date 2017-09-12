// @flow

import React from "react";

type CardBodyProps = {
	children: any,
	className?: string
}

const CardBody = ({ className = "", children }: CardBodyProps) => {
	return <div className={`card__body ${className}`}>{children}</div>;
};

export default CardBody;
