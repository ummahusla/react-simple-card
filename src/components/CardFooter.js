// @flow

import React from "react";

type CardFooterProps = {
	children: any
};

const styles = {
	display: "flex",
  alignItems: "center",
	padding: "10px 18px",
	borderTop: "1px solid #ccc",
	marginTop: "0"
}

export default ({ children }: CardFooterProps) => (
	<div className="card__footer" style={styles}>{children}</div>
);
