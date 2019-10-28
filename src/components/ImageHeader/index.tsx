import React from 'react';
import classNames from 'classnames';

import './styles.scss';

export type ImageHeaderProps = {
    imageSrc: string;
    alt?: string;
    style?: React.CSSProperties;
    className?: string;
};

export default ({ className, style, imageSrc, alt = '' }: ImageHeaderProps) => (
    <div className={classNames('card__header--image', className)} style={style}>
        <img src={imageSrc} alt={alt} />
    </div>
);
