// @flow

import React from "react";

type CardBodyProps = {
	children: any,
	style?: any,
	className?: string
};

const defaultStyles = {
	padding: "18px"
};

export default ({ className = "", style, children }: CardBodyProps) => {
	const styles = { ...defaultStyles, ...style };
	return (
		<div className={`card__body ${className}`} style={styles}>
			{children}
		</div>
	);
};
