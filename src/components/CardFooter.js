// @flow

import React from "react";

type CardFooterProps = {
	children: any
};

export default ({ children }: CardFooterProps) => (
	<div className="card__footer">{children}</div>
);
