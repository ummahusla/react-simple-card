// @flow

import React from "react";

type CardFooterProps = {
	children: any,
	style?: any
};

const defaultStyles = {
	display: "flex",
	alignItems: "center",
	padding: "10px 18px",
	borderTop: "1px solid #ccc",
	marginTop: "0"
};

export default ({ style, children }: CardFooterProps) => {
	const styles = { ...defaultStyles, ...style };
	return (
		<div className="card__footer" style={styles}>
			{children}
		</div>
	);
};
