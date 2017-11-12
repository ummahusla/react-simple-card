// @flow

import React from "react";

type ImageHeaderProps = {
	imageSrc: string,
	style?: any,
	alt?: string
};

const defaultStyles = {
	position: "relative"
};

const defaultImageStyles = {
	display: "block",
	width: "100%",
	borderRadius: "2px 2px 0 0",
	position: "relative",
	left: "0",
	right: "0",
	top: "0",
	bottom: "0"
};

export default ({ style, imageSrc, alt = "" }: ImageHeaderProps) => {
	const styles = { ...defaultStyles, ...style };
	return (
		<div className="card__header--image" style={styles}>
			<img src={imageSrc} style={defaultImageStyles} alt={alt} />
		</div>
	);
};
