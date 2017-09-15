// @flow

import React from "react";

type CardHeaderProps = {
	children: any,
	style?: any
};

const defaultStyles = {
	display: "flex",
	alignItems: "center",
	padding: "10px 18px",
	borderBottom: "1px solid #ccc",
	marginBottom: "0"
};

export default ({ style, children }: CardHeaderProps) => {
	const styles = { ...defaultStyles, ...style };
	return (
		<div className="card__header" style={styles}>
			{children}
		</div>
	);
};
