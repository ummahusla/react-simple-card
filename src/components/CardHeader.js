// @flow

import React from "react";

type CardHeaderProps = {
	children: any
};

const styles = {
	display: "flex",
	alignItems: "center",
	padding: "10px 18px",
	borderBottom: "1px solid #ccc",
	marginBottom: "0"
};

export default ({ children }: CardHeaderProps) => (
	<div className="card__header" style={styles}>
		{children}
	</div>
);
