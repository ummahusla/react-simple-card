// @flow

import React from "react";

type CardHeader = {
	children: any
};

const styles = {
	display: "flex",
  alignItems: "center",
	padding: "10px 18px",
	borderBottom: "1px solid #ccc",
	marginBottom: "0"
}

export default ({ children }: CardHeader) => (
	<div className="card__header" style={styles}>{children}</div>
);
