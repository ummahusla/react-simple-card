import React from 'react';
import classNames from 'classnames';

import './styles.scss';

export type CardFooterProps = {
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
};

export default ({ className, style, children }: CardFooterProps) => (
    <div className={classNames('card__footer', className)} style={style}>
        {children}
    </div>
);
