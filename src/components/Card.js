// @flow

import React from "react";

type CardProps = {
	children: any,
	className?: string
};

const styles = {
	width: "100%",
  display: "block",
	position: "relative",
  backgroundColor: "#fff",
	borderRadius: "4px",
	marginBottom: "10px",
	border: "1px solid #ccc"
}

const Card = ({ className = "", children }: CardProps) => {
	return <div className={`card ${className}`} style={styles}>{children}</div>;
};

export default Card;
