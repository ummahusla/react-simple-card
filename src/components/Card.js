// @flow

import React from "react";

type CardProps = {
	children: any,
	style?: any,
	className?: string
};

const defaultStyles = {
	width: "100%",
	display: "block",
	position: "relative",
	backgroundColor: "#fff",
	borderRadius: "4px",
	marginBottom: "10px",
	border: "1px solid #ccc"
};

export default ({ className = "", style, children }: CardProps) => {
	const styles = { ...defaultStyles, ...style };
	return (
		<div className={`card ${className}`} style={styles}>
			{children}
		</div>
	);
};
