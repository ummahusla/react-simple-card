// @flow

import React from "react";

type CardProps = {
	children: any,
	bgColor?: string,
	fontColor?: string,
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
	fontColor = "#000",
	style,
	children
}: CardProps) => {
	const styles = {
		...defaultStyles,
		...style,
		backgroundColor: bgColor,
		color: fontColor
	};
	return (
		<div className={`card ${className}`} style={styles}>
			{children}
		</div>
	);
};
