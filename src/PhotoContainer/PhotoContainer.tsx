import React from 'react';
import { FC } from 'react';

import { cnPhotoContainer } from './PhotoContainer.classname';

import './PhotoContainer.css';

type PhotoContainerProps = {
    urls: string[];
}

const PhotoContainer: FC<PhotoContainerProps> = ({ urls }) => {
    return (
        <div className={cnPhotoContainer()}>
            {urls.map((srcImage, index) =>
                <a href={srcImage} data-lightbox="home-gallery" key={index}>
                    <img src={srcImage} alt="home-gallery" />
                </a>
            )}
        </div>
    );
}

export default PhotoContainer;
