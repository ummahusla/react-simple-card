// @flow

import React from "react";

type CardProps = {
	children: any,
	bgColor?: string,
	style?: any,
	className?: string
};

const defaultStyles = {
	width: "100%",
	display: "block",
	position: "relative",
	borderRadius: "4px",
	marginBottom: "10px",
	border: "1px solid #ccc"
};

export default ({
	className = "",
	bgColor = "#fff",
	style,
	children
}: CardProps) => {
	const styles = { ...defaultStyles, ...style, backgroundColor: bgColor };
	return (
		<div className={`card ${className}`} style={styles}>
			{children}
		</div>
	);
};
