import React from 'react';
import { FC } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { cnPhotoContainer } from './PhotoContainer.classname';

import './PhotoContainer.css';


type PhotoContainerProps = {
    urls: string[];
}

const PhotoContainer: FC<PhotoContainerProps> = ({ urls }) => {
    return (
        <div className={cnPhotoContainer()}>
            <ResponsiveMasonry>
                <Masonry>
                    {urls.map((srcImage, index) =>
                        <a href={srcImage} data-lightbox="home-gallery" key={index}>
                            <img src={srcImage} alt="home-gallery" />
                        </a>
                    )}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    );
}

export default PhotoContainer;
