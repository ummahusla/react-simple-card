import React from 'react';
import classNames from 'classnames';

import './styles.scss';

export type CardHeaderProps = {
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
};

export default ({ className, style, children }: CardHeaderProps) => (
    <div className={classNames('card__header', className)} style={style}>
        {children}
    </div>
);
