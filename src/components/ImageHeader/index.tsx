import React from 'react';
import classNames from 'classnames';

import './styles.scss';

export type ImageHeaderProps = {
    imageSrc: string;
    alt?: string;
    style?: any;
    className?: string;
};

export default ({ className, style, imageSrc, alt = '' }: ImageHeaderProps) => {
    return (
        <div className={classNames('card__header--image', className)} style={style}>
            <img src={imageSrc} alt={alt} />
        </div>
    );
};
