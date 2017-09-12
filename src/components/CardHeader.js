// @flow

import React from "react";

type CardHeader = {
	children: any
};

export default ({ children }: CardHeader) => (
	<div className="card__header">{children}</div>
);
