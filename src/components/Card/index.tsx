import React from 'react';
import classNames from 'classnames';

import './styles.scss';

export type CardProps = {
    children: React.ReactNode;
    bgColor?: string;
    fontColor?: string;
    style?: any;
    className?: string;
};

export default ({
    className,
    bgColor = '#fff',
    fontColor = '#000',
    style,
    children
}: CardProps) => {
    const styles = {
        ...style,
        backgroundColor: bgColor,
        color: fontColor
    };
    return (
        <div className={classNames('card', className)} style={styles}>
            {children}
        </div>
    );
};
