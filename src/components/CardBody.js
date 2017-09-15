// @flow

import React from "react";

type CardBodyProps = {
	children: any,
	className?: string
};

const styles = {
	padding: "18px"
};

export default ({ className = "", children }: CardBodyProps) => {
	return (
		<div className={`card__body ${className}`} style={styles}>
			{children}
		</div>
	);
};
