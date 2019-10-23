import React from 'react';
import classNames from 'classnames';

import './styles.scss';

export type CardBodyProps = {
    children: React.ReactNode;
    style?: any;
    className?: string;
};

export default ({ className, style, children }: CardBodyProps) => (
    <div className={classNames('card__body', className)} style={style}>
        {children}
    </div>
);
